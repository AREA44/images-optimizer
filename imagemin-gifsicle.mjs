// See all options: https://github.com/imagemin/imagemin-gifsicle

import imagemin from "imagemin";
import imageminGifsicle from "imagemin-gifsicle";

(async () => {
  await imagemin(["images/*.gif"], {
    destination: "dist",
    plugins: [imageminGifsicle({ quality: 1 })],
  });

  console.log("Images optimized");
})();
