import { projects } from '@/pages/about/model/projectData';
import { ProjectCard } from './ui/ProjectCard/ProjectCard';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <div className="projects-page__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
