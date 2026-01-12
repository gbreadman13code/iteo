import fs from 'fs';
import path from 'path';

const results = JSON.parse(fs.readFileSync('team_scan_results.json', 'utf-8'));

const manualOffsets = {
    ilia: { offsetX: -15, offsetY: 0 },
    serega: { offsetX: 10, offsetY: 0 },
};

let content = '';

// Add imports
results.forEach(m => {
    content += `import ${m.id}Bw from '@/assets/team/${m.id}/bw.png';\n`;
    content += `import ${m.id}Color from '@/assets/team/${m.id}/color.png';\n`;
});

content += `\nexport interface TeamMemberData {
    id: string;
    path: string;
    width: number; // SVG Width
    height: number; // SVG Height
    imgWidth: number; // PNG Width
    imgHeight: number; // PNG Height
    offsetX?: number; // Manual adjustment X
    offsetY?: number; // Manual adjustment Y
    bwSrc: string;
    colorSrc: string;
    zIndex: number;
}

export const teamMembers: TeamMemberData[] = [\n`;

results.forEach((m, index) => {
    const offsets = manualOffsets[m.id] || { offsetX: 0, offsetY: 0 };
    content += `    {
        id: '${m.id}',
        path: "${m.path}",
        width: ${m.width},
        height: ${m.height},
        imgWidth: ${m.imgWidth},
        imgHeight: ${m.imgHeight},
        offsetX: ${offsets.offsetX},
        offsetY: ${offsets.offsetY},
        bwSrc: ${m.id}Bw,
        colorSrc: ${m.id}Color,
        zIndex: ${results.length - index}, // Default stack
    },\n`;
});

content += `];\n`;

fs.writeFileSync('src/pages/about/model/teamData.ts', content);
console.log('teamData.ts generated');
