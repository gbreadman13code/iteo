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
    <Link to={ROUTES.PROJECT_DETAILS.replace(':id', project.id)} className={`project-card ${className}`}>
      <div className="project-card__image-wrapper">
        <img src={project.images.main} alt={project.title.main} className="project-card__image" />
        <div className="project-card__overlay">
          <div className="project-card__title-main" dangerouslySetInnerHTML={{__html: project.title.main}}/>
          <div className="project-card__title-subtitle" dangerouslySetInnerHTML={{__html: project.title.subtitle}}/>
        </div>
      </div>
      <div className="project-card__title-short">{project.title.short}</div>
    </Link>
  );
};
