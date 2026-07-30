import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  Cookie,
  Database,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

interface PolicySection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  content: React.ReactNode;
}

const navigationItems = [
  {
    id: "introduction",
    label: "Introduction",
  },
  {
    id: "information-we-collect",
    label: "Information We Collect",
  },
  {
    id: "how-we-use-information",
    label: "How We Use Information",
  },
  {
    id: "cookies",
    label: "Cookies",
  },
  {
    id: "sharing-information",
    label: "Information Sharing",
  },
  {
    id: "data-security",
    label: "Data Security",
  },
  {
    id: "data-retention",
    label: "Data Retention",
  },
  {
    id: "your-rights",
    label: "Your Rights",
  },
  {
    id: "external-links",
    label: "External Links",
  },
  {
    id: "policy-updates",
    label: "Policy Updates",
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

const policySections: PolicySection[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    description:
      "This Privacy Policy explains how LSA collects, uses, protects, and manages information when visitors use our website.",
    icon: FileText,
    content: (
      <>
        <p>
          LSA is committed to respecting your privacy and protecting the
          personal information you may provide while visiting or interacting
          with our website.
        </p>

        <p>
          By accessing or using this website, you acknowledge that you have
          read and understood the practices described in this Privacy Policy.
          This policy applies only to information collected through this
          website and related digital communication channels.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    description:
      "We may collect information that you provide directly and technical information generated through your use of the website.",
    icon: Database,
    content: (
      <>
        <p>Information collected through the website may include:</p>

        <ul>
          <li>
            Contact details such as your name, email address, phone number, and
            company name.
          </li>
          <li>
            Information submitted through contact forms, career applications,
            quotation requests, or project inquiries.
          </li>
          <li>
            Documents or files that you voluntarily upload through available
            website forms.
          </li>
          <li>
            Technical information such as browser type, device type, operating
            system, IP address, referral source, and general website activity.
          </li>
          <li>
            Communication records when you contact us through email, telephone,
            or social media channels.
          </li>
        </ul>

        <p>
          We do not intentionally collect sensitive personal information unless
          it is necessary for a specific request and voluntarily provided by
          you.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Your Information",
    description:
      "Collected information is used to respond to inquiries, deliver website services, and improve the user experience.",
    icon: Building2,
    content: (
      <>
        <p>We may use the information we collect to:</p>

        <ul>
          <li>Respond to inquiries, requests, and business communications.</li>
          <li>
            Provide information about our services, projects, capabilities, and
            career opportunities.
          </li>
          <li>
            Review employment applications and communicate with potential
            candidates.
          </li>
          <li>
            Improve the performance, security, accessibility, and usability of
            our website.
          </li>
          <li>
            Analyze website traffic and understand how visitors interact with
            our digital content.
          </li>
          <li>
            Prevent misuse, unauthorized access, fraud, or other security
            threats.
          </li>
          <li>
            Comply with applicable legal, regulatory, and contractual
            obligations.
          </li>
        </ul>

        <p>
          We will not use your personal information for purposes that are
          materially different from those described in this policy without an
          appropriate legal basis or your consent where required.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies and Similar Technologies",
    description:
      "Cookies may be used to support website functionality, analytics, performance, and user preferences.",
    icon: Cookie,
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to improve
          functionality, remember user preferences, measure website
          performance, and understand visitor interactions.
        </p>

        <p>Cookies used on the website may include:</p>

        <ul>
          <li>
            Essential cookies required for core website functionality and
            security.
          </li>
          <li>
            Performance cookies used to understand how visitors use different
            pages.
          </li>
          <li>
            Preference cookies used to remember certain settings and user
            choices.
          </li>
          <li>
            Analytics cookies used to generate aggregated website usage
            statistics.
          </li>
        </ul>

        <p>
          You can control or disable cookies through your browser settings.
          Disabling certain cookies may affect the functionality or performance
          of some website features.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    number: "05",
    title: "Sharing and Disclosure",
    description:
      "We do not sell personal information and only share it when necessary for legitimate business or legal purposes.",
    icon: UserCheck,
    content: (
      <>
        <p>
          LSA does not sell, rent, or trade personal information collected
          through this website.
        </p>

        <p>Information may be shared with:</p>

        <ul>
          <li>
            Authorized employees who require access to respond to your inquiry
            or process your request.
          </li>
          <li>
            Technology, hosting, analytics, communication, or security service
            providers working on our behalf.
          </li>
          <li>
            Professional advisers, auditors, insurers, or consultants where
            reasonably necessary.
          </li>
          <li>
            Government authorities or regulatory bodies where disclosure is
            required by applicable law.
          </li>
          <li>
            Parties involved in a business restructuring, merger, acquisition,
            or transfer of assets, subject to appropriate protections.
          </li>
        </ul>

        <p>
          Any service provider receiving information is expected to use it only
          for the agreed purpose and apply appropriate confidentiality and
          security measures.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "06",
    title: "Data Security",
    description:
      "Reasonable administrative and technical safeguards are used to protect information against unauthorized access or misuse.",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          We apply reasonable technical, organizational, and administrative
          measures designed to protect personal information against
          unauthorized access, alteration, loss, disclosure, or misuse.
        </p>

        <p>Security measures may include:</p>

        <ul>
          <li>Secure hosting and encrypted website connections.</li>
          <li>Restricted access to information based on operational need.</li>
          <li>Security monitoring and regular software updates.</li>
          <li>Protection against common website attacks and abuse.</li>
          <li>
            Internal procedures for handling and responding to security
            incidents.
          </li>
        </ul>

        <p>
          No digital platform or electronic transmission method can be
          guaranteed to be completely secure. Therefore, while we work to
          protect information, absolute security cannot be guaranteed.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
    description:
      "Information is retained only for as long as necessary to fulfill the purpose for which it was collected.",
    icon: Database,
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary to respond to requests, maintain business records, satisfy
          legal obligations, resolve disputes, and protect our legitimate
          interests.
        </p>

        <p>
          Retention periods may vary depending on the type of information, the
          purpose of collection, contractual requirements, and applicable legal
          obligations.
        </p>

        <p>
          When information is no longer required, it may be securely deleted,
          anonymized, or archived in accordance with applicable record
          management procedures.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: "08",
    title: "Your Privacy Rights",
    description:
      "Depending on applicable laws, users may have rights related to accessing, correcting, or deleting personal information.",
    icon: Scale,
    content: (
      <>
        <p>
          Depending on your location and applicable data protection laws, you
          may have the right to:
        </p>

        <ul>
          <li>Request access to personal information held about you.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>
            Request deletion of information where there is no lawful reason to
            retain it.
          </li>
          <li>
            Object to or request restriction of certain information processing.
          </li>
          <li>Withdraw consent where processing is based on your consent.</li>
          <li>
            Request a copy of certain information in a commonly used format.
          </li>
        </ul>

        <p>
          Requests may be subject to identity verification and applicable legal
          limitations. We will respond within a reasonable period and in
          accordance with applicable requirements.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    number: "09",
    title: "External Links",
    description:
      "Our website may include links to third-party websites that operate under their own privacy practices.",
    icon: Globe2,
    content: (
      <>
        <p>
          This website may contain links to external websites, social media
          platforms, or third-party services.
        </p>

        <p>
          LSA does not control the privacy, security, content, or data
          collection practices of those external websites. Visiting an external
          link is subject to the privacy policy and terms of the relevant third
          party.
        </p>

        <p>
          We recommend reviewing the privacy notice of each external website
          before providing personal information.
        </p>
      </>
    ),
  },
  {
    id: "policy-updates",
    number: "10",
    title: "Updates to This Policy",
    description:
      "This Privacy Policy may be revised periodically to reflect legal, technical, or operational changes.",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our website, business practices, technology, security measures, or
          applicable requirements.
        </p>

        <p>
          The latest version will be published on this page with an updated
          revision date. We encourage visitors to review this policy
          periodically.
        </p>

        <p>
          Continued use of the website after a revised policy is published
          indicates acknowledgment of the updated terms.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navigationItems
        .map((item) => document.getElementById(item.id))
        .filter((element): element is HTMLElement => Boolean(element));

      const currentSection = [...sectionElements]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 180);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerOffset = 120;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#f7f9fc]">
      {/* Hero */}
      <section
        id="hero"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071a35] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,86,160,0.42),transparent_38%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -top-32 -right-24 h-96 w-96 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute -top-20 -right-12 h-72 w-72 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-red-600/70 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Home
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-red-400">
                Legal Information
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              This policy explains how LSA collects, uses, protects, and manages
              information when you visit our website or communicate with us
              through our digital channels.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
                <FileText size={15} className="text-red-400" />

                Last updated: July 28, 2026
              </div>

              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
                <ShieldCheck size={15} className="text-red-400" />

                Your privacy matters to us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy summary */}
      <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,70,0.10)] sm:grid-cols-3">
          <div className="flex items-start gap-4 border-b border-slate-200 p-6 sm:border-r sm:border-b-0 lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <LockKeyhole size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">Secure Processing</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                Reasonable security measures protect submitted information.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-slate-200 p-6 sm:border-r sm:border-b-0 lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <UserCheck size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">No Data Selling</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                We do not sell or trade personal information.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <Scale size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">Privacy Rights</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                You may request access, correction, or deletion where applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,35,70,0.06)]">
              <div className="border-b border-slate-200 px-5 py-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
                  On this page
                </span>

                <h2 className="mt-1 text-lg font-bold text-blue-01">
                  Policy Contents
                </h2>
              </div>

              <nav
                aria-label="Privacy policy navigation"
                className="max-h-[calc(100vh-240px)] overflow-y-auto p-3"
              >
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-blue-01 text-white shadow-sm"
                          : "text-slate-500 hover:bg-slate-50 hover:text-blue-01"
                      }`}
                    >
                      <span>{item.label}</span>

                      <ChevronRight
                        size={15}
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive
                            ? "translate-x-0 text-red-400"
                            : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-red-600"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-01/10 bg-blue-01/[0.035] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-01 text-white">
                  <ShieldCheck size={20} />
                </span>

                <div>
                  <h2 className="font-bold text-blue-01">
                    Your privacy and trust are important to LSA
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-blue">
                    This page provides general information about our website
                    privacy practices. Specific contractual, employment, or
                    project-related data may be subject to additional terms and
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,70,0.055)]"
                >
                  <div className="border-b border-slate-200 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="relative shrink-0">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-01 text-white shadow-lg shadow-blue-01/15">
                          <Icon size={22} />
                        </span>

                        <span className="absolute -right-2 -bottom-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-[8px] font-extrabold text-white">
                          {section.number}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-blue-01 sm:text-2xl">
                          {section.title}
                        </h2>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-blue sm:text-[15px]">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="policy-content space-y-4 px-5 py-6 text-sm leading-7 text-slate-600 sm:px-7 sm:py-7 sm:text-[15px] lg:px-8">
                    {section.content}
                  </div>
                </article>
              );
            })}

            {/* Contact */}
            <article
              id="contact"
              className="scroll-mt-32 overflow-hidden rounded-2xl bg-[#081c38] text-white shadow-[0_22px_65px_rgba(8,28,56,0.18)]"
            >
              <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute top-8 right-8 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl"
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Mail size={22} />
                  </div>

                  <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                    Privacy Questions or Requests
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
                    For questions about this Privacy Policy or requests relating
                    to personal information submitted through the LSA website,
                    please contact our team.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="mailto:info@lsa-iraq.com"
                      className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-01"
                    >
                      <Mail size={17} />

                      info@lsa-iraq.com

                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>

                    <Link
                      to="/contact"
                      className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/12"
                    >
                      Contact Page

                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <p className="px-2 text-center text-xs leading-6 text-slate-400">
              This privacy policy template should be reviewed and approved by
              the company’s legal adviser before publication.
            </p>
          </div>
        </div>
      </section>

      

    </main>
  );
}