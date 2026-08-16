import {
  useState,
  type ElementType,
  type FormEvent,
  type HTMLInputTypeAttribute,
} from "react";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  LoaderCircle,
  MapPin,
  PackageCheck,
  RefreshCw,
  X,
} from "lucide-react";

import type {
  PublicEquipment,
} from "../../Types/equipment";

import {
  usePublicEquipmentBySlug,
} from "../../hooks/queries/useEquipment";

import {
  useCreateEquipmentRequest,
} from "../../hooks/mutations/useCreateEquipmentRequest";

// ======================================================
// Types
// ======================================================

interface FleetRequestModalProps {
  item: PublicEquipment | null;
  onClose: () => void;
}

interface RequestFormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  workLocation: string;
  estimatedRequiredDays: string;
  workDescription: string;
}

type FormErrors = Partial<
  Record<keyof RequestFormState, string>
>;

// ======================================================
// Constants
// ======================================================

const INITIAL_FORM: RequestFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  workLocation: "",
  estimatedRequiredDays: "",
  workDescription: "",
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[+]?[\d\s\-().]{7,20}$/;

// ======================================================
// Validation
// ======================================================

const validateForm = (
  form: RequestFormState,
): FormErrors => {
  const errors: FormErrors = {};

  const fullName =
    form.fullName.trim();

  const email =
    form.email.trim();

  const phone =
    form.phone.trim();

  const company =
    form.company.trim();

  const workLocation =
    form.workLocation.trim();

  const requiredDays = Number(
    form.estimatedRequiredDays,
  );

  const workDescription =
    form.workDescription.trim();

  // Full Name
  if (!fullName) {
    errors.fullName =
      "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName =
      "Full name must contain at least 2 characters.";
  } else if (fullName.length > 100) {
    errors.fullName =
      "Full name must not exceed 100 characters.";
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
      "Mobile number is required.";
  } else if (
    !PHONE_PATTERN.test(phone)
  ) {
    errors.phone =
      "Please enter a valid mobile number.";
  }

  // Company
  if (!company) {
    errors.company =
      "Company name is required.";
  } else if (
    company.length < 2
  ) {
    errors.company =
      "Company name must contain at least 2 characters.";
  } else if (
    company.length > 150
  ) {
    errors.company =
      "Company name must not exceed 150 characters.";
  }

  // Work Location
  if (!workLocation) {
    errors.workLocation =
      "Work location is required.";
  } else if (
    workLocation.length < 2
  ) {
    errors.workLocation =
      "Please enter a valid work location.";
  }

  // Required Days
  if (
    !form.estimatedRequiredDays.trim()
  ) {
    errors.estimatedRequiredDays =
      "Estimated required days is required.";
  } else if (
    !Number.isFinite(
      requiredDays,
    ) ||
    !Number.isInteger(
      requiredDays,
    )
  ) {
    errors.estimatedRequiredDays =
      "Required days must be a whole number.";
  } else if (
    requiredDays < 1
  ) {
    errors.estimatedRequiredDays =
      "Required days must be at least 1 day.";
  } else if (
    requiredDays > 3650
  ) {
    errors.estimatedRequiredDays =
      "Required days cannot exceed 3650 days.";
  }

  // Work Description
  if (!workDescription) {
    errors.workDescription =
      "Work description is required.";
  } else if (
    workDescription.length < 10
  ) {
    errors.workDescription =
      "Work description must contain at least 10 characters.";
  } else if (
    workDescription.length > 5000
  ) {
    errors.workDescription =
      "Work description must not exceed 5000 characters.";
  }

  return errors;
};

// ======================================================
// Component
// ======================================================

export default function FleetRequestModal({
  item,
  onClose,
}: FleetRequestModalProps) {
  const [step, setStep] =
    useState<1 | 2>(1);

  const [form, setForm] =
    useState<RequestFormState>(
      INITIAL_FORM,
    );

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [touched, setTouched] =
    useState<
      Partial<
        Record<
          keyof RequestFormState,
          boolean
        >
      >
    >({});

  const [
    successMessage,
    setSuccessMessage,
  ] = useState("");

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  // ====================================================
  // React Query
  // ====================================================

  const {
    data: equipmentDetails,
    isLoading: isDetailsLoading,
    isError: isDetailsError,
    isFetching: isDetailsFetching,
    refetch: refetchDetails,
  } = usePublicEquipmentBySlug(
    item?.slug,
  );

  const {
    mutateAsync:
      submitEquipmentRequest,
    isPending,
    reset: resetMutation,
  } =
    useCreateEquipmentRequest();

  // ====================================================
  // Guard
  // ====================================================

  if (!item) {
    return null;
  }

  // Use detailed API data when available.
  // Until then, fallback to the equipment list item.
  const equipment =
    equipmentDetails ?? item;

  const equipmentDescription =
    equipmentDetails?.description ??
    item.shortDescription;

  // ====================================================
  // Form Helpers
  // ====================================================

  const updateField = (
    field: keyof RequestFormState,
    value: string,
  ) => {
    const updatedForm = {
      ...form,
      [field]: value,
    };

    setForm(updatedForm);

    if (touched[field]) {
      const updatedErrors =
        validateForm(updatedForm);

      setErrors(
        (previous) => ({
          ...previous,
          [field]:
            updatedErrors[
              field
            ],
        }),
      );
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleBlur = (
    field: keyof RequestFormState,
  ) => {
    setTouched(
      (previous) => ({
        ...previous,
        [field]: true,
      }),
    );

    const currentErrors =
      validateForm(form);

    setErrors(
      (previous) => ({
        ...previous,
        [field]:
          currentErrors[field],
      }),
    );
  };

  // ====================================================
  // Close
  // ====================================================

  const closeModal = () => {
    setStep(1);

    setForm(
      INITIAL_FORM,
    );

    setErrors({});

    setTouched({});

    setSuccessMessage("");

    setErrorMessage("");

    resetMutation();

    onClose();
  };

  // ====================================================
  // Submit
  // ====================================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const validationErrors =
      validateForm(form);

    setErrors(
      validationErrors,
    );

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      company: true,
      workLocation: true,
      estimatedRequiredDays:
        true,
      workDescription: true,
    });

    if (
      Object.keys(
        validationErrors,
      ).length > 0
    ) {
      setErrorMessage(
        "Please correct the highlighted fields before submitting your request.",
      );

      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response =
        await submitEquipmentRequest(
          {
            equipment: item._id,

            fullName:
              form.fullName.trim(),

            email:
              form.email.trim(),

            phone:
              form.phone.trim(),

            company:
              form.company.trim(),

            workLocation:
              form.workLocation.trim(),

            estimatedRequiredDays:
              Number(
                form.estimatedRequiredDays,
              ),

            workDescription:
              form.workDescription.trim(),
          },
        );

      setSuccessMessage(
        response.message ||
          "Your equipment request has been submitted successfully.",
      );

      setForm(
        INITIAL_FORM,
      );

      setErrors({});

      setTouched({});
    } catch (error) {
      console.error(
        "Failed to submit equipment request:",
        error,
      );

      setErrorMessage(
        "We could not submit your request. Please review your information and try again.",
      );
    }
  };

  // ====================================================
  // Render
  // ====================================================

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="equipment-request-title"
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/60
        px-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          bg-white
          p-5
          shadow-2xl
          md:p-8
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close equipment request"
          disabled={isPending}
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-slate-100
            text-slate-600
            transition
            hover:bg-red-01
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* Progress */}
        <div className="mb-7 flex items-center gap-3 pr-14">
          <div className="h-2 flex-1 rounded-full bg-blue-01" />

          <div
            className={`
              h-2
              flex-1
              rounded-full
              ${
                step >= 2
                  ? "bg-blue-01"
                  : "bg-slate-200"
              }
            `}
          />
        </div>

        {/* =================================================
            STEP 1
        ================================================= */}
        {step === 1 ? (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={
                    equipment.image.url
                  }
                  alt={
                    equipment.image.alt ||
                    equipment.title
                  }
                  className="
                    h-65
                    w-full
                    object-cover
                  "
                />

                {isDetailsLoading && (
                  <div
                    className="
                      absolute
                      inset-0
                      animate-pulse
                      bg-slate-200/70
                      backdrop-blur-[1px]
                    "
                  />
                )}
              </div>

              <div className="mt-5 rounded-2xl bg-[#F7F8FD] p-5">
                <h3 className="text-2xl font-extrabold text-blue-01">
                  {equipment.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {
                    equipmentDescription
                  }
                </p>

                {isDetailsError && (
                  <div
                    className="
                      mt-4
                      rounded-xl
                      border
                      border-amber-200
                      bg-amber-50
                      p-3.5
                    "
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle
                        size={17}
                        className="mt-0.5 shrink-0 text-amber-600"
                      />

                      <div className="flex-1">
                        <p className="text-xs font-semibold leading-5 text-amber-700">
                          Detailed equipment information could not be loaded.
                          Available information is being shown instead.
                        </p>

                        <button
                          type="button"
                          onClick={() => {
                            void refetchDetails();
                          }}
                          disabled={
                            isDetailsFetching
                          }
                          className="
                            mt-2
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-1.5
                            text-xs
                            font-bold
                            text-blue-01
                            transition-colors
                            hover:text-red-01
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        >
                          <RefreshCw
                            size={13}
                            className={
                              isDetailsFetching
                                ? "animate-spin"
                                : ""
                            }
                          />

                          {isDetailsFetching
                            ? "Trying again..."
                            : "Retry details"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right */}
            <div>
              <span
                className="
                  mb-3
                  inline-flex
                  rounded-full
                  bg-blue-01/10
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-blue-01
                "
              >
                {
                  equipment
                    .category.name
                }
              </span>

              <h2
                id="equipment-request-title"
                className="
                  text-2xl
                  font-extrabold
                  text-blue-01
                  md:text-3xl
                "
              >
                Review Equipment
                Information
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Please review the
                equipment details before
                submitting your
                availability request.
              </p>

              {/* Info */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Info
                  icon={Gauge}
                  label={
                    equipment
                      .primarySpecification
                      .label
                  }
                  value={
                    equipment
                      .primarySpecification
                      .value
                  }
                />

                <Info
                  icon={MapPin}
                  label="Location"
                  value={
                    equipment.location
                  }
                />

                <Info
                  icon={
                    PackageCheck
                  }
                  label="Available Units"
                  value={String(
                    equipment.availableUnits,
                  )}
                />
              </div>

              {/* Certificate */}
              <div
                className={`
                  mt-6
                  rounded-2xl
                  border
                  p-5
                  ${
                    equipment
                      .safetyCertificate
                      .isAvailable
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-slate-50"
                  }
                `}
              >
                <div className="flex gap-3">
                  <FileCheck2
                    className={`
                      mt-1
                      h-5
                      w-5
                      shrink-0
                      ${
                        equipment
                          .safetyCertificate
                          .isAvailable
                          ? "text-green-700"
                          : "text-slate-500"
                      }
                    `}
                  />

                  <p
                    className={`
                      text-sm
                      font-semibold
                      leading-7
                      ${
                        equipment
                          .safetyCertificate
                          .isAvailable
                          ? "text-green-700"
                          : "text-slate-600"
                      }
                    `}
                  >
                    {equipment
                      .safetyCertificate
                      .message ||
                      (equipment
                        .safetyCertificate
                        .isAvailable
                        ? "Safety certification is available."
                        : "Safety certification information is currently unavailable.")}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setStep(2)
                }
                disabled={
                  equipment.availableUnits <=
                    0 ||
                  isDetailsLoading
                }
                className="
                  mt-6
                  inline-flex
                  h-12
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-01
                  text-sm
                  font-extrabold
                  text-white
                  transition
                  hover:bg-red-01
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isDetailsLoading ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />

                    Loading Details...
                  </>
                ) : (
                  <>
                    Next

                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* =================================================
              STEP 2
          ================================================= */
          <div>
            <span
              className="
                mb-3
                inline-flex
                rounded-full
                bg-blue-01/10
                px-4
                py-2
                text-sm
                font-bold
                text-blue-01
              "
            >
              Request Availability
            </span>

            <h2
              id="equipment-request-title"
              className="
                text-2xl
                font-extrabold
                text-blue-01
                md:text-3xl
              "
            >
              Submit Your Equipment
              Request
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Fill in the details below
              and our team will contact
              you with availability and
              mobilization details.
            </p>

            {/* Success */}
            {successMessage && (
              <div
                role="status"
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-green-200
                  bg-green-50
                  p-4
                  text-sm
                  font-semibold
                  text-green-700
                "
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                <span>
                  {successMessage}
                </span>
              </div>
            )}

            {/* General Error */}
            {errorMessage && (
              <div
                role="alert"
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  p-4
                  text-sm
                  font-semibold
                  leading-6
                  text-red-700
                "
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                <span>
                  {errorMessage}
                </span>
              </div>
            )}

            {!successMessage && (
              <form
                noValidate
                onSubmit={
                  handleSubmit
                }
                className="
                  mt-6
                  grid
                  gap-x-4
                  gap-y-5
                  md:grid-cols-2
                "
              >
                <Input
                  label="Full Name"
                  value={
                    form.fullName
                  }
                  error={
                    errors.fullName
                  }
                  onBlur={() =>
                    handleBlur(
                      "fullName",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "fullName",
                      value,
                    )
                  }
                  placeholder="Enter your name"
                  autoComplete="name"
                />

                <Input
                  label="Email Address"
                  type="email"
                  value={
                    form.email
                  }
                  error={
                    errors.email
                  }
                  onBlur={() =>
                    handleBlur(
                      "email",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "email",
                      value,
                    )
                  }
                  placeholder="Enter your email"
                  autoComplete="email"
                />

                <Input
                  label="Mobile Number"
                  type="tel"
                  value={
                    form.phone
                  }
                  error={
                    errors.phone
                  }
                  onBlur={() =>
                    handleBlur(
                      "phone",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "phone",
                      value,
                    )
                  }
                  placeholder="Enter your mobile number"
                  autoComplete="tel"
                />

                <Input
                  label="Requesting Company"
                  value={
                    form.company
                  }
                  error={
                    errors.company
                  }
                  onBlur={() =>
                    handleBlur(
                      "company",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "company",
                      value,
                    )
                  }
                  placeholder="Company name"
                  autoComplete="organization"
                />

                <Input
                  label="Work Location"
                  value={
                    form.workLocation
                  }
                  error={
                    errors.workLocation
                  }
                  onBlur={() =>
                    handleBlur(
                      "workLocation",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "workLocation",
                      value,
                    )
                  }
                  placeholder="Example: Basra / Rumaila site"
                />

                <Input
                  label="Estimated Required Days"
                  type="number"
                  value={
                    form.estimatedRequiredDays
                  }
                  error={
                    errors.estimatedRequiredDays
                  }
                  onBlur={() =>
                    handleBlur(
                      "estimatedRequiredDays",
                    )
                  }
                  onChange={(
                    value,
                  ) =>
                    updateField(
                      "estimatedRequiredDays",
                      value,
                    )
                  }
                  placeholder="Example: 7"
                  min={1}
                  max={3650}
                />

                {/* Description */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="work-description"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-slate-700
                    "
                  >
                    Work Description

                    <span className="ml-1 text-red-600">
                      *
                    </span>
                  </label>

                  <textarea
                    id="work-description"
                    rows={5}
                    value={
                      form.workDescription
                    }
                    aria-invalid={Boolean(
                      errors.workDescription,
                    )}
                    aria-describedby={
                      errors.workDescription
                        ? "work-description-error"
                        : undefined
                    }
                    onBlur={() =>
                      handleBlur(
                        "workDescription",
                      )
                    }
                    onChange={(
                      event,
                    ) =>
                      updateField(
                        "workDescription",
                        event.target
                          .value,
                      )
                    }
                    placeholder="Describe the required work..."
                    className={`
                      w-full
                      resize-none
                      rounded-xl
                      border
                      p-4
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      ${
                        errors.workDescription
                          ? "border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
                          : "border-slate-200 bg-slate-50 focus:border-blue-01 focus:bg-white focus:ring-3 focus:ring-blue-01/10"
                      }
                    `}
                  />

                  <div className="mt-1.5 flex items-start justify-between gap-4">
                    <div>
                      {errors.workDescription && (
                        <p
                          id="work-description-error"
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
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />

                          {
                            errors.workDescription
                          }
                        </p>
                      )}
                    </div>

                    <span
                      className={`
                        shrink-0
                        text-[11px]
                        ${
                          form
                            .workDescription
                            .length >
                          5000
                            ? "font-semibold text-red-600"
                            : "text-slate-400"
                        }
                      `}
                    >
                      {
                        form
                          .workDescription
                          .length
                      }
                      /5000
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div
                  className="
                    mt-2
                    flex
                    flex-col
                    gap-3
                    md:col-span-2
                    md:flex-row
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setStep(1)
                    }
                    disabled={
                      isPending
                    }
                    className="
                      inline-flex
                      h-12
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-sm
                      font-extrabold
                      text-blue-01
                      transition
                      hover:border-blue-01
                      hover:bg-blue-01/5
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    <ArrowLeft className="h-4 w-4" />

                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={
                      isPending
                    }
                    className="
                      inline-flex
                      h-12
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-01
                      text-sm
                      font-extrabold
                      text-white
                      transition
                      hover:bg-red-01
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isPending ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />

                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ======================================================
// Info Card
// ======================================================

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#F7F8FD] p-4">
      <Icon className="mb-2 h-5 w-5 text-red-01" />

      <p className="text-[10px] font-extrabold uppercase text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

// ======================================================
// Input
// ======================================================

interface InputProps {
  label: string;
  placeholder: string;
  value: string;

  onChange: (
    value: string,
  ) => void;

  onBlur: () => void;

  error?: string;

  type?: HTMLInputTypeAttribute;

  min?: number;
  max?: number;

  autoComplete?: string;
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  min,
  max,
  autoComplete,
}: InputProps) {
  const id = label
    .toLowerCase()
    .replace(
      /[^a-z0-9]+/g,
      "-",
    )
    .replace(
      /^-|-$/g,
      "",
    );

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
          text-slate-700
        "
      >
        {label}

        <span className="ml-1 text-red-600">
          *
        </span>
      </label>

      <input
        id={id}
        type={type}
        value={value}
        min={min}
        max={max}
        autoComplete={
          autoComplete
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
        placeholder={
          placeholder
        }
        className={`
          h-12
          w-full
          rounded-xl
          border
          px-4
          text-sm
          text-slate-700
          outline-none
          transition
          ${
            error
              ? "border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
              : "border-slate-200 bg-slate-50 focus:border-blue-01 focus:bg-white focus:ring-3 focus:ring-blue-01/10"
          }
        `}
      />

      <div className="mt-1.5 min-h-5">
        {error && (
          <p
            id={errorId}
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
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />

            {error}
          </p>
        )}
      </div>
    </div>
  );
}