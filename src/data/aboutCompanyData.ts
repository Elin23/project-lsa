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
    `Loaloat Shatt Al-Arab Company for General Contracting (LSA) is a private Iraqi contractor and supplier based in Basra. The company was formed to support the growing needs of the petroleum industry in Southern Iraq by mobilizing experienced personnel, specialized equipment, and integrated project resources.`,

    `LSA delivers EPC and multidisciplinary services covering pipeline installation, process piping, hot tapping, mechanical and structural construction, civil works, electrical and instrumentation activities, pipeline integrity support, storage tank works, cathodic protection, coatings, and specialized road-crossing solutions.`,

    `Our technical teams work closely with HSE and QA/QC management throughout every stage of execution. This integrated approach enables LSA to deliver reliable projects safely, on schedule, and within budget while maintaining professional standards across clients, suppliers, subcontractors, and project partners.`,
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