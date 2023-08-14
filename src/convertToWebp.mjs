import sharp from 'sharp'
import { readdir } from 'fs'
import { extname, join, basename } from 'path'

export function convertToWebp(directoryPath) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    const imageFiles = files.filter((file) =>
      ['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase()),
    )

    imageFiles.forEach((file) => {
      const inputPath = join(directoryPath, file)
      const outputPath = join('dist', `${basename(file, extname(file))}.webp`)

      sharp(inputPath)
        .webp()
        .toFile(outputPath, (err) => {
          if (err) {
            console.error('Error converting image:', err)
            return
          }
        })
    })
    console.log('Images converted:', imageFiles)
  })
}

convertToWebp('./images')
