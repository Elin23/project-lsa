import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
} from "lucide-react";

import TitleComponent from "../../components/shared/TitleComponent";
import TabsComponent from "../../components/shared/TabsComponent";
import FleetCard from "../../components/shared/FleetCard";
import FleetRequestModal from "../../components/shared/FleetRequestModal";
import Pagination from "../../components/navigation/Pagination";

import FleetCardSkeleton from "../../components/skeletons/FleetCardSkeleton";

import type {
  PublicEquipment,
} from "../../Types/equipment";

import {
  usePublicEquipment,
  usePublicEquipmentCategories,
} from "../../hooks/queries/useEquipment";

function getItemsPerPage() {
  if (
    typeof window ===
    "undefined"
  ) {
    return 6;
  }

  if (
    window.innerWidth <
    768
  ) {
    return 3;
  }

  if (
    window.innerWidth <
    1024
  ) {
    return 4;
  }

  return 6;
}

export default function FleetInventory() {
  const [activeTab, setActiveTab] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const [
    selectedItem,
    setSelectedItem,
  ] =
    useState<PublicEquipment | null>(
      null,
    );

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    itemsPerPage,
    setItemsPerPage,
  ] =
    useState(getItemsPerPage);

  const {
    data: equipment = [],
    isLoading:
      isEquipmentLoading,
    isError:
      isEquipmentError,
  } =
    usePublicEquipment();

  const {
    data: categories = [],
    isLoading:
      isCategoriesLoading,
    isError:
      isCategoriesError,
  } =
    usePublicEquipmentCategories();

  const isLoading =
    isEquipmentLoading ||
    isCategoriesLoading;

  const isError =
    isEquipmentError ||
    isCategoriesError;

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage =
        getItemsPerPage();

      setItemsPerPage(
        (
          previousValue,
        ) => {
          if (
            previousValue ===
            newItemsPerPage
          ) {
            return previousValue;
          }

          return newItemsPerPage;
        },
      );
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  const fleetTabs =
    useMemo(
      () => [
        {
          value: "all",
          label:
            "All Equipment",
        },

        ...categories.map(
          (
            category,
          ) => ({
            value:
              category.slug,
            label:
              category.name,
          }),
        ),
      ],
      [categories],
    );

  const filteredFleet =
    useMemo(() => {
      const searchValue =
        search
          .toLowerCase()
          .trim();

      return equipment.filter(
        (item) => {
          const matchesTab =
            activeTab ===
              "all" ||
            item.category
              .slug ===
              activeTab;

          const matchesSearch =
            searchValue ===
              "" ||
            item.title
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            item.location
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            item.shortDescription
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            item
              .primarySpecification
              .label
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            item
              .primarySpecification
              .value
              .toLowerCase()
              .includes(
                searchValue,
              );

          return (
            matchesTab &&
            matchesSearch
          );
        },
      );
    }, [
      equipment,
      activeTab,
      search,
    ]);

  const totalPages =
    Math.ceil(
      filteredFleet.length /
        itemsPerPage,
    );

  const safeCurrentPage =
    Math.min(
      currentPage,
      Math.max(
        totalPages,
        1,
      ),
    );

  const paginatedFleet =
    useMemo(() => {
      const startIndex =
        (safeCurrentPage -
          1) *
        itemsPerPage;

      return filteredFleet.slice(
        startIndex,
        startIndex +
          itemsPerPage,
      );
    }, [
      filteredFleet,
      safeCurrentPage,
      itemsPerPage,
    ]);

  return (
    <section id="fleet-inventory">
      <TitleComponent
        title="Fleet Inventory"
        description="Browse our ready-to-deploy equipment catalog."
      />

      <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <TabsComponent
          tabs={fleetTabs}
          activeTab={
            activeTab
          }
          onChange={(tab) => {
            setActiveTab(
              tab,
            );

            setCurrentPage(
              1,
            );
          }}
        />

        <div className="relative w-full lg:w-[320px]">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

          <input
            type="search"
            value={search}
            disabled={
              isLoading
            }
            onChange={(
              event,
            ) => {
              setSearch(
                event.target
                  .value,
              );

              setCurrentPage(
                1,
              );
            }}
            placeholder="Search Fleet..."
            aria-label="Search equipment fleet"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-transparent
              bg-blue-01/5
              pl-12
              pr-4
              text-sm
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-blue-01/30
              focus:bg-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          />
        </div>
      </div>

      {isLoading ? (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({
            length:
              itemsPerPage,
          }).map(
            (
              _,
              index,
            ) => (
              <FleetCardSkeleton
                key={
                  index
                }
              />
            ),
          )}
        </div>
      ) : isError ? (
        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
          <h3 className="text-xl font-bold text-red-600">
            Unable to load
            equipment
          </h3>

          <p className="mt-2 text-sm text-red-500">
            Something went wrong
            while loading the
            equipment inventory.
          </p>
        </div>
      ) : filteredFleet.length >
        0 ? (
        <>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedFleet.map(
              (
                item,
                index,
              ) => (
                <FleetCard
                  key={
                    item._id
                  }
                  item={
                    item
                  }
                  animationDelay={
                    (index %
                      3) *
                    60
                  }
                  onRequest={() =>
                    setSelectedItem(
                      item,
                    )
                  }
                />
              ),
            )}
          </div>

          {totalPages >
            1 && (
            <div className="mt-10 flex justify-center">
              <Pagination
                currentPage={
                  safeCurrentPage
                }
                totalPages={
                  totalPages
                }
                onPageChange={
                  setCurrentPage
                }
              />
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h3 className="text-xl font-extrabold text-blue-01">
            No equipment
            found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try changing the
            category or search
            keyword.
          </p>
        </div>
      )}

      <FleetRequestModal
        item={
          selectedItem
        }
        onClose={() =>
          setSelectedItem(
            null,
          )
        }
      />
    </section>
  );
}