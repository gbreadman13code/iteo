import React from 'react';
import type { ProjectData } from '@/pages/about/model/projectData';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <Link 
        to={ROUTES.PROJECT_DETAILS.replace(':id', project.id)}
        className={`project-card ${className}`}
    >
      <div className="project-card__image-wrapper">
        <img 
            src={project.images.main} 
            alt={project.title.main} 
            className="project-card__image"
        />
        <div className="project-card__overlay">
            <div className="project-card__title-main">{project.title.main}</div>
            <div className="project-card__title-subtitle">{project.title.subtitle}</div>
        </div>
      </div>
      <div className="project-card__title-short">
        {project.title.short}
        {/* User said "Под картинкой пишется title.short". 
            Usually short title is the project name if main is hidden, but here data has title.short='2023'. 
            Wait, user said: "Undet image writes title.short. On hover writes title.main... Under it title.subtitle".
            In my data I put '2023' as short. That seems like a year. 
            Maybe 'short' should be the name? 
            Let's re-read: "Вместо текстов и названий пока добавить строчки-рыбы." -> "Instead of texts and titles add fish-lines for now".
            
            Let's stick to the request.
            Under image: title.short.
        */}
      </div>
    </Link>
  );
};
