import type { ReactNode } from "react";
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  Copyright,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Scale,
  ShieldCheck,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface TermsNavigationItem {
  id: string;
  label: string;
}

export interface TermsSection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  content: ReactNode;
}

export const termsNavigationItems: readonly TermsNavigationItem[] = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "website-use", label: "Website Use" },
  { id: "services-information", label: "Services Information" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "user-submissions", label: "User Submissions" },
  { id: "prohibited-conduct", label: "Prohibited Conduct" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact Us" },
];

export const termsSections: readonly TermsSection[] = [
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