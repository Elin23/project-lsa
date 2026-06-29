import DetailedScope from "../sections/ProjectDetails/DetailedScope"
import ProjectGallery from "../sections/ProjectDetails/ProjectGallery"

const ProjectDetailsPage = () => {
  return (
    <>
      <div className=" space-y-12 py-24">
        <DetailedScope />
        <ProjectGallery />
      </div>
    </>
  )
}

export default ProjectDetailsPage