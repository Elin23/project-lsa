import { Link } from "react-router-dom";
import { footerData } from "../../../data/footerData";
// import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-02 text-white">
      <div className="mx-auto max-w-[1920px] px-container pt-[72px] pb-8">
        <div className="grid grid-cols-1 gap-12 lg-custom:grid-cols-4">
          <div>
            <Link to="/">
              {/* <img src={logo} alt="LSA Logo" className="mb-8 h-[55px] w-auto" /> */}
            </Link>

            <p className="text-sm leading-6 text-white/60 lg-custom:max-w-[260px]">
              {footerData.company.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {footerData.socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className={`
                      flex h-10 w-10 items-center justify-center
                      rounded-full border border-white/20
                      text-white transition-all duration-300
                      hover:scale-105
                      ${social.hoverClass}
                    `}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-red-01"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Services</h3>

            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-red-01"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Contact</h3>

            <ul className="space-y-4">
              {footerData.contact.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      size={18}
                      className="mt-0.5 shrink-0 text-red-01"
                    />

                    <span className="text-sm leading-6 text-white/60">
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/60">
              {footerData.company.copyright}
            </p>

            <div className="flex items-center gap-8">
              {footerData.bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-xs text-white/60 transition-all duration-300 hover:text-red-01"
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