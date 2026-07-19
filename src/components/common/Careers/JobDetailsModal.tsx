import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    CheckCircle,
    Clock,
    MapPin,
    Upload,
    X,
} from "lucide-react";

import type { CareerJob } from "../../../data/careersData";
import { useState } from "react";

interface JobDetailsModalProps {
    job: CareerJob | null;
    onClose: () => void;
}

export default function JobDetailsModal({
    job,
    onClose,
}: JobDetailsModalProps) {
    const [step, setStep] = useState<1 | 2>(1);

    if (!job) return null;

    const handleClose = () => {
        setStep(1);
        onClose();
    };

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
                    className="
            absolute right-5 top-5 z-10
            rounded-full bg-slate-100 p-2
            text-slate-500 transition
            hover:bg-red-100 hover:text-red-01 cursor-pointer
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
                        {step === 1 ? "Job Details" : "Application Form"}
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
                            {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4 text-blue-01" />
                            {job.department}
                        </span>
                    </div>
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
                </div>
                {/* Step 1 */}
                {step === 1 && (
                    <div className="p-6 md:p-8">
                        <div className="mb-8 rounded-2xl bg-[#f7f8ff] p-5">
                            <h4 className="mb-3 text-xl font-bold text-blue-01">
                                About the Role
                            </h4>
                            <p className="text-sm leading-7 text-slate-600">
                                {job.overview}
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
                                            key={index}
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
                                            key={index}
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
                                onClick={handleClose}
                                className="
                  h-12 rounded-xl border
                  border-slate-200 px-8
                  text-sm font-bold text-slate-600
                  transition hover:bg-slate-100 cursor-pointer
                "
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setStep(2)}
                                className="
                  inline-flex h-12 items-center
                  justify-center gap-2 rounded-xl
                  bg-blue-01 px-8 text-sm
                  font-bold text-white
                  transition hover:bg-red-01 cursor-pointer
                "
                            >
                                Next
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                )}
                {/* Step 2 */}
                {step === 2 && (
                    <form className="p-6 md:p-8">
                        <p className="mb-6 text-sm leading-6 text-slate-500">
                            Please fill in your information and upload your CV to apply for this position.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                "First Name",
                                "Last Name",
                                "Email Address",
                                "Mobile Number",
                            ].map((item) => (
                                <div key={item}>
                                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                                        {item}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Enter ${item.toLowerCase()}`}
                                        className="
                      h-12 w-full rounded-xl
                      border border-slate-200 px-4
                      text-sm outline-none
                      focus:border-blue-01
                      focus:ring-4 focus:ring-blue-01/10
                    "
                                    />
                                </div>
                            ))}
                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-semibold text-blue-01">
                                    Upload CV
                                </label>
                                <label
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
                                        Click to upload your CV
                                    </span>
                                    <span className="mt-1 text-xs text-slate-500">
                                        PDF, DOC, DOCX
                                    </span>
                                    <input
                                        type="file"
                                        className="hidden"
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
                                onClick={() => setStep(1)}
                                className="
                  inline-flex h-12 items-center
                  justify-center gap-2
                  rounded-xl border border-slate-200
                  px-8 text-sm font-bold
                  text-slate-600 cursor-pointer
                "
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </button>
                            <button
                                type="submit"
                                className="
                  h-12 rounded-xl
                  bg-blue-01 px-8
                  text-sm font-bold
                  text-white
                  transition hover:bg-red-01 cursor-pointer
                "
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}