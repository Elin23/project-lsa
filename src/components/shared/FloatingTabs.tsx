import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useLocation,
} from "react-router-dom";

import {
  FaWhatsapp,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import {
  useContactInfo,
} from "../../hooks/queries/useContactInfo";

// ======================================================
// Types
// ======================================================

interface FloatingTabsProps {
  heroId?: string;
  footerId?: string;

  phoneNumber?: string;
  whatsappNumber?: string;
  email?: string;
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

// ======================================================
// Component
// ======================================================

const FloatingTabs = ({
  heroId = "hero",
  footerId = "footer",
  phoneNumber,
  whatsappNumber,
  email,
}: FloatingTabsProps) => {
  const { pathname } =
    useLocation();

  const {
    data: contact,
  } = useContactInfo();

  const [
    showAfterHero,
    setShowAfterHero,
  ] = useState(false);

  const [
    hideNearFooter,
    setHideNearFooter,
  ] = useState(false);

  // ====================================================
  // Resolve Contact Data
  // ====================================================

  const resolvedPhone =
    phoneNumber?.trim() ||
    contact?.primaryPhone?.trim() ||
    "";

  const resolvedWhatsapp =
    whatsappNumber?.trim() ||
    contact?.socialLinks?.whatsapp?.trim() ||
    "";

  const resolvedEmail =
    email?.trim() ||
    contact?.email?.trim() ||
    "";

  // ====================================================
  // Visibility Observers
  // ====================================================

  useEffect(() => {
    let heroObserver:
      | IntersectionObserver
      | null = null;

    let footerObserver:
      | IntersectionObserver
      | null = null;

    let removeFallbackScrollListener:
      | (() => void)
      | null = null;

    const initializeObservers =
      () => {
        const heroElement =
          document.getElementById(
            heroId,
          );

        const footerElement =
          document.getElementById(
            footerId,
          );

        // =================================================
        // Hero Visibility
        // =================================================

        if (heroElement) {
          heroObserver =
            new IntersectionObserver(
              ([entry]) => {
                setShowAfterHero(
                  !entry.isIntersecting,
                );
              },
              {
                threshold: 0,
                rootMargin:
                  "-100px 0px 0px 0px",
              },
            );

          heroObserver.observe(
            heroElement,
          );
        } else {
          const handleScroll =
            () => {
              setShowAfterHero(
                window.scrollY >
                  window.innerHeight *
                    0.8,
              );
            };

          handleScroll();

          window.addEventListener(
            "scroll",
            handleScroll,
            {
              passive: true,
            },
          );

          removeFallbackScrollListener =
            () => {
              window.removeEventListener(
                "scroll",
                handleScroll,
              );
            };
        }

        // =================================================
        // Footer Visibility
        // =================================================

        if (footerElement) {
          footerObserver =
            new IntersectionObserver(
              ([entry]) => {
                setHideNearFooter(
                  entry.isIntersecting,
                );
              },
              {
                threshold: 0,
                rootMargin:
                  "250px 0px 0px 0px",
              },
            );

          footerObserver.observe(
            footerElement,
          );
        }
      };

    const frameId =
      window.requestAnimationFrame(
        initializeObservers,
      );

    return () => {
      window.cancelAnimationFrame(
        frameId,
      );

      heroObserver?.disconnect();

      footerObserver?.disconnect();

      removeFallbackScrollListener?.();
    };
  }, [
    pathname,
    heroId,
    footerId,
  ]);

  // ====================================================
  // Contact Items
  // ====================================================

  const contactItems =
    useMemo<
      FloatingTabItem[]
    >(() => {
      const items:
        FloatingTabItem[] = [];

      if (resolvedWhatsapp) {
        const whatsappHref =
          resolvedWhatsapp.startsWith(
            "http://",
          ) ||
          resolvedWhatsapp.startsWith(
            "https://",
          )
            ? resolvedWhatsapp
            : `https://wa.me/${resolvedWhatsapp.replace(
                /\D/g,
                "",
              )}`;

        items.push({
          id: "whatsapp",
          label: "WhatsApp",
          value:
            resolvedWhatsapp,
          href:
            whatsappHref,
          icon:
            <FaWhatsapp />,
          external: true,

          accentClassName:
            "bg-[#25D366]",

          iconClassName:
            "text-[#25D366] group-hover/tab:bg-[#25D366]/12 group-hover/tab:text-[#1FAE54]",
        });
      }

      if (resolvedPhone) {
        items.push({
          id: "phone",
          label: "Call Us",
          value:
            resolvedPhone,

          href: `tel:${resolvedPhone.replace(
            /[^\d+]/g,
            "",
          )}`,

          icon:
            <HiOutlinePhone />,

          accentClassName:
            "bg-[#2F6FAE]",

          iconClassName:
            "text-[#2F6FAE] group-hover/tab:bg-[#2F6FAE]/12 group-hover/tab:text-[#24598F]",
        });
      }

      if (resolvedEmail) {
        items.push({
          id: "email",
          label: "Email Us",
          value:
            resolvedEmail,

          href: `mailto:${resolvedEmail}`,

          icon:
            <HiOutlineMail />,

          accentClassName:
            "bg-[#8A3653]",

          iconClassName:
            "text-[#8A3653] group-hover/tab:bg-[#8A3653]/12 group-hover/tab:text-[#743046]",
        });
      }

      return items;
    }, [
      resolvedEmail,
      resolvedPhone,
      resolvedWhatsapp,
    ]);

  // ====================================================
  // Visibility
  // ====================================================

  const isVisible =
    showAfterHero &&
    !hideNearFooter &&
    contactItems.length > 0;

  // ====================================================
  // Render
  // ====================================================

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          key="floating-contact-tabs"
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
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            fixed
            left-3
            top-1/2
            z-60
            hidden
            -translate-y-1/2
            lg:block
          "
        >
          <div className="relative">
            {/* Soft Blue Glass Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-5
                -z-10
                rounded-[30px]
                bg-[#4B8FD8]/10
                blur-2xl
              "
            />

            {/* Main Glass Container */}
            <div
              className="
                relative
                overflow-visible
                rounded-[20px]
                border
                border-[#6F9FD1]/45
                bg-linear-to-b
                from-[#EEF7FF]/82
                via-[#E3F1FF]/72
                to-[#D8EBFC]/76
                p-1.5
                shadow-[0_14px_34px_rgba(31,83,140,0.17)]
                ring-1
                ring-white/50
                backdrop-blur-2xl
                backdrop-saturate-150
              "
            >
              {/* Top Glass Reflection */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-2
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white/95
                  to-transparent
                "
              />

              {/* Left Glass Reflection */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-3
                  left-0
                  w-px
                  bg-linear-to-b
                  from-transparent
                  via-white/85
                  to-transparent
                "
              />

              {/* Inner Glass Layer */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-1
                  rounded-[16px]
                  bg-linear-to-br
                  from-white/45
                  via-white/12
                  to-[#6FA8DC]/5
                "
              />

              <div className="relative flex flex-col">
                {contactItems.map(
                  (
                    item,
                    index,
                  ) => (
                    <motion.div
                      key={
                        item.id
                      }
                      initial={{
                        opacity: 0,
                        x: -16,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.08 +
                          index *
                            0.07,
                        duration:
                          0.35,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="relative"
                    >
                      <a
                        href={
                          item.href
                        }
                        target={
                          item.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={
                          item.label
                        }
                        className="
                          group/tab
                          relative
                          flex
                          h-12.5
                          w-12.5
                          items-center
                          justify-center
                          rounded-[15px]
                          outline-none
                          transition-all
                          duration-300
                          ease-out
                          hover:bg-white/55
                          hover:shadow-[0_8px_22px_rgba(31,83,140,0.13)]
                          focus-visible:bg-white/60
                          focus-visible:ring-2
                          focus-visible:ring-[#3B78B5]/25
                        "
                      >
                        {/* Icon Tile */}
                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-[11px]
                            border
                            border-white/85
                            bg-white/76
                            text-[19px]
                            shadow-[0_5px_15px_rgba(31,83,140,0.12)]
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            ease-out
                            group-hover/tab:scale-[1.06]
                            group-hover/tab:border-white
                            group-hover/tab:bg-white/94
                            group-hover/tab:shadow-[0_7px_18px_rgba(31,83,140,0.15)]
                            ${item.iconClassName}
                          `}
                        >
                          {
                            item.icon
                          }
                        </span>

                        {/* Accent Line */}
                        <span
                          aria-hidden="true"
                          className={`
                            absolute
                            left-15.5
                            top-1/2
                            h-7
                            w-0.75
                            -translate-y-1/2
                            scale-y-0
                            rounded-full
                            opacity-0
                            transition-all
                            duration-300
                            group-hover/tab:scale-y-100
                            group-hover/tab:opacity-100
                            ${item.accentClassName}
                          `}
                        />

                        {/* Tooltip */}
                        <span
                          className="
                            pointer-events-none
                            absolute
                            left-17.5
                            top-1/2
                            min-w-max
                            -translate-x-2
                            -translate-y-1/2
                            rounded-xl
                            border
                            border-white/25
                            bg-[#173F70]/92
                            px-3.5
                            py-2.5
                            opacity-0
                            shadow-[0_14px_34px_rgba(15,45,82,0.22)]
                            backdrop-blur-2xl
                            transition-all
                            duration-300
                            ease-out
                            group-hover/tab:translate-x-0
                            group-hover/tab:opacity-100
                            group-focus-visible/tab:translate-x-0
                            group-focus-visible/tab:opacity-100
                          "
                        >
                          {/* Tooltip Arrow */}
                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              -left-1.5
                              top-1/2
                              h-3
                              w-3
                              -translate-y-1/2
                              rotate-45
                              bg-[#173F70]
                            "
                          />

                          <span className="relative block">
                            <span
                              className="
                                block
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-white/60
                              "
                            >
                              {
                                item.label
                              }
                            </span>

                            <span
                              className="
                                mt-1
                                block
                                max-w-55
                                truncate
                                text-xs
                                font-semibold
                                tracking-[0.01em]
                                text-white
                              "
                            >
                              {
                                item.value
                              }
                            </span>
                          </span>
                        </span>
                      </a>

                      {/* Separator */}
                      {index <
                        contactItems.length -
                          1 && (
                        <div
                          aria-hidden="true"
                          className="
                            mx-auto
                            h-px
                            w-6
                            bg-linear-to-r
                            from-transparent
                            via-[#315F91]/15
                            to-transparent
                          "
                        />
                      )}
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default FloatingTabs;