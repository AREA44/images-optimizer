// See all options: https://github.com/imagemin/imagemin-svgo

import imagemin from "imagemin";
import imageminSvgo from "imagemin-svgo";

(async () => {
  await imagemin(["images/*.svg"], {
    destination: "dist",
    plugins: [
      imageminSvgo({
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      }),
    ],
  });

  console.log("Images optimized");
})();
