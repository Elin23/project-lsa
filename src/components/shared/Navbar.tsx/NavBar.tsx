import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Equipment", path: "/equipment" },
  { name: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <nav className="flex h-[72px] items-center justify-between bg-white px-6 shadow-md huge-px-[162px] lg-custom:px-12">
        <NavLink to="/" className="flex items-center">
          {/* <img src={logo} alt="LSA Logo" className="h-10 w-auto" /> */}
        </NavLink>

        <ul className="hidden items-center gap-8 font-semibold huge:text-lg lg:flex lg-custom:text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-red-01 ${isActive
                    ? "border-b-2 border-red-01 pb-2 text-red-01"
                    : "text-blue-02"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hidden rounded-full border px-7 py-2 text-sm font-semibold transition lg:inline-flex ${isActive
              ? "border-red-01 bg-red-01 text-white"
              : "border-red-01 text-red-01 hover:bg-red-01 hover:text-white"
            }`
          }
        >
          Get in Touch
        </NavLink>

        <HamburgerButton isOpen={open} onClick={() => setOpen(!open)} />
      </nav>

      {open && (
        <div className="absolute left-0 right-0 top-[72px] z-50 mx-3.5 rounded-bl-3xl rounded-br-3xl bg-white px-6 py-5 shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl py-1 pl-4 text-sm font-medium transition hover:text-red-01 ${isActive
                      ? "bg-red-01/80 text-white"
                      : "text-blue-02"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `mt-7 inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-center text-sm font-semibold transition ${isActive
                ? "border-red-01 bg-red-01 text-white"
                : "border-red-01 text-red-01"
              }`
            }
          >
            Get in Touch
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;