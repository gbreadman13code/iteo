import { useState } from 'react';
import { teamMembers, type TeamMemberData } from '../../model/teamData';
import './TeamSlider.scss';

export const TeamSlider = () => {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);
  // const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const handleWheel = (e: WheelEvent) => {
  //     // If we are on mobile (2 columns), vertical scroll is better
  //     // But let's follow the requirement: scrollable with mouse wheel without holding shift.
  //     // Usually this means horizontal scroll on desktop.
  //     if (window.innerWidth > 768) {
  //       if (e.deltaY !== 0) {
  //         e.preventDefault();
  //         slider.scrollLeft += e.deltaY;
  //       }
  //     }
  //   };

  //   slider.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => slider.removeEventListener("wheel", handleWheel);
  // }, []);

  const handleMemberClick = (id: string) => {
    setActiveMemberId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="team-slider-section">
      <div className="team-slider-section__hero__text">
        <p>
          <span>Итео — команда</span> дизайнеров, программистов и&nbsp;техников, <br /> реализующая проекты современных музеев и&nbsp;выставочных стендов от идеи до&nbsp;монтажа на объекте. <br />
          <br /> Опыт создания интерактивных инсталляций с 2014 года. <br /> <br /> В нашем штате 22 квалифицированных специалиста.
        </p>
      </div>
      <div className="team-slider-section__wrapper" id="team-slider">
        <div className="team-slider-section__container">
          <div className="team-slider">
            {teamMembers.map((member) => (
              <TeamMemberItem key={member.id} member={member} activeMemberId={activeMemberId} onClick={handleMemberClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberItemProps {
  member: TeamMemberData;
  activeMemberId: string | null;
  onClick: (id: string) => void;
}

const TeamMemberItem = ({ member, activeMemberId, onClick }: TeamMemberItemProps) => {
  const isActive = activeMemberId === member.id;

  return (
    <div className="team-member-item" onClick={() => onClick(member.id)}>
      <div className="team-member-item__image-container">{isActive ? <video src={member.videoSrc} autoPlay loop muted playsInline className="team-member-item__image" /> : <img src={member.portraitSrc} alt={member.name} className="team-member-item__image" />}</div>
    </div>
  );
};
