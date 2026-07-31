import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

interface FloatingTabsProps {
  heroId?: string;
  footerId?: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
}

interface FloatingTabItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  accentClassName: string;
  iconClassName: string;
}

const FloatingTabs = ({
  heroId = "hero",
  footerId = "footer",
  phoneNumber,
  whatsappNumber,
  email,
}: FloatingTabsProps) => {
  const { pathname } = useLocation();

  const [showAfterHero, setShowAfterHero] = useState<boolean>(false);
  const [hideNearFooter, setHideNearFooter] = useState<boolean>(false);

  useEffect(() => {
    setShowAfterHero(false);
    setHideNearFooter(false);

    let heroObserver: IntersectionObserver | null = null;
    let footerObserver: IntersectionObserver | null = null;
    let removeFallbackScrollListener: (() => void) | null = null;

    const initializeObservers = () => {
      const heroElement = document.getElementById(heroId);
      const footerElement = document.getElementById(footerId);

      if (heroElement) {
        heroObserver = new IntersectionObserver(
          ([entry]) => {
            setShowAfterHero(!entry.isIntersecting);
          },
          {
            threshold: 0,
            rootMargin: "-100px 0px 0px 0px",
          },
        );

        heroObserver.observe(heroElement);
      } else {
        const handleScroll = () => {
          setShowAfterHero(window.scrollY > window.innerHeight * 0.8);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
          passive: true,
        });

        removeFallbackScrollListener = () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }

      if (footerElement) {
        footerObserver = new IntersectionObserver(
          ([entry]) => {
            setHideNearFooter(entry.isIntersecting);
          },
          {
            threshold: 0,
            rootMargin: "250px 0px 0px 0px",
          },
        );

        footerObserver.observe(footerElement);
      }
    };

    const frameId = window.requestAnimationFrame(() => {
      initializeObservers();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      heroObserver?.disconnect();
      footerObserver?.disconnect();
      removeFallbackScrollListener?.();
    };
  }, [pathname, heroId, footerId]);

  const contactItems = useMemo<FloatingTabItem[]>(
    () => [
      {
        id: "whatsapp",
        label: "WhatsApp",
        value: whatsappNumber,
        href: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
        icon: <FaWhatsapp />,
        external: true,
        accentClassName: "bg-[#25D366]",
        iconClassName: "text-[#25D366] group-hover/tab:bg-[#25D366] group-hover/tab:text-white",
      },
      {
        id: "phone",
        label: "Call Us",
        value: phoneNumber,
        href: `tel:${phoneNumber.replace(/[^\d+]/g, "")}`,
        icon: <HiOutlinePhone />,
        accentClassName: "bg-[#102344]",
        iconClassName: "text-[#102344] group-hover/tab:bg-[#102344] group-hover/tab:text-white",
      },
      {
        id: "email",
        label: "Email Us",
        value: email,
        href: `mailto:${email}`,
        icon: <HiOutlineMail />,
        accentClassName: "bg-[#722740]",
        iconClassName: "text-[#722740] group-hover/tab:bg-[#722740] group-hover/tab:text-white",
      },
    ],
    [email, phoneNumber, whatsappNumber],
  );

  const isVisible = showAfterHero && !hideNearFooter;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Contact options"
          initial={{
            opacity: 0,
            x: -55,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -55,
            scale: 0.96,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed left-2 top-1/2 z-60 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[26px] bg-[#102344]/8 blur-xl" />

            <div className="relative overflow-visible rounded-[18px] border border-white/60 bg-white/80 p-1 shadow-[0_14px_35px_rgba(16,35,68,0.16)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent" />

              <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-linear-to-b from-transparent via-white/90 to-transparent" />

              <div className="flex flex-col">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: -16,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.07,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className="group/tab relative flex h-11.5 w-11.5 items-center justify-center rounded-[14px] outline-none transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_8px_22px_rgba(16,35,68,0.12)] focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#102344]/20"
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-[18px] shadow-[0_6px_16px_rgba(16,35,68,0.09)] transition-all duration-300 group-hover/tab:scale-105 group-hover/tab:shadow-none ${item.iconClassName}`}>
                        {item.icon}
                      </span>

                      <span className={`absolute left-14.5 top-1/2 h-7 w-0.75 -translate-y-1/2 scale-y-0 rounded-full opacity-0 transition-all duration-300 group-hover/tab:scale-y-100 group-hover/tab:opacity-100 ${item.accentClassName}`} />

                      <span className="pointer-events-none absolute left-16.5 top-1/2 min-w-max -translate-x-2 -translate-y-1/2 rounded-xl border border-white/50 bg-[#102344]/95 px-3.5 py-2.5 opacity-0 shadow-[0_14px_35px_rgba(16,35,68,0.22)] backdrop-blur-xl transition-all duration-300 ease-out group-hover/tab:translate-x-0 group-hover/tab:opacity-100 group-focus-visible/tab:translate-x-0 group-focus-visible/tab:opacity-100">
                        <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#102344]" />

                        <span className="relative block">
                          <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                            {item.label}
                          </span>

                          <span className="mt-1 block max-w-55 truncate text-xs font-semibold tracking-[0.01em] text-white">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    </a>

                    {index < contactItems.length - 1 && (
                      <div className="mx-auto h-px w-5 bg-linear-to-r from-transparent via-[#102344]/10 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default FloatingTabs;