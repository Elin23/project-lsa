interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({
  isOpen,
  onClick,
}: HamburgerButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="
        relative
        flex
        h-10
        w-10
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        transition-colors
        duration-300
        hover:bg-blue-01/5
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-01/20
      "
    >
      <span
        className={`
          absolute
          h-0.5
          w-6
          rounded-full
          bg-blue-02
          transition-[transform]
          duration-300
          ease-out
          ${
            isOpen
              ? "translate-y-0 rotate-45"
              : "-translate-y-2 rotate-0"
          }
        `}
      />

      <span
        className={`
          absolute
          h-0.5
          w-6
          rounded-full
          bg-blue-02
          transition-opacity
          duration-200
          ease-out
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
      />

      <span
        className={`
          absolute
          h-0.5
          rounded-full
          bg-blue-02
          transition-[width,transform]
          duration-300
          ease-out
          ${
            isOpen
              ? "w-6 translate-y-0 -rotate-45"
              : "w-4 translate-x-1 translate-y-2 rotate-0"
          }
        `}
      />
    </button>
  );
};

export default HamburgerButton;