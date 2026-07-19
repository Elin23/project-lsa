import { Search } from "lucide-react";

type CareerTab = "all" | "open" | "closed";

interface CareerFiltersProps {
    tabs: readonly CareerTab[];
    activeTab: CareerTab;
    search: string;
    onTabChange: (tab: CareerTab) => void;
    onSearchChange: (value: string) => void;
}

export default function CareerFilters({
    tabs,
    activeTab,
    search,
    onTabChange,
    onSearchChange,
}: CareerFiltersProps) {
    return (
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex flex-wrap justify-center gap-3">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => onTabChange(tab)}
                        className={`
              rounded-full px-6 py-2 text-sm font-semibold capitalize
              transition-all duration-300 cursor-pointer
              ${activeTab === tab
                                ? "bg-blue-01 text-white shadow-lg shadow-blue-01/20"
                                : "bg-white text-slate-600 hover:bg-blue-01/10 hover:text-blue-01"
                            }
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-90">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                    type="text"
                    placeholder="Search positions..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="
            h-12 w-full rounded-xl border border-slate-200
            bg-white pl-12 pr-4 text-sm outline-none
            transition
            focus:border-blue-01
            focus:ring-4 focus:ring-blue-01/10
            "
                />
            </div>
        </div>
    );
}