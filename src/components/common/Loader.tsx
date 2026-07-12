interface LoaderProps {
isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
return (
<div
className={`         fixed inset-0 z-[9999] flex items-center justify-center
        bg-blue-02
        transition-opacity duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isVisible
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
> <div className="flex flex-col items-center"> <svg
       viewBox="0 0 260 180"
       className="h-[180px] w-[260px]"
       aria-label="LSA loading"
       role="img"
     > <line
         x1="45"
         y1="145"
         x2="215"
         y2="145"
         stroke="#ffffff"
         strokeOpacity="0.18"
         strokeWidth="4"
         strokeLinecap="round"
       />

      <path
        d="M75 145 L122 72 L168 145"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M94 145 L122 100 L150 145"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="122" cy="72" r="7" fill="#c8102e" />

      <g className="origin-[122px_72px] animate-[pumpMinimal_1.35s_ease-in-out_infinite]">
        <path
          d="M78 63 H160"
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path
          d="M158 55 L210 42 L197 76 L158 72 Z"
          fill="#c8102e"
        />

        <circle cx="160" cy="67" r="4" fill="#ffffff" opacity="0.9" />
      </g>

      <g className="animate-[rodMinimal_1.35s_ease-in-out_infinite]">
        <line
          x1="197"
          y1="74"
          x2="197"
          y2="132"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="197" cy="136" r="5" fill="#c8102e" />
      </g>

      <path
        d="M55 145 H120"
        stroke="#c8102e"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <circle cx="64" cy="132" r="11" fill="#ffffff" opacity="0.9" />
      <circle cx="64" cy="132" r="4" fill="#0a122a" />

      <circle
        cx="182"
        cy="157"
        r="3.5"
        fill="#ffffff"
        className="animate-[dotMinimal_0.8s_ease-in-out_infinite]"
      />

      <circle
        cx="197"
        cy="160"
        r="3.5"
        fill="#c8102e"
        className="animate-[dotMinimal_0.8s_ease-in-out_0.15s_infinite]"
      />

      <circle
        cx="212"
        cy="157"
        r="3.5"
        fill="#ffffff"
        className="animate-[dotMinimal_0.8s_ease-in-out_0.3s_infinite]"
      />
    </svg>

    <h2 className="mt-4 text-4xl font-extrabold tracking-[0.24em] text-white">
      LSA
    </h2>

    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
      Engineering Excellence
    </p>
  </div>
</div>

);
}
