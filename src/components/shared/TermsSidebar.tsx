import { ChevronRight } from "lucide-react";

import type { TermsNavigationItem } from "../../data/termsAndConditionsData";

interface TermsSidebarProps {
  activeSection: string;
  items: readonly TermsNavigationItem[];
  onNavigate: (sectionId: string) => void;
}

export default function TermsSidebar({
  activeSection,
  items,
  onNavigate,
}: TermsSidebarProps) {
  return (
    <aside className="hidden lg:sticky lg:top-28 lg:block">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,35,70,0.06)]">
        <div className="border-b border-slate-200 px-5 py-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
            On this page
          </span>

          <h2 className="mt-1 text-lg font-bold text-blue-01">
            Terms Contents
          </h2>
        </div>

        <nav
          aria-label="Terms and conditions navigation"
          className="max-h-[calc(100vh-240px)] overflow-y-auto p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? "location" : undefined}
                onClick={() => onNavigate(item.id)}
                className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition-[background-color,color,box-shadow] duration-300 ${
                  isActive
                    ? "bg-blue-01 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-blue-01"
                } focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-01`}
              >
                <span>{item.label}</span>

                <ChevronRight
                  aria-hidden="true"
                  size={15}
                  className={`shrink-0 transition-[transform,color] duration-300 ${
                    isActive
                      ? "translate-x-0 text-red-400"
                      : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-red-600"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}