// See all options: https://github.com/imagemin/imagemin-mozjpeg

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

async function optimizeJPEG(pattern) {
  await imagemin([pattern], {
    destination: 'dist',
    plugins: [imageminMozjpeg({ quality: 80 })],
  });
  console.log('JPEG images optimized!');
}

optimizeJPEG('../images/*.jpg');
