import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav className="flex items-center justify-center gap-8">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          text-muted-blue
          transition-all duration-300
          hover:text-blue-01
          disabled:pointer-events-none
          disabled:opacity-30
        "
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-5">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const active = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className="
                group relative
                text-sm font-semibold
                transition-colors duration-300
              "
            >
              <span
                className={`transition-colors duration-300 ${
                  active
                    ? "text-red-01"
                    : "text-muted-blue group-hover:text-blue-01"
                }`}
              >
                {page}
              </span>

              <span
                className={`
                  absolute -bottom-2 left-1/2 h-[2px]
                  -translate-x-1/2 rounded-full bg-red-01
                  transition-all duration-300
                  ${
                    active
                      ? "w-6"
                      : "w-0 group-hover:w-4"
                  }
                `}
              />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          text-muted-blue
          transition-all duration-300
          hover:text-blue-01
          disabled:pointer-events-none
          disabled:opacity-30
        "
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
}