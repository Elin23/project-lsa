import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import logo from "/src/assets/Logo1.webp";

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
    <header className="fixed z-50 w-full">
      <nav className="flex h-18 items-center justify-between bg-white px-6 shadow-md 2xl:px-container md:px-12">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="LSA Logo" className=" h-10 md:h-15 2xl:h-20 w-auto" />
        </NavLink>

        <ul className="hidden items-center gap-8 font-semibold huge:text-lg lg:flex lg-custom:text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-red-01"
                      : "text-blue-02 hover:text-red-01"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`
                        absolute -bottom-2 left-1/2 h-0.5
                        -translate-x-1/2 rounded-full bg-red-01
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hidden rounded-full border px-7 py-2 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
              isActive
                ? "border-red-01 bg-red-01 text-white"
                : "border-red-01 text-red-01 hover:bg-red-01 hover:text-white"
            }`
          }
        >
          Get in Touch
        </NavLink>

        <HamburgerButton
          isOpen={open}
          onClick={() => setOpen((prev) => !prev)}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          absolute left-0 right-0 top-18 z-50 mx-3.5 overflow-hidden
          rounded-b-3xl bg-white px-6 py-5 shadow-xl
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-6 scale-95 opacity-0"
          }
        `}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`
                transition-all duration-500 ease-out
                ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
            >
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  block rounded-2xl px-4 py-3 text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-red-01 text-white shadow-lg"
                      : "text-blue-02 hover:bg-red-01/10 hover:text-red-01"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`
            transition-all duration-500 ease-out
            ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
          style={{
            transitionDelay: open
              ? `${navLinks.length * 60}ms`
              : "0ms",
          }}
        >
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `mt-6 inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-red-01 bg-red-01 text-white"
                  : "border-red-01 text-red-01 hover:bg-red-01 hover:text-white"
              }`
            }
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;