import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    CalendarClock,
    CheckCircle,
    Clock,
    MapPin,
    Upload,
    X,
} from "lucide-react";
import { useRef, useState } from "react";

import type { Job } from "../../services/jobsApi";
import { useCreateJobRequest } from "../../hooks/mutations/useCreateJobRequest";

interface JobDetailsModalProps {
    job: Job | null;
    onClose: () => void;
}

export default function JobDetailsModal({
    job,
    onClose,
}: JobDetailsModalProps) {
    const [step, setStep] = useState<1 | 2>(1);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cv, setCv] = useState<File | null>(null);

    const [formError, setFormError] = useState("");

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const createJobRequest = useCreateJobRequest();

    if (!job) return null;

    const isOpen =
        job.status === "published" &&
        new Date(job.deadline) >= new Date();

    const formattedDeadline = new Date(
        job.deadline,
    ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const resetForm = () => {
        setStep(1);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCv(null);
        setFormError("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        createJobRequest.reset();
    };

    const handleClose = () => {
        if (createJobRequest.isPending) return;

        resetForm();
        onClose();
    };

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            setCv(null);
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        const maxSize = 10 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            setCv(null);
            setFormError("Only PDF, DOC, and DOCX files are allowed.");

            event.target.value = "";
            return;
        }

        if (file.size > maxSize) {
            setCv(null);
            setFormError("CV file size cannot exceed 10 MB.");

            event.target.value = "";
            return;
        }

        setFormError("");
        setCv(file);
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        setFormError("");

        if (!firstName.trim()) {
            setFormError("First name is required.");
            return;
        }

        if (!lastName.trim()) {
            setFormError("Last name is required.");
            return;
        }

        if (!email.trim()) {
            setFormError("Email address is required.");
            return;
        }

        if (!phone.trim()) {
            setFormError("Phone number is required.");
            return;
        }

        if (!cv) {
            setFormError("CV file is required.");
            return;
        }

        try {
            await createJobRequest.mutateAsync({
                job: job._id,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                phone: phone.trim(),
                cv,
            });
        } catch (error: any) {
            const message =
                error?.response?.data?.message ||
                "Something went wrong while submitting your application.";

            setFormError(message);
        }
    };

    const isSubmitted =
        createJobRequest.isSuccess &&
        createJobRequest.data?.success === true;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div
                className="
          relative max-h-[90vh] w-full max-w-4xl
          overflow-y-auto rounded-3xl
          bg-white shadow-2xl
        "
            >
                <button
                    type="button"
                    onClick={handleClose}
                    disabled={createJobRequest.isPending}
                    className="
            absolute right-5 top-5 z-10
            rounded-full bg-slate-100 p-2
            text-slate-500 transition
            hover:bg-red-100 hover:text-red-01
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="border-b border-slate-100 p-6 md:p-8">
                    <span
                        className="
              mb-3 inline-block rounded-full
              bg-blue-01/10 px-3 py-1
              text-xs font-bold uppercase
              text-blue-01
            "
                    >
                        {isSubmitted
                            ? "Application Submitted"
                            : step === 1
                                ? "Job Details"
                                : "Application Form"}
                    </span>

                    <h3 className="pr-10 text-2xl font-bold text-blue-01 md:text-3xl">
                        {job.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-blue-01" />
                            {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-blue-01" />
                            {job.employmentType}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4 text-blue-01" />
                            {job.department}
                        </span>
                    </div>

                    {isOpen && (
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-amber-700">
                            <CalendarClock className="h-4 w-4" />
                            Applications close on {formattedDeadline}
                        </div>
                    )}

                    {!isSubmitted && (
                        <div className="mt-6 flex items-center gap-3">
                            <div
                                className={`
                  h-2 flex-1 rounded-full
                  ${step >= 1 ? "bg-blue-01" : "bg-slate-200"}
                `}
                            />

                            <div
                                className={`
                  h-2 flex-1 rounded-full
                  ${step >= 2 ? "bg-blue-01" : "bg-slate-200"}
                `}
                            />
                        </div>
                    )}
                </div>

                {/* Success */}
                {isSubmitted && (
                    <div className="p-6 md:p-8">
                        <div
                            className="
                flex flex-col items-center
                justify-center rounded-2xl
                bg-[#f7f8ff] px-6 py-12
                text-center
              "
                        >
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-01/10">
                                <CheckCircle className="h-9 w-9 text-blue-01" />
                            </div>

                            <h4 className="text-2xl font-bold text-blue-01">
                                Application Submitted Successfully
                            </h4>

                            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                                {createJobRequest.data?.message ||
                                    "Your job application has been submitted successfully."}
                            </p>

                            <button
                                type="button"
                                onClick={handleClose}
                                className="
                  mt-8 h-12 rounded-xl
                  bg-blue-01 px-8
                  text-sm font-bold text-white
                  transition hover:bg-red-01
                  cursor-pointer
                "
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 1 */}
                {!isSubmitted && step === 1 && (
                    <div className="p-6 md:p-8">
                        <div className="mb-8 rounded-2xl bg-[#f7f8ff] p-5">
                            <h4 className="mb-3 text-xl font-bold text-blue-01">
                                About the Role
                            </h4>

                            <p className="text-sm leading-7 text-slate-600">
                                {job.description}
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h4 className="mb-4 text-xl font-bold text-blue-01">
                                    Responsibilities
                                </h4>

                                <div className="space-y-3">
                                    {job.responsibilities.map((item, index) => (
                                        <div
                                            key={`${job._id}-responsibility-${index}`}
                                            className="flex gap-3"
                                        >
                                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-01" />

                                            <p className="text-sm leading-6 text-slate-600">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="mb-4 text-xl font-bold text-blue-01">
                                    Requirements
                                </h4>

                                <div className="space-y-3">
                                    {job.requirements.map((item, index) => (
                                        <div
                                            key={`${job._id}-requirement-${index}`}
                                            className="flex gap-3"
                                        >
                                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-01" />

                                            <p className="text-sm leading-6 text-slate-600">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                mt-8 flex flex-col gap-3
                border-t border-slate-100 pt-6
                md:flex-row md:justify-end
              "
                        >
                            <button
                                type="button"
                                onClick={handleClose}
                                className="
                  h-12 rounded-xl border
                  border-slate-200 px-8
                  text-sm font-bold text-slate-600
                  transition hover:bg-slate-100
                  cursor-pointer
                "
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                disabled={!isOpen}
                                onClick={() => {
                                    if (isOpen) {
                                        setStep(2);
                                    }
                                }}
                                className="
                  inline-flex h-12 items-center
                  justify-center gap-2 rounded-xl
                  bg-blue-01 px-8 text-sm
                  font-bold text-white
                  transition hover:bg-red-01
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
                            >
                                {isOpen ? "Next" : "Applications Closed"}

                                {isOpen && (
                                    <ArrowRight className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2 */}
                {!isSubmitted && step === 2 && (
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 md:p-8"
                    >
                        <p className="mb-6 text-sm leading-6 text-slate-500">
                            Please fill in your information and upload your
                            CV to apply for this position.
                        </p>

                        {formError && (
                            <div
                                className="
                  mb-6 rounded-xl border
                  border-red-200 bg-red-50
                  px-4 py-3 text-sm
                  font-medium text-red-700
                "
                            >
                                {formError}
                            </div>
                        )}

                        <div className="grid gap-4 md:grid-cols-2">
                            {/* First Name */}
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="mb-2 block text-sm font-semibold text-blue-01"
                                >
                                    First Name
                                </label>

                                <input
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)
                                    }
                                    placeholder="Enter first name"
                                    disabled={createJobRequest.isPending}
                                    className="
                    h-12 w-full rounded-xl
                    border border-slate-200 px-4
                    text-sm outline-none
                    focus:border-blue-01
                    focus:ring-4 focus:ring-blue-01/10
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="mb-2 block text-sm font-semibold text-blue-01"
                                >
                                    Last Name
                                </label>

                                <input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(event) =>
                                        setLastName(event.target.value)
                                    }
                                    placeholder="Enter last name"
                                    disabled={createJobRequest.isPending}
                                    className="
                    h-12 w-full rounded-xl
                    border border-slate-200 px-4
                    text-sm outline-none
                    focus:border-blue-01
                    focus:ring-4 focus:ring-blue-01/10
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-blue-01"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Enter email address"
                                    disabled={createJobRequest.isPending}
                                    className="
                    h-12 w-full rounded-xl
                    border border-slate-200 px-4
                    text-sm outline-none
                    focus:border-blue-01
                    focus:ring-4 focus:ring-blue-01/10
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-semibold text-blue-01"
                                >
                                    Mobile Number
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                    placeholder="Enter mobile number"
                                    disabled={createJobRequest.isPending}
                                    className="
                    h-12 w-full rounded-xl
                    border border-slate-200 px-4
                    text-sm outline-none
                    focus:border-blue-01
                    focus:ring-4 focus:ring-blue-01/10
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                  "
                                />
                            </div>

                            {/* CV */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="cv"
                                    className="mb-2 block text-sm font-semibold text-blue-01"
                                >
                                    Upload CV
                                </label>

                                <label
                                    htmlFor="cv"
                                    className="
                    flex cursor-pointer flex-col
                    items-center justify-center
                    rounded-2xl border-2 border-dashed
                    border-slate-300 bg-slate-50
                    p-6 text-center
                    transition hover:border-blue-01
                  "
                                >
                                    <Upload className="mb-3 h-8 w-8 text-blue-01" />

                                    <span className="text-sm font-semibold text-blue-01">
                                        {cv
                                            ? cv.name
                                            : "Click to upload your CV"}
                                    </span>

                                    <span className="mt-1 text-xs text-slate-500">
                                        PDF, DOC, DOCX — Maximum 10 MB
                                    </span>

                                    <input
                                        ref={fileInputRef}
                                        id="cv"
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        disabled={createJobRequest.isPending}
                                    />
                                </label>
                            </div>
                        </div>

                        <div
                            className="
                mt-8 flex flex-col gap-3
                border-t border-slate-100 pt-6
                md:flex-row md:justify-between
              "
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setFormError("");
                                    setStep(1);
                                }}
                                disabled={createJobRequest.isPending}
                                className="
                  inline-flex h-12 items-center
                  justify-center gap-2
                  rounded-xl border border-slate-200
                  px-8 text-sm font-bold
                  text-slate-600
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </button>

                            <button
                                type="submit"
                                disabled={createJobRequest.isPending}
                                className="
                  inline-flex h-12
                  items-center justify-center
                  gap-2 rounded-xl
                  bg-blue-01 px-8
                  text-sm font-bold
                  text-white
                  transition hover:bg-red-01
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                            >
                                {createJobRequest.isPending
                                    ? "Submitting..."
                                    : "Submit Application"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}