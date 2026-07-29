import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import HamburgerButton from "./HamburgerButton";
import logo from "../../../assets/Logo.png";

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
    y: -12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.985,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const mobileSubMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setActiveMobileDropdown(null);
      } else {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHomePage = location.pathname === "/";
  const useTransparentStyle = isHomePage && !scrolled && !open;

  const closeAllMenus = () => {
    setOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (linkName: string) => {
    setActiveMobileDropdown((current) =>
      current === linkName ? null : linkName,
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <nav
        className={`relative h-18 w-full border-b transition-all duration-500  ${
          useTransparentStyle
            ? "border-white/10 bg-transparent"
            : "border-black/[0.06] bg-white/90 shadow-[0_10px_40px_rgba(0,35,111,0.08)] backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-container">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeAllMenus}
            aria-label="Go to home page"
            className="relative z-20 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="LSA Logo"
              className="h-11 w-auto object-contain transition-all duration-300 md:h-13 lg:h-14 2xl:h-16"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden h-full items-center gap-5 min-[1024px]:flex xl:gap-7 2xl:gap-9">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isDropdownOpen = activeDropdown === link.name;

              return (
                <li
                  key={link.name}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setActiveDropdown(link.name);
                    }
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setActiveDropdown(null)}
                    className={({ isActive }) =>
                      `group relative flex h-full items-center gap-1.5 text-[12px] font-bold tracking-[0.08em] transition-colors duration-300 xl:text-[13px] ${
                        isActive || isDropdownOpen
                          ? "text-red-01"
                          : useTransparentStyle
                            ? "text-white/90 hover:text-white"
                            : "text-blue-02 hover:text-red-01"
                      }`
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
                              duration: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex items-center justify-center"
                          >
                            <ChevronDown size={14} strokeWidth={2.2} />
                          </motion.span>
                        )}

                        <motion.span
                          aria-hidden="true"
                          initial={false}
                          animate={{
                            width:
                              isActive || isDropdownOpen ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.28,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-t-full bg-red-01 group-hover:w-full"
                        />
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {hasChildren && isDropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-full z-50 w-[290px] -translate-x-1/2 pt-4"
                      >
                        <div className="absolute left-0 top-0 h-5 w-full" />

                        <span className="absolute left-1/2 top-[10px] z-10 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-black/[0.06] bg-white" />

                        <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-2.5 shadow-[0_25px_65px_rgba(0,35,111,0.18)]">
                          <div className="mb-2 border-b border-black/[0.06] px-3 pb-2 pt-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-01">
                              Explore {link.name}
                            </span>
                          </div>

                          {link.children!.map((subLink, index) => (
                            <NavLink
                              key={subLink.name}
                              to={subLink.path}
                              onClick={closeAllMenus}
                              className="group/item relative flex items-center justify-between overflow-hidden rounded-xl px-3.5 py-3 text-sm font-medium text-blue-02 transition-all duration-300 hover:bg-[#f4f7fb] hover:text-red-01"
                            >
                              <span className="flex min-w-0 items-center gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-02/[0.06] text-[10px] font-bold text-blue-02 transition-all duration-300 group-hover/item:bg-red-01 group-hover/item:text-white">
                                  {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="truncate">{subLink.name}</span>
                              </span>

                              <ArrowUpRight
                                size={15}
                                className="shrink-0 translate-x-1 text-blue-02/30 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:text-red-01 group-hover/item:opacity-100"
                              />
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

          {/* Desktop Contact */}
          <NavLink
            to="/contact"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `group hidden items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.08em] transition-all duration-300 min-[1024px]:inline-flex xl:px-6 ${
                isActive
                  ? "border-red-01 bg-red-01 text-white"
                  : useTransparentStyle
                    ? "border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-red-01 hover:bg-red-01"
                    : "border-red-01 bg-transparent text-red-01 hover:bg-red-01 hover:text-white"
              }`
            }
          >
            CONTACT US

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>

          {/* Mobile Hamburger */}
          <div className="relative z-20 flex items-center min-[1024px]:hidden">
            <div
              className={`rounded-lg transition-colors duration-300 ${
                useTransparentStyle ? "text-white" : "text-blue-02"
              }`}
            >
              <HamburgerButton
                isOpen={open}
                onClick={() => setOpen((current) => !current)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeAllMenus}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-18 z-40 bg-blue-02/45 backdrop-blur-sm min-[1024px]:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute left-0 right-0 top-18 z-50 max-h-[calc(100svh-72px)] overflow-y-auto border-t border-black/[0.06] bg-white shadow-[0_25px_70px_rgba(0,35,111,0.18)] min-[1024px]:hidden"
          >
            <div className="mx-auto w-full max-w-[1920px] px-container py-5">


              <ul className="space-y-2">
                {navLinks.map((link) => {
                  const hasChildren = Boolean(link.children?.length);
                  const isMobileDropdownOpen =
                    activeMobileDropdown === link.name;

                  return (
                    <li
                      key={link.name}
                      className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f8fafc]"
                    >
                      <div className="flex items-stretch">
                        <NavLink
                          to={link.path}
                          end={link.path === "/"}
                          onClick={closeAllMenus}
                          className={({ isActive }) =>
                            `flex flex-1 items-center px-4 py-3.5 text-sm font-bold tracking-[0.06em] transition-colors duration-300 ${
                              isActive
                                ? "text-red-01"
                                : "text-blue-02 hover:text-red-01"
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>

                        {hasChildren && (
                          <button
                            type="button"
                            aria-label={`Toggle ${link.name} submenu`}
                            aria-expanded={isMobileDropdownOpen}
                            onClick={() => toggleMobileDropdown(link.name)}
                            className="flex w-12 shrink-0 items-center justify-center border-l border-black/[0.06] text-blue-02 transition-colors duration-300 hover:bg-red-01 hover:text-white"
                          >
                            <motion.span
                              animate={{
                                rotate: isMobileDropdownOpen ? 180 : 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                            >
                              <ChevronDown size={17} />
                            </motion.span>
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && isMobileDropdownOpen && (
                          <motion.div
                            variants={mobileSubMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 border-t border-black/[0.06] bg-white p-2">
                              {link.children!.map((subLink) => (
                                <NavLink
                                  key={subLink.name}
                                  to={subLink.path}
                                  onClick={closeAllMenus}
                                  className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-blue-02/70 transition-all duration-300 hover:bg-red-01/8 hover:text-red-01"
                                >
                                  <span>{subLink.name}</span>

                                  <ArrowUpRight
                                    size={14}
                                    className="text-blue-02/25 transition-all duration-300 group-hover:text-red-01"
                                  />
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

              <NavLink
                to="/contact"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `group mt-5 flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 ${
                    isActive
                      ? "border-red-01 bg-red-01 text-white"
                      : "border-red-01 bg-red-01 text-white hover:bg-blue-02 hover:border-blue-02"
                  }`
                }
              >
                CONTACT US

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </NavLink>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;