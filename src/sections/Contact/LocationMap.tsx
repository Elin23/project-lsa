import { useState } from "react";

interface LocationMapProps {
  googleMapsEmbedUrl?: string;
  title?: string;
}

export default function LocationMap({
  googleMapsEmbedUrl = "https://www.google.com/maps?q=Basra,+Iraq&output=embed",
  title = "LSA Location",
}: LocationMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="relative h-80 w-full bg-[#ECEFF5] md:h-105 lg:h-130">
        {!loaded && (
          <div className="absolute inset-0 z-10 animate-pulse bg-[#ECEFF5]">
            <div className="absolute inset-0 bg-[linear-gradient(35deg,transparent_48%,rgba(255,255,255,0.85)_49%,rgba(255,255,255,0.85)_51%,transparent_52%)] bg-size-[80px_80px]" />

            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-pulse" />

            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400/50 shadow-[0_0_0_14px_rgba(31,63,147,0.08)]" />
          </div>
        )}

        <iframe
          title={title}
          src={googleMapsEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}