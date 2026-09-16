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
  `At Loaloat Shatt Al-Arab (LSA), we are a private Iraqi EPC contractor and supplier headquartered in Basra, supporting major energy and infrastructure projects across Iraq with strong local capabilities and nationwide mobilization.`,

  `We specialize in pipeline construction, hot tapping under pressure, civil and mechanical works, electrical and instrumentation systems, and full EPC execution. With our owned equipment fleet and certified management systems, we maintain high standards of safety, quality, and reliability.`,

  `Our integrated approach combines engineering expertise, advanced technologies, and strict HSE and QA/QC oversight, enabling LSA to support SOC and global oil majors while delivering projects on time, within budget, and to high performance standards.`,
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