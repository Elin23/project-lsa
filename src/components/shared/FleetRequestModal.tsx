import { useState } from "react";
import {
  X,
  MapPin,
  Gauge,
  PackageCheck,
  ArrowLeft,
  ArrowRight,
  FileCheck2,
  Boxes,
} from "lucide-react";
import type { FleetItem } from "../../data/fleetData";

interface FleetRequestModalProps {
  item: FleetItem | null;
  onClose: () => void;
}

export default function FleetRequestModal({
  item,
  onClose,
}: FleetRequestModalProps) {
  const [step, setStep] = useState<1 | 2>(1);

  if (!item) return null;

  const closeModal = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-red-01 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-7 flex items-center gap-3 pr-14">
          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 1 ? "bg-blue-01" : "bg-slate-200"
            }`}
          />
          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 2 ? "bg-blue-01" : "bg-slate-200"
            }`}
          />
        </div>

        {step === 1 ? (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="h-[260px] w-full rounded-2xl object-cover"
              />

              <div className="mt-5 rounded-2xl bg-[#F7F8FD] p-5">
                <h3 className="text-2xl font-extrabold text-blue-01">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>

            <div>
              <span className="mb-3 inline-flex rounded-full bg-blue-01/10 px-4 py-2 text-sm font-bold text-blue-01">
                Equipment Details
              </span>

              <h2 className="text-2xl font-extrabold text-blue-01 md:text-3xl">
                Review Equipment Information
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Please review the equipment details before submitting your
                availability request.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Info
                  icon={Boxes}
                  label="Total Quantity"
                  value={item.quantity}
                />

                <Info
                  icon={Gauge}
                  label={item.capacityLabel || "Capacity"}
                  value={item.capacity}
                />

                <Info icon={MapPin} label="Location" value={item.location} />

                <Info
                  icon={PackageCheck}
                  label="Available Units"
                  value={item.available}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
                <div className="flex gap-3">
                  <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                  <p className="text-sm font-semibold leading-7 text-green-700">
                    This equipment includes a valid safety certificate. We can
                    provide it upon request.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-01 text-sm font-extrabold text-white transition hover:bg-red-01"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="mb-3 inline-flex rounded-full bg-blue-01/10 px-4 py-2 text-sm font-bold text-blue-01">
              Request Availability
            </span>

            <h2 className="text-2xl font-extrabold text-blue-01 md:text-3xl">
              Submit Your Equipment Request
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Fill in the details below and our team will contact you with
              availability, mobilization details, and supporting documents.
            </p>

            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <Input label="Full Name" placeholder="Enter your name" />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />

              <Input
                label="Mobile Number"
                type="tel"
                placeholder="Enter your mobile number"
              />

              <Input
                label="Requesting Company"
                placeholder="Company name"
              />

              <Input
                label="Work Location"
                placeholder="Example: Basra / Rumaila site"
              />

              <Input
                label="Estimated Required Days"
                type="number"
                placeholder="Example: 7"
              />

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Work Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe the required work..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-01 focus:bg-white"
                />
              </div>

              <div className="mt-2 flex flex-col gap-3 md:col-span-2 md:flex-row">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-extrabold text-blue-01 transition hover:border-blue-01 hover:bg-blue-01/5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-blue-01 text-sm font-extrabold text-white transition hover:bg-red-01"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#F7F8FD] p-4">
      <Icon className="mb-2 h-5 w-5 text-red-01" />
      <p className="text-[10px] font-extrabold uppercase text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-01 focus:bg-white"
      />
    </div>
  );
}