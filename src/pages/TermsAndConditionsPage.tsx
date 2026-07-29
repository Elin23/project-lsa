import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUp,
  Ban,
  Building2,
  CheckCircle2,
  ChevronRight,
  Copyright,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";

interface TermsSection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof FileText;
  content: React.ReactNode;
}

const navigationItems = [
  {
    id: "acceptance",
    label: "Acceptance of Terms",
  },
  {
    id: "website-use",
    label: "Website Use",
  },
  {
    id: "services-information",
    label: "Services Information",
  },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
  },
  {
    id: "user-submissions",
    label: "User Submissions",
  },
  {
    id: "prohibited-conduct",
    label: "Prohibited Conduct",
  },
  {
    id: "third-party-links",
    label: "Third-Party Links",
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
  },
  {
    id: "liability",
    label: "Limitation of Liability",
  },
  {
    id: "indemnification",
    label: "Indemnification",
  },
  {
    id: "governing-law",
    label: "Governing Law",
  },
  {
    id: "changes",
    label: "Changes to Terms",
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

const termsSections: TermsSection[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    description:
      "By accessing or using the LSA website, you agree to comply with these Terms and Conditions.",
    icon: FileCheck2,
    content: (
      <>
        <p>
          These Terms and Conditions govern your access to and use of the LSA
          website, including its pages, content, forms, features, and available
          digital services.
        </p>

        <p>
          By visiting, browsing, or using this website, you confirm that you
          have read, understood, and agreed to be bound by these Terms and
          Conditions.
        </p>

        <p>
          If you do not agree with any part of these terms, you should stop
          using the website immediately.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    number: "02",
    title: "Use of the Website",
    description:
      "The website may only be used for lawful, legitimate, and appropriate purposes.",
    icon: UserCheck,
    content: (
      <>
        <p>
          You may use this website to learn about LSA, review our services and
          projects, submit inquiries, explore career opportunities, and
          communicate with our team.
        </p>

        <p>When using the website, you agree to:</p>

        <ul>
          <li>Use the website only for lawful purposes.</li>
          <li>Provide accurate and complete information when submitting forms.</li>
          <li>
            Avoid activities that could interfere with the operation, security,
            or availability of the website.
          </li>
          <li>
            Respect all applicable intellectual property, privacy, and legal
            rights.
          </li>
          <li>
            Refrain from attempting to gain unauthorized access to website
            systems, servers, accounts, or data.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "services-information",
    number: "03",
    title: "Services and Project Information",
    description:
      "Website content is provided for general informational and business presentation purposes.",
    icon: Wrench,
    content: (
      <>
        <p>
          Information about LSA services, capabilities, equipment, projects,
          sectors, and technical experience is provided for general
          informational purposes.
        </p>

        <p>
          Website content does not constitute a binding commercial offer,
          technical proposal, engineering recommendation, contractual
          commitment, or guarantee of availability.
        </p>

        <p>
          The scope, pricing, schedule, specifications, responsibilities, and
          commercial terms of any project or service will be governed by a
          separate written agreement signed by the relevant parties.
        </p>

        <p>
          LSA may update, modify, suspend, or discontinue any service or website
          content without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "Intellectual Property Rights",
    description:
      "Website content and branding are protected by applicable intellectual property laws.",
    icon: Copyright,
    content: (
      <>
        <p>
          Unless otherwise stated, all content available on this website is
          owned by, licensed to, or lawfully used by LSA.
        </p>

        <p>Protected content may include:</p>

        <ul>
          <li>Company names, logos, trademarks, and visual identity.</li>
          <li>Website design, layout, graphics, icons, and interface elements.</li>
          <li>Text, descriptions, technical content, and written materials.</li>
          <li>Project photographs, videos, illustrations, and documents.</li>
          <li>
            Service presentations, diagrams, data, and downloadable resources.
          </li>
        </ul>

        <p>
          You may not copy, reproduce, distribute, modify, republish, display,
          sell, license, or commercially exploit website content without prior
          written permission from LSA or the relevant rights holder.
        </p>
      </>
    ),
  },
  {
    id: "user-submissions",
    number: "05",
    title: "User Submissions",
    description:
      "Information submitted through website forms must be lawful, accurate, and appropriate.",
    icon: Handshake,
    content: (
      <>
        <p>
          The website may allow users to submit contact requests, business
          inquiries, quotation requests, employment applications, documents,
          messages, or other information.
        </p>

        <p>By submitting information, you confirm that:</p>

        <ul>
          <li>The submitted information is accurate and not misleading.</li>
          <li>
            You have the legal right to provide any information, file, or
            document included in the submission.
          </li>
          <li>
            The submission does not violate the rights of another person or
            organization.
          </li>
          <li>
            The submission does not contain malware, harmful code, unlawful
            content, or confidential information you are not authorized to
            disclose.
          </li>
        </ul>

        <p>
          Submission of an inquiry, application, or document does not create a
          contractual, employment, agency, partnership, or client relationship
          with LSA.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-conduct",
    number: "06",
    title: "Prohibited Conduct",
    description:
      "Users must not misuse the website or engage in activities that may cause harm.",
    icon: Ban,
    content: (
      <>
        <p>You must not use the website to:</p>

        <ul>
          <li>Commit, encourage, or assist any unlawful activity.</li>
          <li>
            Introduce viruses, malicious software, automated scripts, or harmful
            code.
          </li>
          <li>
            Attempt to access restricted areas, servers, databases, or accounts.
          </li>
          <li>
            Interfere with website performance, security systems, or user
            access.
          </li>
          <li>
            Collect website data using scraping, crawling, or automated tools
            without authorization.
          </li>
          <li>
            Misrepresent your identity, company, authority, or relationship with
            another party.
          </li>
          <li>
            Use website content for misleading, fraudulent, defamatory, or
            unauthorized commercial purposes.
          </li>
        </ul>

        <p>
          LSA may restrict, suspend, or block access where website misuse or a
          security risk is suspected.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    number: "07",
    title: "Third-Party Links",
    description:
      "External links are provided for convenience and remain subject to third-party terms.",
    icon: Globe2,
    content: (
      <>
        <p>
          The website may contain links to external websites, social media
          platforms, maps, service providers, or other third-party resources.
        </p>

        <p>
          These links are provided for convenience and do not necessarily imply
          endorsement, approval, partnership, or responsibility by LSA.
        </p>

        <p>
          LSA does not control and is not responsible for the availability,
          content, accuracy, security, privacy practices, or terms of external
          websites.
        </p>

        <p>
          Accessing a third-party website is done at your own discretion and
          risk.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    number: "08",
    title: "Website Disclaimer",
    description:
      "The website and its content are provided without guarantees regarding uninterrupted access or complete accuracy.",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          LSA makes reasonable efforts to keep website content accurate,
          relevant, and up to date. However, information may occasionally be
          incomplete, outdated, unavailable, or contain technical errors.
        </p>

        <p>
          The website is provided on an “as available” basis without warranties
          of any kind, whether express or implied, to the extent permitted by
          applicable law.
        </p>

        <p>LSA does not guarantee that:</p>

        <ul>
          <li>The website will always be available or uninterrupted.</li>
          <li>The website will be free from errors or security risks.</li>
          <li>All website content will always be complete or current.</li>
          <li>
            Any inquiry, application, proposal, or communication will result in
            a business opportunity or contractual relationship.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    number: "09",
    title: "Limitation of Liability",
    description:
      "LSA is not responsible for losses resulting from improper reliance on or use of the website.",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, LSA and its
          directors, employees, representatives, contractors, and affiliates
          will not be liable for indirect, incidental, special, consequential,
          or business-related losses arising from website use.
        </p>

        <p>Such losses may include:</p>

        <ul>
          <li>Loss of profits, revenue, contracts, or business opportunities.</li>
          <li>Loss or corruption of data.</li>
          <li>Business interruption or operational delays.</li>
          <li>
            Damage resulting from reliance on website content or third-party
            links.
          </li>
          <li>
            Loss caused by unauthorized access, malware, service interruption,
            or technical failure.
          </li>
        </ul>

        <p>
          Nothing in these terms excludes liability that cannot lawfully be
          excluded under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "10",
    title: "Indemnification",
    description:
      "Users may be responsible for losses caused by unlawful use or violation of these terms.",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          To the extent permitted by applicable law, you agree to indemnify and
          hold harmless LSA, its employees, directors, representatives, and
          affiliates from claims, losses, damages, liabilities, or expenses
          resulting from:
        </p>

        <ul>
          <li>Your misuse of the website.</li>
          <li>Your violation of these Terms and Conditions.</li>
          <li>Your infringement of another party’s rights.</li>
          <li>
            Any unlawful, inaccurate, harmful, or unauthorized information you
            submit through the website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "11",
    title: "Governing Law and Jurisdiction",
    description:
      "These terms are governed by applicable laws and subject to competent legal jurisdiction.",
    icon: Scale,
    content: (
      <>
        <p>
          These Terms and Conditions shall be governed by and interpreted in
          accordance with the applicable laws of the Republic of Iraq, unless a
          different governing law is required by a binding written agreement.
        </p>

        <p>
          Any dispute relating to the use of this website shall be submitted to
          the competent courts or authorities in Iraq, subject to applicable
          legal requirements.
        </p>

        <p>
          For commercial projects, contracts, tenders, or partnerships, the
          governing law and dispute resolution process stated in the relevant
          signed agreement will apply.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to These Terms",
    description:
      "LSA may update these Terms and Conditions to reflect legal, technical, or operational changes.",
    icon: FileText,
    content: (
      <>
        <p>
          LSA may revise these Terms and Conditions from time to time without
          prior individual notice.
        </p>

        <p>
          Changes may be made to reflect updates to our website, services,
          business practices, legal obligations, security measures, or
          operational requirements.
        </p>

        <p>
          The latest version will be published on this page with an updated
          revision date. Continued use of the website after changes are
          published indicates acceptance of the revised terms.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 600);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#f7f9fc]">
      {/* Hero */}
      <section id="hero" className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071a35] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,86,160,0.42),transparent_38%)]" />

        <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />

        <div aria-hidden="true" className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-red-600/70 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-white">
            <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />

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
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              These terms govern your access to and use of the LSA website,
              including its content, forms, resources, and digital services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
                <FileText size={15} className="text-red-400" />

                Last updated: July 28, 2026
              </div>

              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">
                <Scale size={15} className="text-red-400" />

                Please read before using the website
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,70,0.10)] sm:grid-cols-3">
          <div className="flex items-start gap-4 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <FileCheck2 size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">Terms of Use</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                Use of the website is subject to these conditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <Copyright size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">Protected Content</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                Website content and branding remain legally protected.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 lg:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-01/8 text-blue-01">
              <ShieldCheck size={21} />
            </span>

            <div>
              <h2 className="font-bold text-blue-01">Responsible Access</h2>

              <p className="mt-1 text-sm leading-6 text-muted-blue">
                Users must not misuse or disrupt the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
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
                  Terms Contents
                </h2>
              </div>

              <nav aria-label="Terms and conditions navigation" className="max-h-[calc(100vh-240px)] overflow-y-auto p-3">
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
                  <Building2 size={20} />
                </span>

                <div>
                  <h2 className="font-bold text-blue-01">
                    These terms apply to the public LSA website
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-blue">
                    Project agreements, employment contracts, tenders, purchase
                    orders, and formal commercial arrangements may be governed
                    by separate written terms.
                  </p>
                </div>
              </div>
            </div>

            {termsSections.map((section) => {
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

                        <span className="absolute -bottom-2 -right-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-[8px] font-extrabold text-white">
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

                  <div className="legal-content space-y-4 px-5 py-6 text-sm leading-7 text-slate-600 sm:px-7 sm:py-7 sm:text-[15px] lg:px-8">
                    {section.content}
                  </div>
                </article>
              );
            })}

            {/* Contact */}
            <article id="contact" className="scroll-mt-32 overflow-hidden rounded-2xl bg-[#081c38] text-white shadow-[0_22px_65px_rgba(8,28,56,0.18)]">
              <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
                <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

                <div aria-hidden="true" className="absolute right-8 top-8 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Mail size={22} />
                  </div>

                  <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                    Questions About These Terms
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
                    For questions regarding these Terms and Conditions or the
                    use of the LSA website, please contact our team.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="mailto:info@lsa-iraq.com"
                      className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-01"
                    >
                      <Mail size={17} />

                      info@lsa-iraq.com

                      <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <Link
                      to="/contact"
                      className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/12"
                    >
                      Contact Page

                      <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <p className="px-2 text-center text-xs leading-6 text-slate-400">
              These Terms and Conditions should be reviewed and approved by the
              company’s legal adviser before publication.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}