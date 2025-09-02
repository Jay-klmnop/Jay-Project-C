import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  const jsonFilePath = path.join(process.cwd(), 'api', 'db.json');

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');

    const data = JSON.parse(fileContents);

    res.status(200).json(data.products);
  } catch (error) {
    console.error(`Error reading file at: ${jsonFilePath}`, error);
    res.status(500).json({
      message: 'Error reading data file',
      errorDetails: error.message,
      attemptedPath: jsonFilePath,
    });
  }
}
