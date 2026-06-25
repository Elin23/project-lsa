import { ArrowRight } from "lucide-react";
import type { Project } from "../data/projectsData";

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
        <h3 className="text-xl font-bold text-[#111827]">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {project.description}
        </p>

        <a
          href={project.path}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1f3f93] transition hover:gap-3"
        >
          View Details
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;