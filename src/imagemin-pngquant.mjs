// See all options: https://github.com/imagemin/imagemin-pngquant

import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

async function optimizePNG(pattern) {
  await imagemin([pattern], {
    destination: 'dist',
    plugins: [imageminPngquant({ quality: [0.75, 0.8] })],
  });
  console.log('PNG images optimized!');
}

optimizePNG('../images/*.png');
