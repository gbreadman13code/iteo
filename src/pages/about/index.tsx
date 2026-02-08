import { teamMembers } from './model/teamData';
import { TeamMember } from './ui/TeamMember/TeamMember';
import { TeamSlider } from './ui/TeamSlider/TeamSlider';
import './AboutPage.scss';

const AboutPage = () => {
  // const isScrollingRef = useRef(false);
  // const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // const handleScrollDown = () => {
  //   const slider = document.getElementById('team-slider');
  //   if (slider) {
  //     slider.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // Плавный скролл страницы (только десктоп): вниз → в низ, вверх → в верх
  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     // Только для десктопа (>1200px)
  //     if (window.innerWidth <= 1200) return;

  //     // Проверяем, не над слайдером ли мы (там свой скролл)
  //     const target = e.target as HTMLElement;
  //     const isOverSlider = target.closest('.team-slider');
  //     if (isOverSlider) return;

  //     // Предотвращаем множественные срабатывания во время анимации
  //     if (isScrollingRef.current) {
  //       e.preventDefault();
  //       return;
  //     }

  //     const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
  //     const pageContainer = document.querySelector('.about-page');
  //     if (!pageContainer) return;

  //     e.preventDefault();
  //     isScrollingRef.current = true;

  //     if (scrollDirection === 'down') {
  //       // Скроллим в самый низ страницы
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     } else {
  //       // Скроллим в самый верх страницы
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth',
  //       });
  //     }

  //     // Сбрасываем флаг после завершения анимации (~800ms)
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //     scrollTimeoutRef.current = setTimeout(() => {
  //       isScrollingRef.current = false;
  //     }, 800);
  //   };

  //   window.addEventListener('wheel', handleWheel, { passive: false });

  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="about-page">
      <div className="about-page__hero">
        <div className="about-page__team-container">
          <div className="about-page__hero__text">
            <p>
              ИТЕО — команда дизайнеров, программистов и&nbsp;техников, реализующая проекты современных музеев и&nbsp;выставочных стендов от&nbsp;идеи до&nbsp;монтажа на&nbsp;объекте. <br /> <b>Опыт:</b> с 2014 года. <br /> <b>Штат:</b> 22 человека.
            </p>
            <p>Мы любим и умеем точно решать сложные бизнес-задачи разных компаний и&nbsp;делать лучше жизнь людей - с помощью интерактивных решений.</p>
            <p>Мы делаем доступным новый уровень восприятия окружающего мира, поможем Вашему бизнесу соответствовать вызовам современности!</p>
          </div>
          <div className="about-page__team-container__members">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                data={member}
                // Spread them out across 80% of width
                style={{
                  left: `calc(50% + ${member.left}px)`,
                  bottom: `${member.bottom}px`,
                }}
              />
            ))}

            <div className="about-page__team-container__black-line" />
          </div>

          <div className="about-page__team-container__gradient" />
        </div>

        {/* <div className="about-page__content">
          <h1 className="about-page__title">Привет</h1>
          <div className="about-page__subtitle-block">
            <span className="about-page__badge">Мы опытная ИТ-команда</span>
            <p className="about-page__description">
              точно знаем, как сделать<br />
              ваши идеи осязаемыми
            </p>
          </div>
        </div> */}

        {/* <button className="about-page__scroll-down" onClick={handleScrollDown}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="1" />
            <path d="M7 10L12 15L17 10" stroke="black" strokeWidth="1" />
          </svg>
        </button> */}
      </div>

      <div className="about-page__slider-container">
        <TeamSlider />
      </div>
    </div>
  );
};

export default AboutPage;
