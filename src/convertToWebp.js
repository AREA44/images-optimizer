import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'fs'
import { extname, join, basename } from 'path'

export async function convertToWebp(directoryPath) {
  try {
    const files = readdirSync(directoryPath)

    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase()),
    )

    const outputDirectory = 'dist'
    mkdirSync(outputDirectory, { recursive: true })

    await Promise.all(
      imageFiles.map(async (file) => {
        const inputFile = join(directoryPath, file)
        const outputFile = join(
          outputDirectory,
          `${basename(file, extname(file))}.webp`,
        )

        try {
          await sharp(inputFile).webp().toFile(outputFile)
          console.log(`Converted ${inputFile}`)
        } catch (err) {
          console.error(`Error converting ${inputFile}:`, err)
        }
      }),
    )
  } catch (err) {
    console.error('Error reading directory:', err)
    return Promise.reject(err)
  }
}
