import { useState } from "react";
import { useCreateContactMessage } from "../../hooks/mutations/useCreateContactMessage";

// القائمة المعتمدة من الباك إند بالضبط
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
];

export default function ContactFormCard() {
  const { mutate: createMessage, isPending, isSuccess, isError, error } = useCreateContactMessage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    projectDescription: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");

    createMessage(formData, {
      onSuccess: (res) => {
        setSuccessMsg(res.message || "Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: serviceOptions[0],
          projectDescription: "",
        });
      },
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden rounded-xl bg-white p-6 shadow-xl md:p-8"
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#F3F5FA]" />

      <form onSubmit={handleSubmit} className="relative z-10">
        <h2 className="mb-7 text-[28px] font-bold text-blue-01 md:text-[34px]">
          Send a Message
        </h2>

        {/* Success Alert */}
        {isSuccess && successMsg && (
          <div className="mb-5 rounded-lg bg-green-500/10 p-4 text-sm font-semibold text-green-600">
            {successMsg}
          </div>
        )}

        {/* Error Alert */}
        {isError && (
          <div className="mb-5 rounded-lg bg-red-500/10 p-4 text-sm font-semibold text-red-600">
            {(error as any)?.response?.data?.errors?.[0]?.message ||
              (error as any)?.response?.data?.message ||
              "Something went wrong. Please check your inputs and try again."}
          </div>
        )}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="h-11 w-full rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="h-11 w-full rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+964 XX XXX XXXX"
              className="h-11 w-full rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-11 w-full cursor-pointer rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1E2746]">
            Project Description
          </label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={5000}
            placeholder="Briefly describe your project requirements (at least 10 characters)..."
            className="min-h-27.5 w-full resize-none rounded-lg bg-[#F6F7FB] px-4 py-3 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-5 h-12 w-full rounded-full cursor-pointer bg-red-01 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9162d] hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}