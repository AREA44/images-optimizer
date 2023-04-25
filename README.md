# Image optimizer

## Usage

```bash
git clone https://github.com/AREA44/images-optimizer
cd images-optimizer
pnpm i
```

Replace all your images in `images` folder and run:

```bash
# Optimize images with imagemin-mozjpeg
# See all options: https://github.com/imagemin/imagemin-mozjpeg
node imagemin-mozjpeg.mjs

# Optimize images with imagemin-pngquant
# See all options: https://github.com/imagemin/imagemin-pngquant
node imagemin-pngquant.mjs

# Convert images to webp with imagemin-webp
# See all options: https://github.com/imagemin/imagemin-webp
node imagemin-webp.mjs

# Optimize images with imagemin-svgo
# See all options: https://github.com/imagemin/imagemin-svgo
node imagemin-svgo.mjs
```

Your optimized images'll appear in `dist` folder.

## License

Licensed under the [MIT](LICENSE) license.
