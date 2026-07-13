interface TabItem {
  label: string;
  value: string;
}

interface TabsComponentProps {
  tabs: readonly TabItem[];
  activeTab: string;
  onChange: (tab: string) => void;
}

const TabsComponent = ({
  tabs,
  activeTab,
  onChange,
}: TabsComponentProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#1f3f93] text-white shadow-lg"
                : "bg-[#edf1ff] text-gray-600 hover:bg-[#1f3f93] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabsComponent;