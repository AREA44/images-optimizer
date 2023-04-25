// See all options: https://github.com/imagemin/imagemin-mozjpeg

import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";

(async () => {
  await imagemin(["images/*.jpg"], {
    destination: "dist",
    plugins: [imageminMozjpeg({ quality: 80 })],
  });

  console.log("Images optimized");
})();
