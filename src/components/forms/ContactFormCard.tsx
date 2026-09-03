import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  RefreshCw,
} from "lucide-react";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  useCreateContactMessage,
} from "../../hooks/mutations/useCreateContactMessage";

import useSubmissionNetwork from "../../hooks/useSubmissionNetwork";

import SubmissionNotice from "../../components/feedback/SubmissionNotice";

// ======================================================
// Service Options
// ======================================================

const serviceOptions = [
  "General Inquiry",
  "EPC Projects",
  "Pipeline Services",
  "Process Piping",
  "Hot Tapping",
  "Pipeline Integrity",
  "Storage Tanks",
  "Mechanical Works",
  "Cathodic Protection",
  "Civil Works",
  "Electrical and Instrumentation",
  "Auger Boring & HDD",
] as const;

type ServiceOption =
  (typeof serviceOptions)[number];

// ======================================================
// Types
// ======================================================

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  service: ServiceOption;
  projectDescription: string;
}

type FormErrors = Partial<
  Record<
    keyof ContactFormState,
    string
  >
>;

// ======================================================
// Constants
// ======================================================

const INITIAL_FORM: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  service: serviceOptions[0],
  projectDescription: "",
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[+]?[\d\s\-().]{7,20}$/;

// ======================================================
// Shared Field Styles
// ======================================================

const getFieldStyles = (
  hasError?: boolean,
) => `
  w-full
  rounded-lg
  border
  px-4
  text-sm
  outline-none
  transition
  disabled:cursor-not-allowed
  disabled:opacity-60
  ${
    hasError
      ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
      : "border-transparent bg-[#F6F7FB] focus:border-blue-01/20 focus:bg-white focus:ring-2 focus:ring-blue-01/25"
  }
`;

// ======================================================
// Validation
// ======================================================

const validateForm = (
  formData: ContactFormState,
): FormErrors => {
  const errors: FormErrors = {};

  const fullName =
    formData.fullName.trim();

  const email =
    formData.email.trim();

  const phone =
    formData.phone.trim();

  const projectDescription =
    formData.projectDescription.trim();

  // Full Name
  if (!fullName) {
    errors.fullName =
      "Name is required.";
  } else if (
    fullName.length < 2
  ) {
    errors.fullName =
      "Name must contain at least 2 characters.";
  } else if (
    fullName.length > 100
  ) {
    errors.fullName =
      "Name must not exceed 100 characters.";
  }

  // Email
  if (!email) {
    errors.email =
      "Email address is required.";
  } else if (
    !EMAIL_PATTERN.test(
      email,
    )
  ) {
    errors.email =
      "Please enter a valid email address.";
  }

  // Phone
  if (!phone) {
    errors.phone =
      "Phone number is required.";
  } else if (
    !PHONE_PATTERN.test(
      phone,
    )
  ) {
    errors.phone =
      "Please enter a valid phone number.";
  }

  // Service
  if (
    !serviceOptions.includes(
      formData.service,
    )
  ) {
    errors.service =
      "Please select a valid service.";
  }

  // Project Description
  if (!projectDescription) {
    errors.projectDescription =
      "Project description is required.";
  } else if (
    projectDescription.length <
    10
  ) {
    errors.projectDescription =
      "Project description must contain at least 10 characters.";
  } else if (
    projectDescription.length >
    5000
  ) {
    errors.projectDescription =
      "Project description must not exceed 5000 characters.";
  }

  return errors;
};

// ======================================================
// Component
// ======================================================

export default function ContactFormCard() {
  const [
    formData,
    setFormData,
  ] =
    useState<ContactFormState>(
      INITIAL_FORM,
    );

  const [
    formErrors,
    setFormErrors,
  ] =
    useState<FormErrors>(
      {},
    );

  const [
    submissionCompleted,
    setSubmissionCompleted,
  ] = useState(false);

  // ====================================================
  // Shared Submission State
  // ====================================================

  const {
    isOnline,
    notice,
    isSubmissionUncertain,
    canSubmit,
    clearNotice,
    getOrCreateRequestId,
    markSubmissionStarted,
    markSubmissionSuccess,
    handleSubmissionError,
    resetSubmissionState,
  } =
    useSubmissionNetwork();

  // ====================================================
  // React Query Mutation
  // ====================================================

  const {
    mutateAsync:
      createMessage,
    isPending,
    reset:
      resetMutation,
  } =
    useCreateContactMessage();

  // ====================================================
  // Input Change
  // ====================================================

  const handleChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ) => {
    const {
      name,
      value,
    } = event.target;

    const field =
      name as keyof ContactFormState;

    const updatedForm = {
      ...formData,
      [field]: value,
    } as ContactFormState;

    setFormData(
      updatedForm,
    );

    /*
     * Keep an interrupted notice visible because the
     * previous request may already have reached the backend.
     */
    if (
      notice &&
      notice.type !==
        "interrupted"
    ) {
      clearNotice();
    }

    // Revalidate only fields that already contain an error.
    if (
      formErrors[field]
    ) {
      const nextErrors =
        validateForm(
          updatedForm,
        );

      setFormErrors(
        (previous) => ({
          ...previous,
          [field]:
            nextErrors[
              field
            ],
        }),
      );
    }
  };

  // ====================================================
  // Blur Validation
  // ====================================================

  const handleBlur = (
    field:
      keyof ContactFormState,
  ) => {
    const validationErrors =
      validateForm(
        formData,
      );

    setFormErrors(
      (previous) => ({
        ...previous,
        [field]:
          validationErrors[
            field
          ],
      }),
    );
  };

  // ====================================================
  // Submit
  // ====================================================

  const handleSubmit = async (
    event:
      FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const validationErrors =
      validateForm(
        formData,
      );

    setFormErrors(
      validationErrors,
    );

    if (
      Object.keys(
        validationErrors,
      ).length > 0
    ) {
      return;
    }

    // ==================================================
    // Offline Guard
    // ==================================================

    if (!canSubmit()) {
      return;
    }

    /*
     * First submission creates an ID.
     * If the request becomes uncertain, a retry reuses
     * exactly the same ID.
     */
    const clientRequestId =
      getOrCreateRequestId();

    try {
      markSubmissionStarted();

      const response =
        await createMessage(
          {
            clientRequestId,

            fullName:
              formData.fullName.trim(),

            email:
              formData.email.trim(),

            phone:
              formData.phone.trim(),

            service:
              formData.service,

            projectDescription:
              formData.projectDescription.trim(),
          },
        );

      markSubmissionSuccess(
        response.message ||
          "Your message has been sent successfully!",
      );

      setSubmissionCompleted(
        true,
      );

      setFormData(
        INITIAL_FORM,
      );

      setFormErrors({});
    } catch (
      error: unknown
    ) {
      handleSubmissionError(
        error,
      );
    }
  };

  // ====================================================
  // Reset / New Message
  // ====================================================

  const handleSendAnother =
    () => {
      resetMutation();

      resetSubmissionState();

      setSubmissionCompleted(
        false,
      );

      setFormErrors({});

      setFormData(
        INITIAL_FORM,
      );
    };

  // ====================================================
  // Render
  // ====================================================

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="
        relative
        overflow-hidden
        rounded-xl
        bg-white
        p-6
        shadow-xl
        md:p-8
      "
    >
      {/* Decoration */}
      <div
        aria-hidden="true"
        className="
          absolute
          -right-10
          -top-10
          h-36
          w-36
          rounded-full
          bg-[#F3F5FA]
        "
      />

      <div className="relative z-10">
        <h2
          className="
            mb-7
            text-[28px]
            font-bold
            text-blue-01
            md:text-[34px]
          "
        >
          Send a Message
        </h2>

        {/* =================================================
            Success State
        ================================================= */}

        {submissionCompleted &&
        notice?.type ===
          "success" ? (
          <div
            role="status"
            className="
              rounded-2xl
              border
              border-green-200
              bg-green-50
              px-6
              py-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-700
              "
            >
              <CheckCircle2
                size={28}
              />
            </div>

            <h3
              className="
                mt-4
                text-xl
                font-bold
                text-blue-01
              "
            >
              Message Sent
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-600
              "
            >
              {
                notice.message
              }
            </p>

            <button
              type="button"
              onClick={
                handleSendAnother
              }
              className="
                mt-6
                inline-flex
                h-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-blue-01/15
                bg-white
                px-5
                text-sm
                font-bold
                text-blue-01
                transition
                hover:border-blue-01
                hover:bg-blue-01
                hover:text-white
              "
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={
              handleSubmit
            }
          >
            {/* =============================================
                Submission / Network Notice
            ============================================== */}

            {notice && (
              <div className="mb-5">
                <SubmissionNotice
                  notice={
                    notice
                  }
                  onDismiss={
                    notice.type ===
                    "interrupted"
                      ? undefined
                      : clearNotice
                  }
                />
              </div>
            )}

            {/* =============================================
                Form Grid
            ============================================== */}

            <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
              {/* Name */}
              <FormField
                id="fullName"
                label="Name"
                value={
                  formData.fullName
                }
                error={
                  formErrors.fullName
                }
                placeholder="John Doe"
                autoComplete="name"
                disabled={
                  isPending
                }
                onBlur={() =>
                  handleBlur(
                    "fullName",
                  )
                }
                onChange={
                  handleChange
                }
              />

              {/* Email */}
              <FormField
                id="email"
                label="Email"
                type="email"
                value={
                  formData.email
                }
                error={
                  formErrors.email
                }
                placeholder="john@example.com"
                autoComplete="email"
                disabled={
                  isPending
                }
                onBlur={() =>
                  handleBlur(
                    "email",
                  )
                }
                onChange={
                  handleChange
                }
              />

              {/* Phone */}
              <FormField
                id="phone"
                label="Phone"
                type="tel"
                value={
                  formData.phone
                }
                error={
                  formErrors.phone
                }
                placeholder="+964 XX XXX XXXX"
                autoComplete="tel"
                disabled={
                  isPending
                }
                onBlur={() =>
                  handleBlur(
                    "phone",
                  )
                }
                onChange={
                  handleChange
                }
              />

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-[#1E2746]
                  "
                >
                  Service Interest

                  <span className="ml-1 text-red-01">
                    *
                  </span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={
                    formData.service
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={() =>
                    handleBlur(
                      "service",
                    )
                  }
                  disabled={
                    isPending
                  }
                  aria-invalid={Boolean(
                    formErrors.service,
                  )}
                  aria-describedby={
                    formErrors.service
                      ? "service-error"
                      : undefined
                  }
                  className={`
                    h-11
                    cursor-pointer
                    ${getFieldStyles(
                      Boolean(
                        formErrors.service,
                      ),
                    )}
                  `}
                >
                  {serviceOptions.map(
                    (
                      option,
                    ) => (
                      <option
                        key={
                          option
                        }
                        value={
                          option
                        }
                      >
                        {
                          option
                        }
                      </option>
                    ),
                  )}
                </select>

                <FieldError
                  id="service-error"
                  message={
                    formErrors.service
                  }
                />
              </div>
            </div>

            {/* =============================================
                Project Description
            ============================================== */}

            <div className="mt-4">
              <label
                htmlFor="projectDescription"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-[#1E2746]
                "
              >
                Project Description

                <span className="ml-1 text-red-01">
                  *
                </span>
              </label>

              <textarea
                id="projectDescription"
                name="projectDescription"
                value={
                  formData.projectDescription
                }
                onChange={
                  handleChange
                }
                onBlur={() =>
                  handleBlur(
                    "projectDescription",
                  )
                }
                disabled={
                  isPending
                }
                rows={5}
                maxLength={
                  5000
                }
                aria-invalid={Boolean(
                  formErrors.projectDescription,
                )}
                aria-describedby={
                  formErrors.projectDescription
                    ? "project-description-error"
                    : undefined
                }
                placeholder="Briefly describe your project requirements (at least 10 characters)..."
                className={`
                  min-h-27.5
                  resize-none
                  py-3
                  ${getFieldStyles(
                    Boolean(
                      formErrors.projectDescription,
                    ),
                  )}
                `}
              />

              <div
                className="
                  mt-1.5
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <FieldError
                  id="project-description-error"
                  message={
                    formErrors.projectDescription
                  }
                />

                <span
                  className="
                    ml-auto
                    shrink-0
                    text-[11px]
                    text-slate-400
                  "
                >
                  {
                    formData.projectDescription
                      .length
                  }
                  /5000
                </span>
              </div>
            </div>

            {/* =============================================
                Submit
            ============================================== */}

            <button
              type="submit"
              disabled={
                isPending ||
                !isOnline
              }
              className="
                mt-5
                inline-flex
                h-12
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-full
                bg-red-01
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#c9162d]
                hover:shadow-xl
                active:translate-y-0
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
              "
            >
              {isPending ? (
                <>
                  <LoaderCircle
                    className="
                      h-4
                      w-4
                      animate-spin
                    "
                  />

                  Sending...
                </>
              ) : !isOnline ? (
                "No Internet Connection"
              ) : isSubmissionUncertain ? (
                <>
                  <RefreshCw
                    className="
                      h-4
                      w-4
                    "
                  />

                  Retry Submission Safely
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ======================================================
// Form Field
// ======================================================

interface FormFieldProps {
  id:
    keyof ContactFormState;

  label: string;

  value: string;

  placeholder: string;

  type?:
    | "text"
    | "email"
    | "tel";

  error?: string;

  disabled?: boolean;

  autoComplete?: string;

  onBlur:
    () => void;

  onChange: (
    event:
      ChangeEvent<HTMLInputElement>,
  ) => void;
}

function FormField({
  id,
  label,
  value,
  placeholder,
  type = "text",
  error,
  disabled = false,
  autoComplete,
  onBlur,
  onChange,
}: FormFieldProps) {
  const errorId =
    `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-bold
          text-[#1E2746]
        "
      >
        {label}

        <span className="ml-1 text-red-01">
          *
        </span>
      </label>

      <input
        id={id}
        type={type}
        name={id}
        value={value}
        placeholder={
          placeholder
        }
        autoComplete={
          autoComplete
        }
        disabled={
          disabled
        }
        aria-invalid={Boolean(
          error,
        )}
        aria-describedby={
          error
            ? errorId
            : undefined
        }
        onBlur={
          onBlur
        }
        onChange={
          onChange
        }
        className={`
          h-11
          ${getFieldStyles(
            Boolean(
              error,
            ),
          )}
        `}
      />

      <FieldError
        id={
          errorId
        }
        message={
          error
        }
      />
    </div>
  );
}

// ======================================================
// Field Error
// ======================================================

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  return (
    <div className="mt-1.5 min-h-5">
      {message && (
        <p
          id={id}
          role="alert"
          className="
            flex
            items-start
            gap-1.5
            text-xs
            font-semibold
            leading-5
            text-red-600
          "
        >
          <AlertCircle
            className="
              mt-0.5
              h-3.5
              w-3.5
              shrink-0
            "
          />

          {message}
        </p>
      )}
    </div>
  );
}