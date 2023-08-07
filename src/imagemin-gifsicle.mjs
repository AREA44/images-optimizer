// See all options: https://github.com/imagemin/imagemin-gifsicle

import imagemin from 'imagemin';
import imageminGifsicle from 'imagemin-gifsicle';

async function optimizeGIF(pattern) {
  await imagemin([pattern], {
    destination: 'dist',
    plugins: [imageminGifsicle({ quality: 1 })],
  });
  console.log('GIF images optimized!');
}

optimizeGIF('../images/*.gif');
