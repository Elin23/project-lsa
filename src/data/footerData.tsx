import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export const footerData = {
    company: {
        description:
            "Loaloat Shatt Al-Arab Company provides world-class EPC, civil, and pipeline engineering services across Iraq.",

        copyright: `© ${new Date().getFullYear()} Loaloat Shatt Al-Arab Company (LSA). All rights reserved.`,
    },

    quickLinks: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Projects", path: "/projects" },
        { label: "Careers", path: "/careers" },
    ],

    services: [
        { label: "EPC Solutions", path: "/services/epc-solutions" },
        { label: "Pipeline Construction", path: "/services/pipeline-construction" },
        { label: "Hot Tapping", path: "/services/hot-tapping" },
        { label: "Civil Engineering", path: "/services/civil-engineering" },
        { label: "Heavy Equipment", path: "/equipment" },
    ],

    contact: [
        {
            icon: MapPin,
            value: "Basra Headquarters, Al-Jazaer District, Iraq",
        },
        {
            icon: Phone,
            value: [
                "+964 7812180251",
                "+964 7803079440",
                "+964 7717604634",
                "+964 7704780616",
            ],
        },
        {
            icon: Mail,
            value: "info@lsa.com",
        },
    ],

    socialLinks: [
        {
            label: "Facebook",
            url: "#",
            icon: FaFacebookF,
            hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2]",
        },
        {
            label: "Instagram",
            url: "#",
            icon: FaInstagram,
            hoverClass: "hover:bg-[#E1306C] hover:border-[#E1306C]",
        },
        {
            label: "LinkedIn",
            url: "#",
            icon: FaLinkedinIn,
            hoverClass: "hover:bg-[#0077B5] hover:border-[#0077B5]",
        },
    ],

    bottomLinks: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
};