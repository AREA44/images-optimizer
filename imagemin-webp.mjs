// See all options: https://github.com/imagemin/imagemin-webp

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["images/*.{jpg,png}"], {
  destination: "dist",
  plugins: [imageminWebp({ quality: 80 })],
});

console.log("Images optimized");
