import {
  FileText,
  SearchCheck,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ApplicationProcessStep {
  id: number;
  step: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
}

export const applicationProcessData: ApplicationProcessStep[] = [
  {
    id: 1,
    step: "STEP 01",
    title: "Application",
    shortDescription: "Submit CV",
    description:
      "Submit your professional CV and portfolio through our digital portal. Ensure your technical certifications are highlighted.",
    icon: FileText,
  },
  {
    id: 2,
    step: "STEP 02",
    title: "Technical Review",
    shortDescription: "Engineering Review",
    description:
      "Our engineering department heads evaluate your technical expertise against project requirements and industry standards.",
    icon: SearchCheck,
  },
  {
    id: 3,
    step: "STEP 03",
    title: "Interview Cycle",
    shortDescription: "HR & Technical",
    description:
      "Engage in behavioral and technical interviews with HR and key stakeholders to discuss your alignment with LSA culture.",
    icon: Users,
  },
  {
    id: 4,
    step: "STEP 04",
    title: "Onboarding",
    shortDescription: "Welcome to LSA",
    description:
      "Welcome to the team! Undergo rigorous HSE induction and project orientation as you begin your journey with us.",
    icon: Rocket,
  },
];