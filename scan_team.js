import fs from 'fs';
import path from 'path';

const teamDir = path.resolve('src/assets/team');

// Helper to get PNG dimensions
function getPngDimensions(filePath) {
    try {
        const fd = fs.openSync(filePath, 'r');
        const buffer = Buffer.alloc(24);
        fs.readSync(fd, buffer, 0, 24, 0);
        fs.closeSync(fd);
        if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') return null;
        return {
            width: buffer.readUInt32BE(16),
            height: buffer.readUInt32BE(20)
        };
    } catch (e) {
        return null;
    }
}

// Helper to get SVG info
function getSvgInfo(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Extract viewBox
        const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
        let width = 0, height = 0;
        if (viewBoxMatch) {
            const parts = viewBoxMatch[1].split(' ').map(Number);
            width = parts[2];
            height = parts[3];
        } else {
             // Fallback to width/height attrs
            const wMatch = content.match(/width="([^"]+)"/);
            const hMatch = content.match(/height="([^"]+)"/);
            if (wMatch) width = parseFloat(wMatch[1]);
            if (hMatch) height = parseFloat(hMatch[1]);
        }

        // Extract Path d
        const pathMatch = content.match(/d="([^"]+)"/);
        const d = pathMatch ? pathMatch[1].replace(/\n/g, '').replace(/\s+/g, ' ') : ''; // Clean up newlines/spaces

        return { width, height, path: d };
    } catch (e) {
        return null;
    }
}

const members = ['polina', 'user'];

const results = [];

members.forEach(name => {
    const dir = path.join(teamDir, name);
    const bwPath = path.join(dir, 'bw.png');
    const svgPath = path.join(dir, 'siluet.svg');

    const pngDims = getPngDimensions(bwPath);
    const svgInfo = getSvgInfo(svgPath);

    if (pngDims && svgInfo) {
        results.push({
            id: name,
            width: svgInfo.width,
            height: svgInfo.height,
            imgWidth: pngDims.width,
            imgHeight: pngDims.height,
            path: svgInfo.path
        });
    } else {
        console.error(`Missing or invalid files for ${name}`);
    }
});

fs.writeFileSync('team_scan_results.json', JSON.stringify(results, null, 2));
console.log('Done');
