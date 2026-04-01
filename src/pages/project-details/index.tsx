import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { projects } from '@/pages/about/model/projectData';
import { ROUTES } from '@/shared/config/routes';
import Lightbox from './components/Lightbox/Lightbox';

import 'swiper/swiper-bundle.css';
import './ProjectDetailsPage.scss';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [lightbox, setLightbox] = useState({ isOpen: false, initialIndex: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to={ROUTES.PROJECTS} replace />;
  }

  const handleBack = () => {
    navigate(ROUTES.PROJECTS);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, initialIndex: index });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  // Combine main image and photos for the slider
  const slides = [project.images.main, ...project.images.photos];

  return (
    <div className="project-details-page">
      <div className="project-details-page__left">
        {/* Top Spacer or Logo if needed, but per design usually text starts here or centered vertically */}
        <div />

        <div className="project-details-page__content">
          <div className="project-details-page__title" dangerouslySetInnerHTML={{__html: project.title.main}} />
          <div className="project-details-page__subtitle" dangerouslySetInnerHTML={{__html: project.title.subtitle}} />
          <div className="project-details-page__description" dangerouslySetInnerHTML={{ __html: project.description }} />
          <span className='project-details-page__iteo'>Участие ИТЕО</span>
          <ul className="project-details-page__list">
            {project.list.map((item, index) => (
              <li dangerouslySetInnerHTML={{__html: item}} key={index} />
            ))}
          </ul>
        </div>

        <div className="project-details-page__controls">
          <button className="project-details-page__back-btn" onClick={handleBack}>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            назад
          </button>

          <div className="project-details-page__slider-nav">
            <button className="prev" onClick={handlePrev}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="next" onClick={handleNext}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="project-details-page__right">
        <Swiper
          modules={[Mousewheel, Navigation]}
          direction={isMobile ? 'horizontal' : 'vertical'}
          slidesPerView={isMobile ? 1.1 : 'auto'}
          spaceBetween={20}
          slidesOffsetAfter={isMobile ? 0 : 200}
          mousewheel={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper">
          {slides.map((image, index) => (
            <SwiperSlide key={index} onClick={() => openLightbox(index)}>
              <img src={image} className="slide-image" alt={`${project.title.main} slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox isOpen={lightbox.isOpen} images={slides} initialIndex={lightbox.initialIndex} onClose={closeLightbox} />
    </div>
  );
};

export default ProjectDetailsPage;
