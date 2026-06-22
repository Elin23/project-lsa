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
}: ButtonProps) => {
  const classes = `
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
    transition-all duration-300
    disabled:cursor-not-allowed
    disabled:opacity-60
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
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