import { ChevronDown, ChevronUp } from "lucide-react";

interface LoadMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  loadMoreText?: string;
  showLessText?: string;
}

const LoadMoreButton = ({
  isExpanded,
  onClick,
  loadMoreText = "Load More",
  showLessText = "Show Less",
}: LoadMoreButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-[#1f3f93] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 cursor-pointer"
    >
      {isExpanded ? showLessText : loadMoreText}

      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );
};

export default LoadMoreButton;