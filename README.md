# Image Optimizer

## Usage

```bash
git clone https://github.com/AREA44/images-optimizer
cd images-optimizer
pnpm i
```

Replace all your images in `images` folder and run:

```bash
# Optimize JPG with imagemin-mozjpeg
# See all options: https://github.com/imagemin/imagemin-mozjpeg
node imagemin-mozjpeg.mjs

# Optimize PNG with imagemin-pngquant
# See all options: https://github.com/imagemin/imagemin-pngquant
node imagemin-pngquant.mjs

# Convert JPG and PNG to webp with imagemin-webp
# See all options: https://github.com/imagemin/imagemin-webp
node imagemin-webp.mjs

# Optimize SVG with imagemin-svgo
# See all options: https://github.com/imagemin/imagemin-svgo
node imagemin-svgo.mjs

# Optimize GIF with imagemin-gifsicle
# See all options: https://github.com/imagemin/imagemin-gifsicle
node imagemin-gifsicle.mjs
```

Your optimized images'll appear in `dist` folder.

## License

Licensed under the [MIT](LICENSE) license.
