import type { ElementType } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo2.webp";
import { footerData } from "../../data/footerData";

export interface FooterTitleProps {
  title: string;
}

const FooterTitle = ({ title }: FooterTitleProps) => {
  return (
    <div>
      <h3 className="text-base font-bold tracking-[-0.01em] text-white sm:text-lg">
        {title}
      </h3>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-0.5 w-8 rounded-full bg-red-01" />
        <span className="h-0.5 w-2 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

/**
 * Footer Component
 * Primary site footer containing company logo, social channels, navigation links, and dynamic copyright year.
 * Formatted and optimized for strict accessibility, clean DOM structure, and single-line Tailwind rules.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#06162d] text-white">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-107.5 w-107.5 rounded-full border border-white/4" />
        <div className="absolute -right-24 -top-24 h-75 w-75 rounded-full border border-white/5" />
        <div className="absolute right-[12%] top-[18%] h-52 w-52 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-red-600/4 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[70px_70px] mask-[linear-gradient(to_bottom,black,transparent_78%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-container">
        {/* Main footer layout */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.25fr_0.72fr_0.95fr_1.25fr] lg:gap-x-10 lg:gap-y-0 lg:py-18 xl:grid-cols-[1.35fr_0.7fr_0.95fr_1.35fr] xl:gap-x-16">
          {/* Company Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="Go to home page" className="inline-block">
              <img src={logo} alt="LSA Logo" className="w-28 object-contain sm:w-32" />
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55 lg:max-w-sm">
              {footerData.company.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {footerData.socialLinks.map((social) => {
                const Icon = social.icon as ElementType;
                const isExternal = social.url.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    title={social.label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`group flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.035] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-white ${social.hoverClass}`}
                  >
                    <Icon size={17} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <FooterTitle title="Quick Links" />
            <ul className="mt-7 space-y-3.5">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-2 shrink-0 text-red-01 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <FooterTitle title="Our Services" />
            <ul className="mt-7 space-y-3.5">
              {footerData.services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-2 shrink-0 text-red-01 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="group mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-red-01 transition-colors duration-300 hover:text-white"
            >
              View all services
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Contact Column */}
          <div>
            <FooterTitle title="Contact" />
            <ul className="mt-7 space-y-4">
              {footerData.contact.map((item, index) => {
                const Icon = item.icon as ElementType;

                return (
                  <li key={`contact-item-${index}`} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-red-01 transition-all duration-300 hover:bg-red-01 hover:text-white">
                      <Icon size={16} />
                    </span>

                    <div className="text-sm leading-6 text-white/55">
                      {Array.isArray(item.value) ? (
                        item.value.map((value) => <div key={value}>{value}</div>)
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-white/40">
              {footerData.company.copyright || `© ${currentYear} LSA. All rights reserved.`}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {footerData.bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="relative text-xs font-medium text-white/40 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-red-01 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;