import { Circle } from "lucide-react";
import type { FleetItem } from "../../data/fleetData";

interface FleetCardProps extends FleetItem {
  onRequest: () => void;
}

export default function FleetCard({
  image,
  title,
  quantity,
  capacityLabel = "Capacity",
  capacity,
  location,
  onRequest,
}: FleetCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[220px] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#61F9A8] px-3 py-1 text-[10px] font-bold text-slate-950">
          <Circle className="h-2 w-2 fill-slate-950 text-slate-950" />
          Ready to Mobilize
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-extrabold text-blue-01">{title}</h3>

          <span className="shrink-0 text-sm font-extrabold text-red-01">
            Qty: {quantity}
          </span>
        </div>

        <div className="my-4 h-px bg-slate-100" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase text-slate-400">
              {capacityLabel}
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">{capacity}</p>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase text-slate-400">
              Location
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">{location}</p>
          </div>
        </div>

        <div className="my-4 h-px bg-slate-100" />

        <button
          type="button"
          onClick={onRequest}
          className="h-11 w-full rounded-xl border border-blue-01/25 bg-blue-01/5 text-sm font-extrabold text-blue-01 transition-all duration-300 hover:bg-blue-01 hover:text-white"
        >
          Request Availability
        </button>
      </div>
    </div>
  );
}