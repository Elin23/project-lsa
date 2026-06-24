import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;

  to?: string;
  href?: string;
  end?: boolean;

  icon?: ReactNode;
  iconPosition?: "left" | "right";

  className?: string;
  activeClassName?: string;

  onClick?: () => void;
  disabled?: boolean;

  type?: "button" | "submit" | "reset";

  bg?: string;
  hoverBg?: string;
  textColor?: string;

  rounded?: string;
  height?: string;
  padding?: string;

  fontSize?: string;
  fontWeight?: string;

  fullWidth?: boolean;
  withShine?: boolean;
}

const ButtonComponent = ({
  children,

  to,
  href,
  end = false,

  icon,
  iconPosition = "right",

  className = "",
  activeClassName = "",

  onClick,
  disabled = false,

  type = "button",

  bg = "bg-red-01",
  hoverBg = "hover:bg-[#c9162d]",
  textColor = "text-white",

  rounded = "rounded-full",
  height = "h-[46px]",
  padding = "px-8",

  fontSize = "text-sm",
  fontWeight = "font-semibold",

  fullWidth = false,
  withShine = true,
}: ButtonProps) => {
  const classes = `
    group
    relative
    overflow-hidden
    ${fullWidth ? "flex w-full" : "inline-flex"}
    items-center justify-center gap-2
    ${height}
    ${padding}
    ${rounded}
    ${bg}
    ${hoverBg}
    ${textColor}
    ${fontSize}
    ${fontWeight}
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]
    active:translate-y-0
    active:scale-[0.98]
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-60
    ${className}
  `;

  const content = (
    <>
      {withShine && !disabled && (
        <span
          className="
            pointer-events-none
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            transition-transform
            duration-700
            ease-out
            group-hover:translate-x-full
          "
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && (
          <span className="flex items-center transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}

        <span>{children}</span>

        {icon && iconPosition === "right" && (
          <span className="flex items-center transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) =>
          `${classes} ${isActive ? activeClassName : ""}`
        }
      >
        {content}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default ButtonComponent;