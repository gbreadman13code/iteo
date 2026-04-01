import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper-bundle.css';
import styles from './Lightbox.module.scss';
import classNames from 'classnames';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ isOpen, images, initialIndex, onClose }: LightboxProps) => {
  const swiperRef = useRef<SwiperType>(null);

  // Sync swiper to initialIndex when opening
  useEffect(() => {
    if (isOpen && swiperRef.current) {
      swiperRef.current.slideTo(initialIndex, 0);
    }
  }, [isOpen, initialIndex]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    if (!swiperRef.current) return;
    const activeIndex = swiperRef.current.activeIndex;
    const imageUrl = images[activeIndex];

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `project-image-${activeIndex + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={classNames(styles.lightbox, { [styles.open]: isOpen })}>
      <button className={styles.lightbox__close} onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.lightbox__container}>
        <Swiper
          modules={[Navigation, Keyboard, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          mousewheel={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.lightboxSlider}>
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={(e) => e.stopPropagation()}>
              <img src={image} alt={`Full screen slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.lightbox__controls}>
        <button className={styles.lightbox__download} onClick={handleDownload}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Скачать
        </button>

        <div className={styles.lightbox__nav}>
          <button className={styles.prev} onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className={styles.next} onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
