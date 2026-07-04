import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  fleetData,
  fleetTabs,
  type FleetCategory,
  type FleetItem,
} from "../../data/fleetData";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import TabsComponent from "../../components/shared/TabsComponent";
import FleetCard from "../../components/shared/FleetCard";
import FleetRequestModal from "../../components/shared/FleetRequestModal";

export default function FleetInventory() {
  const [activeTab, setActiveTab] = useState<"all" | FleetCategory>("all");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<FleetItem | null>(null);

  const filteredFleet = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return fleetData.filter((item) => {
      const matchesTab =
        activeTab === "all" || item.categories.includes(activeTab);

      const matchesSearch =
        searchValue === "" ||
        item.title.toLowerCase().includes(searchValue) ||
        item.location.toLowerCase().includes(searchValue) ||
        item.capacity.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <section >
      <div >
        <TitleComponent
          title="Fleet Inventory"
          description="Browse our ready-to-deploy equipment catalog."
        />


        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <TabsComponent
            tabs={fleetTabs}
            activeTab={activeTab}
            onChange={(tab) => setActiveTab(tab as "all" | FleetCategory)}
          />

          <div className="relative w-full lg:w-[320px]">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Fleet..."
              className="h-12 w-full rounded-xl border border-transparent bg-blue-01/5 pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-01/30 focus:bg-white"
            />
          </div>
        </div>

        {filteredFleet.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredFleet.map((item) => (
              <FleetCard
                key={item.id}
                {...item}
                onRequest={() => setSelectedItem(item)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <h3 className="text-xl font-extrabold text-blue-01">
              No equipment found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try changing the category or search keyword.
            </p>
          </div>
        )}
      </div>

      <FleetRequestModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}


