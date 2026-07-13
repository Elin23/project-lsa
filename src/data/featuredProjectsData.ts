import pro1 from '../assets/featuredprojects/project1.webp';
import pro2 from '../assets/featuredprojects/project2.webp';
import pro3 from '../assets/featuredprojects/project3.webp';
import pro4 from '../assets/featuredprojects/project4.webp';
import pro5 from '../assets/featuredprojects/project5.webp';
import pro6 from '../assets/featuredprojects/project6.webp';

export interface FeaturedProject {
    id: number;
    image: string;
    category: string;
    title: string;
}

export const featuredProjectsData: FeaturedProject[] = [
    {
        id: 1,
        image: pro1,
        category: 'EPC SOLUTIONS',
        title: 'EPC Tool Room & Welding Workshop',
    },
    {
        id: 2,
        image: pro2,
        category: 'PIPELINE CONSTRUCTION',
        title: '24" Pipeline Water-in from Qarmat Ali to DGS North',
    },
    {
        id: 3,
        image: pro3,
        category: 'CIVIL ENGINEERING',
        title: '7x Oil Manifolds Erection',
    },
    {
        id: 4,
        image: pro4,
        category: 'TECHNICAL INFRASTRUCTURE',
        title: 'Pipeline Installation',
    },
    {
        id: 5,
        image: pro5,
        category: 'Road CRossing',
        title: 'Trust Boring For Road Crossing',
    },
    {
        id: 6,
        image: pro6,
        category: 'STRATEGIC INFRASTRUCTURE',
        title: '42" Trunkline Zubair DGS to Al- Fao',
    },
];