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
    title: "ISO 9001:2015 – Quality Management",
    description:
      "Ensures consistent delivery of EPC, pipeline, and infrastructure projects that meet client and regulatory requirements.",
    icon: BadgeCheck,
    image: iso9001,
  },
  {
    title: "ISO 14001:2015 – Environmental Management",
    description:
      "Demonstrates our commitment to minimizing environmental impact and implementing sustainable practices across all operations.",
    icon: Leaf,
    image: iso14001,
  },
  {
    title: "ISO 45001:2018 – Occupational Health & Safety",
    description:
      "Guarantees safe and healthy workplaces, preventing work‑related injury and ensuring compliance with global HSE standards.",
    icon: ShieldCheck,
    image: iso45001,
  },
  {
    title: "OHSAS 18001:2007 – Safety Assessment",
    description:
      "Further reinforces our dedication to strict safety protocols and continuous improvement in occupational health.",
    icon: Shield,
    image: ohsas18001,
  },
];