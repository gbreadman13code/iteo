import { useState } from 'react';
import type { TeamMemberData } from '../../model/teamData';
import './TeamMember.scss';

interface TeamMemberProps {
    data: TeamMemberData;
    style?: React.CSSProperties;
}

export const TeamMember = ({ data, style }: TeamMemberProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Bottom Center Alignment + Manual Offsets
    const imgX = ((data.width - data.imgWidth) / 2) + (data.offsetX || 0);
    const imgY = (data.height - data.imgHeight) + (data.offsetY || 0);

    return (
        <div 
            className="team-member" 
            style={{ 
                ...style, 
                width: data.width, 
                height: data.height,
                zIndex: data.zIndex
            }}
        >
            <svg 
                width={data.width} 
                height={data.height} 
                viewBox={`0 0 ${data.width} ${data.height}`} 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="team-member__svg"
            >
                <defs>
                    <clipPath id={`clip-${data.id}`}>
                        <path d={data.path} />
                    </clipPath>
                </defs>
                
                {/* Visual Group - Mouse events ignored here to prevent box trigger */}
                <g clipPath={`url(#clip-${data.id})`} style={{ pointerEvents: 'none' }}>
                    <image 
                        href={data.bwSrc} 
                        x={imgX}
                        y={imgY}
                        width={data.imgWidth} 
                        height={data.imgHeight} 
                    />
                    
                    <image 
                        href={data.colorSrc} 
                        x={imgX}
                        y={imgY}
                        width={data.imgWidth} 
                        height={data.imgHeight} 
                        style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
                    />
                </g>
                
                {/* Hit test area - Only the path triggers events */}
                <path 
                    d={data.path} 
                    fill="transparent" 
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </svg>
        </div>
    );
};
