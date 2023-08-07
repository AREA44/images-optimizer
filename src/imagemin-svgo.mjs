// See all options: https://github.com/imagemin/imagemin-svgo

import imagemin from 'imagemin';
import imageminSvgo from 'imagemin-svgo';

async function optimizeSVG(pattern) {
  await imagemin([pattern], {
    destination: 'dist',
    plugins: [
      imageminSvgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      }),
    ],
  });
  console.log('SVG images optimized!');
}

optimizeSVG('../images/*.svg');
