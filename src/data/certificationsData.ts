import { BadgeCheck, Leaf, ShieldCheck, Shield } from "lucide-react";

import iso9001 from "../assets/imgs/certificates/iso9001.png";
import iso14001 from "../assets/imgs/certificates/iso9001.png";
import iso45001 from "../assets/imgs/certificates/iso9001.png";
import ohsas18001 from "../assets/imgs/certificates/iso9001.png";

export const certificationStats = [
  {
    value: "4",
    label: "International Certifications",
    color: "text-[#1f3f93]",
  },
  {
    value: "2016",
    label: "Certified Since",
    color: "text-red-600",
  },
  {
    value: "0",
    label: "HSE Incidents",
    color: "text-[#1f3f93]",
  },
];

export const certificationsData = [
  {
    title: "ISO 9001:2015",
    description:
      "Quality Management Systems certification, ensuring consistent delivery of products and services that meet customer and regulatory requirements.",
    icon: BadgeCheck,
    image: iso9001,
  },
  {
    title: "ISO 14001:2015",
    description:
      "Environmental Management Systems certification, demonstrating our commitment to minimizing environmental impact across all operations.",
    icon: Leaf,
    image: iso14001,
  },
  {
    title: "ISO 45001:2018",
    description:
      "Occupational Health and Safety Management certification, providing safe and healthy workplaces by preventing work-related injury and ill health.",
    icon: ShieldCheck,
    image: iso45001,
  },
  {
    title: "OHSAS 18001:2007",
    description:
      "Occupational Health and Safety Assessment Series certification, further reinforcing our dedication to strict safety protocols.",
    icon: Shield,
    image: ohsas18001,
  },
];