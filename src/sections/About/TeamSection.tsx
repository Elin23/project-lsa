import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import TeamCard from "../../components/TeamCard";
import member_1 from "../../assets/imgs/member-1.png"
import member_2 from "../../assets/imgs/member-2.png"
import member_3 from "../../assets/imgs/member-3.png"
import member_4 from "../../assets/imgs/member-4.png"
// import member_5 from "../../assets/imgs/member-5.png"
// import member_6 from "../../assets/imgs/member-6.png"

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "Haider Kareem Malik",
    role: "Direct Manager",
    experience: "20+ Years",
    image: member_1,
  },
  {
    name: "Ahmed Raad Jalal",
    role: "EPC Project Manager",
    experience: "15+ Years",
    image: member_2,
  },
  {
    name: "Mohammed Ali Hamza",
    role: "Senior Mechanical Engineer",
    experience: "12+ Years",
    image: member_3,
  },
  {
    name: "AHMED Ali Hamza",
    role: "HSE Manager",
    experience: "10+ Years",
    image: member_4,
  },
//   {
//     name: "Hamza Ahmed Ali",
//     role: "QA/QC Manager",
//     experience: "10+ Years",
//     image: member_5,
//   },
//   {
//     name: "Abdullah Ali Haider",
//     role: "Field Operations Lead",
//     experience: "8+ Years",
//     image: member_6,
//   },
];

export default function TeamSection() {
  return (
    <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <div className="">
        <div className="mb-10">
          <TitleComponent
            title="Meet the Experts"
            description="A team of seasoned engineers, project managers, and field specialists driving every LSA project from design to delivery."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}