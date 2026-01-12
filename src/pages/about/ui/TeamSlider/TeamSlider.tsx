import { useRef, useEffect, useState } from "react";
import { teamMembers, type TeamMemberData } from "../../model/teamData";
import "./TeamSlider.scss";

export const TeamSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      // If we are on mobile (2 columns), vertical scroll is better
      // But let's follow the requirement: scrollable with mouse wheel without holding shift.
      // Usually this means horizontal scroll on desktop.
      if (window.innerWidth > 768) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          slider.scrollLeft += e.deltaY;
        }
      }
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="team-slider-section">
      <div className="team-slider-section__hero__text">
        <h3>Привет </h3>
        <span>Мы опытная ИТ-команда</span>
        <p>
          точно знаем, как сделать
          <br />
          ваши идеи осязаемыми
        </p>
      </div>
      <div className="team-slider-section__text">
        <p>
          Мы любим и умеем справляться со сложными бизнес-задачами разных
          компаний и улучшать жизнь людей — с помощью интерактивных решений.
        </p>
        <span>
          Делаем доступным новый уровень восприятия окружающего мира: поможем
          Вашему бизнесу соответствовать вызовам современности!
        </span>
      </div>
      <div className="team-slider-section__wrapper" id="team-slider">
        <div className="team-slider-section__container">
          {/* <h2 className="team-slider-section__title">Команда</h2> */}
          <div className="team-slider" ref={sliderRef}>
            {teamMembers.map((member) => (
              <TeamMemberItem key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberItemProps {
  member: TeamMemberData;
}

const TeamMemberItem = ({ member }: TeamMemberItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-member-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Toggle for mobile
    >
      <h3 className="team-member-item__name">
        <span>{member.name}</span>
      </h3>
      <div className="team-member-item__image-container">
        <img
          src={
            isHovered && member.videoSrc
              ? member.videoSrc
              : member.portraitSrc || member.bwSrc
          }
          alt={member.name}
          className="team-member-item__image"
        />
      </div>
      <p className="team-member-item__role">{member.role}</p>
    </div>
  );
};
