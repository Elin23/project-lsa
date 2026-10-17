export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

import img1 from '../assets/Images/testimonials/Hyder Kareem Malik.jpg';
import img2 from '../assets/Images/testimonials/Mohammed Ewaid H.jpg';
import img3 from '../assets/Images/testimonials/Ahmed Raad J.jpg';
import img4 from '../assets/Images/testimonials/Mohammed Al-Zahid.jpg';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Hyder Kareem Malik",
    position: "Authorized Director",
    company: "LSA",
    image: img1,
    quote:
      "At LSA, we combine local knowledge, experienced people, and dependable equipment to deliver safe, practical, and high-quality EPC solutions. Our commitment is to complete every project with integrity, technical excellence, and full focus on our clients’ objectives.",
  },
  {
    id: 2,
    name: "Mohammed Ewaid H.",
    position: "Deputy General Manager",
    company: "LSA",
    image: img2,
    quote:
      "Our commitment is to deliver every project with safety, quality, and accountability at its core. Through experienced teams, reliable resources, and disciplined execution, LSA provides practical EPC solutions that clients can depend on.",
  },
  {
    id: 3,
    name: "Ahmed Raad J.",
    position: "Operations Manager",
    company: "LSA",
    image: img3,
    quote:
      "Our operations are built around safe execution, clear coordination, and dependable project delivery. We ensure that our teams, equipment, and resources are fully prepared to meet each client’s project requirements.",
  },
  {
    id: 4,
    name: "Mohammed Al-Zahid",
    position: "Senior Technical Manager",
    company: "LSA",
    image: img4,
    quote:
      "LSA combines sound engineering practice with practical field experience to deliver reliable solutions. From planning and design through construction and commissioning, quality and technical integrity remain our priority.",
  },
];