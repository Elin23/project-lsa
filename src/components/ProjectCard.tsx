import { ArrowRight } from "lucide-react";
import type { Project } from "../data/projectsData";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(31,63,147,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[190px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#1f3f93]">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-blue-01 text-xl md:text-[22px] 2xl:text-[24px] font-bold">
          {project.title}
        </h3>

        <p className="mt-2 text-muted-blue text-sm leading-6.5 md:text-base md:leading-5.5  2xl:leading-6 ">
          {project.description}
        </p>

        {/* <a
          href={project.path}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-01 transition hover:gap-3"
        >
          View Details
          <ArrowRight size={16} />
        </a> */}
        <Link
          to={project.path}
          className="group relative mt-4 mx-auto lg:mx-0 inline-flex items-center gap-2 text-base  text-red-01 font-semibold "
        >
          <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover:after:w-full">
            View Details
          </span>

          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
