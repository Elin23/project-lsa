import type { ReactNode } from "react";
import {
  Building2,
  Cookie,
  Database,
  FileText,
  Globe2,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export interface PrivacyNavigationItem {
  id: string;
  label: string;
}

export interface PrivacyPolicySection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  content: ReactNode;
}

export const privacyNavigationItems: readonly PrivacyNavigationItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies", label: "Cookies" },
  { id: "sharing-information", label: "Information Sharing" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "external-links", label: "External Links" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact", label: "Contact Us" },
];

export const privacyPolicySections: readonly PrivacyPolicySection[] = [
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