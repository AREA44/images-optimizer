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
      ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase()),
    )

    imageFiles.forEach((file) => {
      const inputFile = join(directoryPath, file)
      const outputFile = join('dist', `${basename(file, extname(file))}.webp`)

      sharp(inputFile)
        .webp()
        .toFile(outputFile, (err) => {
          if (err) {
            console.error(`Error convert ${inputFile}:`, err)
          } else {
            console.log(`Conveted ${inputFile}`)
          }
        })
    })
  })
}
