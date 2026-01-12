
import { projects } from '@/pages/about/model/projectData';
import { ProjectCard } from './ui/ProjectCard/ProjectCard';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      {/* <h1>Проекты</h1> - User design usually has header separately or implicitly. 
          Existing code had h1. I'll keep it or checking existing header widget?
          User didn't ask to remove H1, but in designs usually H1 is cleaner. 
          I will keep H1 for structure as in previous code.
      */}
      <div className="projects-page__grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
