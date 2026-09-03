import {
  BadgeCheck,
  HardHat,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface AboutCompanyHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutCompanyContent = {
  eyebrow: "Who We Are",

  title: "About LSA",

  description:
    "Delivering integrated engineering and construction capabilities across Southern Iraq’s oil and gas sector.",

  paragraphs: [
  `At Loaloat Shatt Al-Arab (LSA), we are a private Iraqi EPC contractor and supplier headquartered in Basra, dedicated to powering Iraq’s energy future. We support major energy and infrastructure projects across Iraq with strong local capabilities and nationwide mobilization capacity.`,

  `We specialize in pipeline construction, hot tapping under pressure, civil and mechanical works, electrical and instrumentation systems, and full EPC execution. With a fully owned equipment fleet and certified management systems including ISO 9001, ISO 14001, ISO 45001, and OHSAS 18001, we maintain high standards of safety, quality, and reliability.`,

  `Our integrated approach combines engineering expertise, advanced technologies, and strict HSE and QA/QC oversight throughout every project stage. This enables LSA to support SOC and global oil majors across Iraq’s major oil fields while delivering projects on time, within budget, and with uncompromising performance.`,
],

  highlights: [
    {
      title: "Integrated EPC Execution",
      description:
        "Engineering, procurement, construction, installation, and project support coordinated through one delivery structure.",
      icon: Workflow,
    },
    {
      title: "Safety & Quality Driven",
      description:
        "Technical execution supported by dedicated HSE and QA/QC management across project activities.",
      icon: HardHat,
    },
    {
      title: "Certified Management Systems",
      description:
        "Operations supported by internationally recognized quality, environmental, and occupational safety systems.",
      icon: BadgeCheck,
    },
  ] satisfies AboutCompanyHighlight[],
};