// See all options: https://github.com/imagemin/imagemin-pngquant

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["images/*.png"], {
    destination: "build",
    plugins: [imageminPngquant({ quality: [0.75, 0.8] })],
  });

  console.log("Images optimized");
})();
