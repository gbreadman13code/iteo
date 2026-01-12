import fs from 'fs';
import path from 'path';

// Minimal PNG header parser
function getPngDimensions(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);
    
    // Check PNG signature
    if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
        return null;
    }
    
    // Width and Height are at offset 16 and 20 (Big Endian)
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    
    return { width, height };
}

const assets = [
    'src/assets/team/ilia/bw.png',
    'src/assets/team/ilia/color.png',
    'src/assets/team/serega/bw.png',
    'src/assets/team/serega/color.png'
];

assets.forEach(asset => {
    const fullPath = path.resolve(process.cwd(), asset);
    const dims = getPngDimensions(fullPath);
    console.log(`${asset}: ${dims ? `${dims.width}x${dims.height}` : 'Invalid PNG'}`);
});
