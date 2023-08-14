# Image Wizard

Image tools using Node.js

## Usage

```bash
git clone https://github.com/AREA44/images-wizard
cd images-wizard
pnpm i
```

Replace all your images in `images` folder and run:

```bash
# Optimize JPG with imagemin-mozjpeg
# See all options: https://github.com/imagemin/imagemin-mozjpeg
node src/imagemin-mozjpeg.mjs

# Optimize PNG with imagemin-pngquant
# See all options: https://github.com/imagemin/imagemin-pngquant
node src/imagemin-pngquant.mjs

# Convert JPG, JPEG and PNG to Webp with sharp
node src/convertToWebp.mjs

# Optimize SVG with imagemin-svgo
# See all options: https://github.com/imagemin/imagemin-svgo
node src/imagemin-svgo.mjs

# Optimize GIF with imagemin-gifsicle
# See all options: https://github.com/imagemin/imagemin-gifsicle
node src/imagemin-gifsicle.mjs
```

Your optimized images'll appear in `dist` folder.

## License

Licensed under the [MIT](LICENSE) license.
