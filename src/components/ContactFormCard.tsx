const serviceOptions = [
  "General Inquiry",
  "Engineering Services",
  "Procurement",
  "Construction",
  "Pipeline Projects",
];

export default function ContactFormCard() {
  return (
    <div data-aos="fade-up" data-aos-duration="800"
      className="relative overflow-hidden rounded-xl bg-white p-6 shadow-xl md:p-8">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#F3F5FA]" />

      <form className="relative z-10">
        <h2 className="mb-7 text-[28px] font-bold text-blue-01 md:text-[34px]">
          Send a Message
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Name
            </label>
            <input
              type="text"
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
              placeholder="+964 XX XXX XXXX"
              className="h-11 w-full rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1E2746]">
              Service Interest
            </label>
            <select className="h-11 w-full rounded-lg bg-[#F6F7FB] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25">
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1E2746]">
            Project Description
          </label>
          <textarea
            placeholder="Briefly describe your project requirements..."
            className="min-h-27.5 w-full resize-none rounded-lg bg-[#F6F7FB] px-4 py-3 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-01/25"
          />
        </div>

        <button
          type="submit"
          className="mt-5 h-12 w-full rounded-full bg-red-01 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9162d] hover:shadow-xl active:translate-y-0"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}