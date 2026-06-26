export type JobStatus = "open" | "closed";
export type JobType = "Full-Time" | "Part-Time" | "Contract";

export interface CareerJob {
  id: number;
  title: string;
  location: string;
  type: JobType;
  department: string;
  status: JobStatus;
  postedAt: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const careersData: CareerJob[] = [
  {
    id: 1,
    title: "Senior Pipeline Engineer",
    location: "Basra, Iraq",
    type: "Full-Time",
    department: "Engineering",
    status: "open",
    postedAt: "Posted 3 days ago",
    overview:
      "Lead pipeline engineering activities for oil and gas infrastructure projects, ensuring safe, efficient, and high-quality execution.",
    responsibilities: [
      "Prepare and review pipeline engineering documents.",
      "Coordinate with construction and site teams.",
      "Ensure compliance with project specifications and standards.",
      "Support testing, commissioning, and handover activities.",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering or related field.",
      "Minimum 5 years of pipeline project experience.",
      "Knowledge of oil and gas standards and safety practices.",
      "Strong communication and problem-solving skills.",
    ],
  },
  {
    id: 2,
    title: "HSE Manager",
    location: "Basra, Iraq",
    type: "Part-Time",
    department: "Health & Safety",
    status: "open",
    postedAt: "Posted 1 week ago",
    overview:
      "Manage HSE activities across project sites and ensure compliance with company safety policies and client requirements.",
    responsibilities: [
      "Develop and implement HSE plans and procedures.",
      "Conduct site inspections and risk assessments.",
      "Prepare safety reports and incident investigations.",
      "Lead safety meetings and awareness sessions.",
    ],
    requirements: [
      "Bachelor's degree or HSE-related certification.",
      "Minimum 4 years of HSE experience.",
      "Knowledge of construction and oilfield safety standards.",
      "Ability to lead teams and communicate effectively.",
    ],
  },
  {
    id: 3,
    title: "EPC Project Coordinator",
    location: "Basra, Iraq",
    type: "Full-Time",
    department: "Project Management",
    status: "closed",
    postedAt: "Closed",
    overview:
      "Coordinate EPC project activities between engineering, procurement, construction, and client representatives.",
    responsibilities: [
      "Follow up project schedules and deliverables.",
      "Coordinate between internal departments and site teams.",
      "Prepare progress reports and meeting minutes.",
      "Support project documentation and communication.",
    ],
    requirements: [
      "Bachelor's degree in Engineering or Project Management.",
      "Experience in EPC projects is preferred.",
      "Good knowledge of project coordination workflows.",
      "Strong organizational and reporting skills.",
    ],
  },
    {
    id: 4,
    title: "EPC Project Coordinator",
    location: "Basra, Iraq",
    type: "Full-Time",
    department: "Project Management",
    status: "closed",
    postedAt: "Closed",
    overview:
      "Coordinate EPC project activities between engineering, procurement, construction, and client representatives.",
    responsibilities: [
      "Follow up project schedules and deliverables.",
      "Coordinate between internal departments and site teams.",
      "Prepare progress reports and meeting minutes.",
      "Support project documentation and communication.",
    ],
    requirements: [
      "Bachelor's degree in Engineering or Project Management.",
      "Experience in EPC projects is preferred.",
      "Good knowledge of project coordination workflows.",
      "Strong organizational and reporting skills.",
    ],
  },
];