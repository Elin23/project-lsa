// operationalRangesData.ts
export interface TableRow {
    parameter: string;
    standardCapacity: string;
    customEngineered: string;
}

export interface SideNote {
    id: number;
    text: string;
    iconSrc: string;
    href?: string;
}

export interface OperationalRangesData {
    title: string;
    description: string;
    sideNotes: SideNote[];
    tableHeaders: [string, string, string];
    tableRows: TableRow[];
}
import icon1 from '../assets/icons/icon1.svg'
import icon2 from '../assets/icons/Icon2.svg'
import icon3 from '../assets/icons/icon3.svg'

export const operationalRangesData: OperationalRangesData = {
    title: "Operational Ranges",
    description:
        "Our equipment fleet is capable of handling extreme conditions across various pipeline media, ensuring reliable intervention regardless of the environment.",
    sideNotes: [
        {
            id: 1,
            text: "Crude Oil & Refined Products",
            iconSrc: icon1,
        },
        {
            id: 2,
            text: "Natural Gas & NGLs",
            iconSrc: icon2,
        },
        {
            id: 3,
            text: "Water & Specialized Fluids",
            iconSrc: icon3,
        },
    ],
    tableHeaders: ["Parameter", "Standard Capacity", "Custom Engineered"],
    tableRows: [
        {
            parameter: "Pipe Sizes",
            standardCapacity: '1/2" to 42"',
            customEngineered: 'Up to 60"',
        },
        {
            parameter: "Pressure Rating",
            standardCapacity: "Up to 1480 psi (ANSI 600)",
            customEngineered: "Up to 2220 psi (ANSI 900)",
        },
        {
            parameter: "Temperature Range",
            standardCapacity: "-20°C to +300°C",
            customEngineered: "-50°C to +400°C",
        },
        {
            parameter: "Line Materials",
            standardCapacity: "Carbon Steel, Stainless",
            customEngineered: "Alloy, Concrete, Cast Iron",
        },
    ],
};