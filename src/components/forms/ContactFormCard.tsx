import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import axios from "axios";

import {
  useCreateContactMessage,
} from "../../hooks/mutations/useCreateContactMessage";

// ======================================================
// Service Options
// Must match backend values exactly.
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

// ======================================================
// Types
// ======================================================

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
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

const DEFAULT_SUBMIT_ERROR =
  "We couldn't send your message. Please try again.";

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

  const service =
    formData.service.trim();

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
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email =
      "Please enter a valid email address.";
  }

  // Phone
  if (!phone) {
    errors.phone =
      "Phone number is required.";
  } else if (
    !PHONE_PATTERN.test(phone)
  ) {
    errors.phone =
      "Please enter a valid phone number.";
  }

  // Service
  if (
    !service ||
    !serviceOptions.includes(
      service as (typeof serviceOptions)[number],
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
    projectDescription.length < 10
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
// Friendly API Error Messages
// ======================================================

const getContactErrorMessage = (
  error: unknown,
): string => {
  if (
    !axios.isAxiosError(
      error,
    )
  ) {
    return DEFAULT_SUBMIT_ERROR;
  }

  const status =
    error.response?.status;

  const backendMessage =
    error.response?.data
      ?.message;

  // Network Error
  if (
    error.code ===
      "ERR_NETWORK" ||
    !error.response
  ) {
    return "We couldn't connect to the server. Please check your internet connection and try again.";
  }

  // Validation / Bad Request
  if (status === 400) {
    const backendErrors =
      error.response?.data
        ?.errors;

    if (
      Array.isArray(
        backendErrors,
      ) &&
      backendErrors.length >
        0
    ) {
      const firstMessage =
        backendErrors[0]
          ?.message;

      if (
        typeof firstMessage ===
          "string" &&
        !isTechnicalMessage(
          firstMessage,
        )
      ) {
        return firstMessage;
      }
    }

    if (
      typeof backendMessage ===
        "string" &&
      !isTechnicalMessage(
        backendMessage,
      )
    ) {
      return backendMessage;
    }

    return "Some of the submitted information is invalid. Please review the form and try again.";
  }

  // Unauthorized / Forbidden
  if (
    status === 401 ||
    status === 403
  ) {
    return "Your message could not be sent at this time. Please try again later.";
  }

  // Route / Resource Missing
  if (status === 404) {
    return "The contact service is currently unavailable. Please try again later.";
  }

  // Duplicate / Conflict
  if (status === 409) {
    return "We couldn't send this message because of a conflicting request. Please review your information and try again.";
  }

  // Too Many Requests
  if (status === 429) {
    return "Too many messages were sent in a short period. Please wait a moment and try again.";
  }

  // Server Error
  if (
    status &&
    status >= 500
  ) {
    return "The server encountered a problem while sending your message. Please try again in a moment.";
  }

  return DEFAULT_SUBMIT_ERROR;
};

const isTechnicalMessage = (
  message: string,
) => {
  const normalized =
    message.toLowerCase();

  return (
    normalized.includes(
      "route",
    ) ||
    normalized.includes(
      "/api/",
    ) ||
    normalized.includes(
      "stack",
    ) ||
    normalized.includes(
      "internal server",
    )
  );
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
    successMessage,
    setSuccessMessage,
  ] = useState("");

  const [
    apiError,
    setApiError,
  ] = useState("");

  const {
    mutateAsync:
      createMessage,
    isPending,
    reset,
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
    };

    setFormData(
      updatedForm,
    );

    // Clear previous API/success states
    if (apiError) {
      setApiError("");
    }

    if (successMessage) {
      setSuccessMessage("");
    }

    // Revalidate field only when it already has an error
    if (formErrors[field]) {
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
    field: keyof ContactFormState,
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
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setApiError("");
    setSuccessMessage("");

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
      setApiError(
        "Please correct the highlighted fields before sending your message.",
      );

      return;
    }

    try {
      const response =
        await createMessage(
          {
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

      setSuccessMessage(
        response.message ||
          "Your message has been sent successfully!",
      );

      setFormData(
        INITIAL_FORM,
      );

      setFormErrors({});
      setApiError("");
    } catch (
      error: unknown
    ) {
      console.error(
        "Failed to send contact message:",
        error,
      );

      setApiError(
        getContactErrorMessage(
          error,
        ),
      );
    }
  };

  // ====================================================
  // Reset Success
  // ====================================================

  const handleSendAnother =
    () => {
      reset();

      setSuccessMessage("");
      setApiError("");
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
            Success
        ================================================= */}

        {successMessage ? (
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
                successMessage
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
                API / General Error
            ============================================== */}

            {apiError && (
              <div
                role="alert"
                className="
                  mb-5
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  p-4
                "
              >
                <AlertCircle
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-red-600
                  "
                />

                <div>
                  <p
                    className="
                      text-sm
                      font-bold
                      text-red-700
                    "
                  >
                    Message could not be sent
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-red-600
                    "
                  >
                    {
                      apiError
                    }
                  </p>
                </div>
              </div>
            )}

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
                onChange={(
                  value,
                ) =>
                  handleChange({
                    target: {
                      name:
                        "fullName",
                      value,
                    },
                  } as ChangeEvent<HTMLInputElement>)
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
                onChange={(
                  value,
                ) =>
                  handleChange({
                    target: {
                      name:
                        "email",
                      value,
                    },
                  } as ChangeEvent<HTMLInputElement>)
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
                onChange={(
                  value,
                ) =>
                  handleChange({
                    target: {
                      name:
                        "phone",
                      value,
                    },
                  } as ChangeEvent<HTMLInputElement>)
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
                    w-full
                    cursor-pointer
                    rounded-lg
                    border
                    px-4
                    text-sm
                    outline-none
                    transition
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    ${
                      formErrors.service
                        ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                        : "border-transparent bg-[#F6F7FB] focus:border-blue-01/20 focus:bg-white focus:ring-2 focus:ring-blue-01/25"
                    }
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

            {/* Project Description */}
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
                  w-full
                  resize-none
                  rounded-lg
                  border
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  ${
                    formErrors.projectDescription
                      ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                      : "border-transparent bg-[#F6F7FB] focus:border-blue-01/20 focus:bg-white focus:ring-2 focus:ring-blue-01/25"
                  }
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

            {/* Submit */}
            <button
              type="submit"
              disabled={
                isPending
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
  id: keyof ContactFormState;
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

  onBlur: () => void;

  onChange: (
    value: string,
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
        onBlur={onBlur}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        className={`
          h-11
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
            error
              ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
              : "border-transparent bg-[#F6F7FB] focus:border-blue-01/20 focus:bg-white focus:ring-2 focus:ring-blue-01/25"
          }
        `}
      />

      <FieldError
        id={errorId}
        message={error}
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