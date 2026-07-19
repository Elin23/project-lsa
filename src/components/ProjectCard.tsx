import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import type { Project } from "../data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="h-full cursor-pointer"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          bg-white
          shadow-[0_8px_30px_rgba(31,63,147,0.08)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(31,63,147,0.15)]
        "
      >
        {/* Image */}
        <div className="relative h-52.5 shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#08162d]/95 via-[#08162d]/40 to-transparent" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-bold leading-snug text-white md:text-[22px] 2xl:text-[24px]">
              {project.title}
            </h3>

            <div className="mt-4 h-0.5 w-12 bg-red-01 transition-all duration-500 group-hover:w-24" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="flex-1 text-sm leading-6 text-muted-blue md:text-base">
            {project.description}
          </p>

          <Link
            to={project.path}
            className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-red-01"
          >
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover/link:after:w-full">
              View Details
            </span>

            <GoArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;