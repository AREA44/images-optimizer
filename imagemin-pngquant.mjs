// See all options: https://github.com/imagemin/imagemin-pngquant

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["images/*.png"], {
    destination: "build",
    plugins: [imageminPngquant()],
  });

  console.log("Images optimized");
})();
