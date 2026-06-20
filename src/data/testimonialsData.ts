export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Anderson",
    position: "Senior Project Manager",
    company: "Major International Oil Company",
    image: "/Images/testimonials/person-1.jpg",
    quote:
      "LSA consistently delivers on their promises. Their technical expertise on the Rumaila field was instrumental to the project's success, maintaining flawless safety records throughout.",
  },
  {
    id: 2,
    name: "David Richardson",
    position: "Operations Director",
    company: "Energy Services Company",
    image: "/Images/testimonials/person-2.jpg",
    quote:
      "The professionalism and responsiveness of the LSA team exceeded our expectations. Their ability to execute complex field operations while maintaining the highest safety standards was truly impressive.",
  },
  {
    id: 3,
    name: "James Carter",
    position: "Engineering Manager",
    company: "Regional Infrastructure Contractor",
    image: "/Images/testimonials/person-3.jpg",
    quote:
      "From planning to execution, LSA demonstrated exceptional engineering capabilities and a strong commitment to quality. Their support played a key role in delivering our project on time and within budget.",
  },
];