import sharp from 'sharp'
import { readdir } from 'fs'
import { extname, join } from 'path'

export function optimizeImage(directoryPath) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.gif'].includes(extname(file).toLowerCase()),
    )

    imageFiles.forEach((file) => {
      const inputFile = join(directoryPath, file)
      const outputFile = join('dist', file)

      const format = extname(file).toLowerCase().slice(1)
      sharp(inputFile)
        .toFormat(format, { quality: 75 })
        .toFile(outputFile, (err) => {
          if (err) {
            console.error(`Error optimizing ${inputFile}:`, err)
          } else {
            console.log(`Optimized ${inputFile}`)
          }
        })
    })
  })
}
