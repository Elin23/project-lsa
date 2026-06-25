import img from "../assets/Related.png";

export interface RelatedProject {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
}

export const relatedProjectsData: RelatedProject[] = [
    {
        id: 1,
        category: "Hot Tapping",
        title: "Live Line Intervention, Basra",
        description:
            "Executed a critical 36-inch hot tap on a live export line without interrupting…",
        image: img,
    },
    {
        id: 2,
        category: "Hot Tapping",
        title: "Live Line Intervention, Basra",
        description:
            "Executed a critical 36-inch hot tap on a live export line without interrupting…",
        image: img,
    },
    {
        id: 3,
        category: "Hot Tapping",
        title: "Live Line Intervention, Basra",
        description:
            "Executed a critical 36-inch hot tap on a live export line without interrupting…",
        image: img,
    },
];