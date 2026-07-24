import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import HamburgerButton from "./HamburgerButton";
import logo from "../../../assets/Logo1.webp";

interface NavSubLink {
  name: string;
  path: string;
}

interface NavLinkItem {
  name: string;
  path: string;
  children?: NavSubLink[];
}

const navLinks: NavLinkItem[] = [
  {
    name: "HOME",
    path: "/",
    children: [
      {
        name: "Trusted by Industry Leaders",
        path: "/?section=trusted-companies",
      },
      {
        name: "Local Roots",
        path: "/?section=homeAbout",
      },
      {
        name: "Our Core Capabilities",
        path: "/?section=projects",
      },
      {
        name: "Why Partner With Us?",
        path: "/?section=why-partner",
      },
      {
        name: "Featured Projects",
        path: "/?section=featured-projects",
      },
      {
        name: "FAQ",
        path: "/?section=faq",
      },
    ],
  },
  {
    name: "ABOUT",
    path: "/about",
    children: [
      {
        name: "Strategic Directions",
        path: "/about?section=strategic-directions",
      },
      {
        name: "Our Journey",
        path: "/about?section=journey",
      },
      {
        name: "Certifications & Standards",
        path: "/about?section=certifications-standards",
      },
      {
        name: "Meet the Experts",
        path: "/about?section=meet-the-experts",
      },
    ],
  },
  {
    name: "SERVICES",
    path: "/services",
    children: [
      {
        name: "Our Advantages",
        path: "/services?section=our-advantages",
      },
      {
        name: "Our Services",
        path: "/services?section=our-services",
      },
    ],
  },
  {
    name: "PROJECTS",
    path: "/projects",
    children: [
      {
        name: "Our Projects",
        path: "/projects?section=our-projects",
      },
    ],
  },
  {
    name: "EQUIPMENT",
    path: "/equipment",
    children: [
      {
        name: "Fleet Inventory",
        path: "/equipment?section=fleet-inventory",
      },
      {
        name: "Specialized Equipment Capabilities",
        path: "/equipment?section=specialized-equipment-capabilities",
      },
      {
        name: "LSA Equipment Fleet",
        path: "/equipment?section=lsa-equipment-fleet",
      },
      {
        name: "The LSA Advantage",
        path: "/equipment?section=the-lsa-advantage",
      },
    ],
  },
  {
    name: "CAREERS",
    path: "/careers",
    children: [
      {
        name: "Life at Loaloat Shatt Al-Arab",
        path: "/careers?section=life-at-lsa",
      },
      {
        name: "Current Opportunities",
        path: "/careers?section=positions",
      },
      {
        name: "Application Process",
        path: "/careers?section=process",
      },
    ],
  },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -22,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -24,
    scale: 0.97,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1] as const,
    },
  },

  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      } else {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openDropdown = (linkName: string) => {
    setActiveDropdown(linkName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeAllMenus = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <nav
        className="
          flex
          h-18
          items-center
          justify-between
          bg-white/60
          px-6
          shadow-md
          backdrop-blur-md
          md:px-12
          2xl:px-container
        "
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeAllMenus}
          aria-label="Go to home page"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="LSA Logo"
            className="h-10 w-auto object-contain md:h-15 2xl:h-20"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul
          className="
            hidden
            items-center
            gap-8
            font-semibold
            min-[1024px]:flex
            huge:text-lg
          "
        >
          {navLinks.map((link) => {
            const hasChildren =
              Boolean(link.children) && link.children!.length > 0;

            const isDropdownOpen = activeDropdown === link.name;

            return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (hasChildren) {
                    openDropdown(link.name);
                  }
                }}
                onMouseLeave={closeDropdown}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeDropdown}
                  className={({ isActive }) =>
                    `
                      group/link
                      relative
                      flex
                      items-center
                      gap-1
                      py-6
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        isActive || isDropdownOpen
                          ? "text-red-01"
                          : "text-blue-02 hover:text-red-01"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      {hasChildren && (
                        <motion.span
                          animate={{
                            rotate: isDropdownOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-center justify-center"
                        >
                          <ChevronDown size={15} strokeWidth={2} />
                        </motion.span>
                      )}

                      {/* Active and Hover Underline */}
                      <motion.span
                        aria-hidden="true"
                        initial={false}
                        animate={{
                          width:
                            isActive || isDropdownOpen ? "100%" : "0%",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                          absolute
                          bottom-4
                          left-1/2
                          h-0.5
                          -translate-x-1/2
                          rounded-full
                          bg-red-01
                          group-hover/link:w-full
                        "
                      />
                    </>
                  )}
                </NavLink>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {hasChildren && isDropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-64
                        -translate-x-1/2
                        pt-1
                      "
                    >
                      {/* Invisible Bridge */}
                      <div
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-5 w-full"
                      />

                      {/* Top Triangle Arrow */}
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          left-1/2
                          top-0
                          z-10
                          h-4
                          w-4
                          -translate-x-1/2
                          rotate-45
                          border-l
                          border-t
                          border-black/5
                          bg-white/95 
                          backdrop-blur-md
                        "
                      />

                      {/* Dropdown Card */}
                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-black/5
                          bg-white/95
                          p-2
                          shadow-[0_18px_50px_rgba(0,35,111,0.16)]
                          backdrop-blur-md
                        "
                      >
                        {link.children!.map((subLink) => (
                          <NavLink
                            key={subLink.name}
                            to={subLink.path}
                            onClick={closeDropdown}
                            className="
                              group/item
                              relative
                              flex
                              items-center
                              overflow-hidden
                              rounded-xl
                              px-4
                              py-3
                              text-sm
                              font-medium
                              text-blue-02
                              transition-[background-color,color,padding]
                              duration-300
                              hover:bg-red-01/10
                              hover:pl-6
                              hover:text-red-01
                            "
                          >
                            {/* Hover Dot */}
                            <span
                              aria-hidden="true"
                              className="
                                absolute
                                left-2
                                h-1.5
                                w-1.5
                                scale-0
                                rounded-full
                                bg-red-01
                                transition-transform
                                duration-300
                                group-hover/item:scale-100
                              "
                            />

                            {subLink.name}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button */}
        <NavLink
          to="/contact"
          onClick={closeAllMenus}
          className={({ isActive }) =>
            `
              hidden
              rounded-full
              border
              px-7
              py-2
              text-sm
              font-semibold
              transition-[background-color,border-color,color]
              duration-300
              min-[1024px]:inline-flex
              ${
                isActive
                  ? "border-red-01 bg-red-01 text-white"
                  : "border-red-01 text-red-01 hover:bg-red-01 hover:text-white"
              }
            `
          }
        >
          CONTACT US
        </NavLink>

        {/* Mobile and Tablet Hamburger */}
        <div className="flex items-center min-[1024px]:hidden">
          <HamburgerButton
            isOpen={open}
            onClick={() => setOpen((previousState) => !previousState)}
          />
        </div>
      </nav>

      {/* Mobile and Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="
              absolute
              left-0
              right-0
              top-18
              z-50
              mx-3.5
              overflow-hidden
              rounded-b-3xl
              bg-white
              px-6
              py-5
              shadow-xl
              min-[1024px]:hidden
            "
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `
                        block
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        transition-[background-color,color,box-shadow]
                        duration-300
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

            {/* Mobile Contact Button */}
            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  transition-[background-color,border-color,color]
                  duration-300
                  ${
                    isActive
                      ? "border-red-01 bg-red-01 text-white"
                      : "border-red-01 text-red-01 hover:bg-red-01 hover:text-white"
                  }
                `
              }
            >
              CONTACT US
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;