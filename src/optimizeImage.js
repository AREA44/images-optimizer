import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'fs'
import { extname, join } from 'path'

export function optimizeImage(directoryPath) {
  try {
    const files = readdirSync(directoryPath)
    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(
        extname(file).toLowerCase(),
      ),
    )

    const outputDirectory = 'dist'
    mkdirSync(outputDirectory, { recursive: true })

    return Promise.all(
      imageFiles.map(async (file) => {
        const inputFile = join(directoryPath, file)
        const outputFile = join(outputDirectory, file)
        const format = extname(file).slice(1)

        try {
          const image =
            format === 'gif'
              ? sharp(inputFile, { animated: true }).gif()
              : sharp(inputFile).toFormat(format, { quality: 75 })
          await image.toFile(outputFile)

          console.log(`Optimized ${inputFile}`)
        } catch (err) {
          console.error(`Error optimizing ${inputFile}:`, err)
        }
      }),
    )
  } catch (err) {
    console.error('Error reading directory:', err)
    return Promise.reject(err)
  }
}
