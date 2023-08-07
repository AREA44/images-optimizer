// See all options: https://github.com/imagemin/imagemin-webp

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

async function toWebp(pattern) {
  await imagemin([pattern], {
    destination: 'dist',
    plugins: [imageminWebp({ quality: 80 })],
  });
  console.log('Images converted to WEBP!');
}

toWebp('../images/*.{jpg,png}');
