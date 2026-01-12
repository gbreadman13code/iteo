import { useState, useEffect } from 'react';
import './HomePage.scss';
import dogImg from '@/assets/dog.png';

const HomePage = () => {
  // Check session storage on initialization to avoid flash or double render
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('iteo_intro_shown'));
  const [isDropping, setIsDropping] = useState(false);

  // Loader state
  const [progress, setProgress] = useState(0);

  // 3D Rotation state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1

      // Small max rotation (e.g., 5 degrees)
      const maxRotation = 5; 
      
      setRotation({
        x: -y * maxRotation, // Invert Y for natural feel (mouse up -> rotates up/away)
        y: x * maxRotation
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 20); // 20ms * 100 = 2000ms = 2s total

      // Trigger exit when complete
      if (progress === 100) {
         // Small delay after 100% before closing
         setTimeout(() => {
          setIsLoading(false);
          setIsDropping(true);
          sessionStorage.setItem('iteo_intro_shown', 'true');
        }, 500);
      }

      // Clean up "dropping" state after animation completes
      const dropTimer = setTimeout(() => {
        setIsDropping(false);
      }, 4000); // 2s (load) + 0.5s (wait) + 1.5s (drop) approx

      return () => {
        clearInterval(interval);
        clearTimeout(dropTimer);
      };
    }
  }, [isLoading, progress]); // Added progress as dependency to check completion

  return (
    <div className={`home-page ${isLoading ? 'loading' : ''}`}>
      {/* Loader Overlay */}
      {isLoading && (
        <div className="home-page__loader">
          <div className="home-page__terminal-content">
            <div className="home-page__terminal-line">&gt; Начинаем загрузку ITEO</div>
            <div className="home-page__terminal-line">&gt; Загружено {progress}%</div>
            {progress === 100 && (
              <div className="home-page__terminal-line">&gt; Загрузка завершена успешно</div>
            )}
          </div>
        </div>
      )}

      <div className="home-page__hero">
        <div className="home-page__content">
           {/* Placeholder for the main visual (Wolf + Envelope) */}
          <div className="home-page__visual">
            <div className={`home-page__dog-container ${isLoading ? 'hidden' : ''} ${isDropping ? 'dropping' : ''}`}>
              {/* 3D Rotation Wrapper */}
              <div 
                className="home-page__dog-3d-wrapper"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
              >
                <img src={dogImg} alt="Levitating Dog" className="home-page__dog" />
              </div>
              <div className="home-page__shadow"></div>
            </div>
          </div>
        </div>

        {/* <button className="home-page__video-btn">
          <div className="play-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="black" />
            </svg>
          </div>
          <span>Смотри Видео</span>
        </button> */}

        <div className="home-page__founded">
          компания основана в 2014
        </div>
      </div>
    </div>
  );
};

export default HomePage;
