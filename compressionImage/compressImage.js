import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import fs from 'fs';

try {
    console.log('Script execution started.');

    const storage = new Storage({
        projectId: 'white-outlook-425300-k2',
        keyFilename: './white-outlook-425300-k2-f56cbe59ff60.json',
    });

    const bucketName = 'images_future_academy';
    const tmpDir = path.join(process.cwd(), 'tmp');

    // Ensure the tmp directory exists
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
    }

    async function compressAndUploadImage(fileName) {
        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);
        const tempFilePath = path.join(tmpDir, fileName);

        // Download the file from Google Cloud Storage
        await file.download({ destination: tempFilePath });

        const ext = path.extname(fileName).toLowerCase();

        let compressedFiles = [];

        if (ext === '.jpg' || ext === '.jpeg') {
            compressedFiles = await imagemin([tempFilePath], {
                destination: tmpDir,
                plugins: [
                    imageminMozjpeg({ quality: 50 }),
                ]
            });
        } else if (ext === '.png') {
            compressedFiles = await imagemin([tempFilePath], {
                destination: tmpDir,
                plugins: [
                    imageminPngquant({
                        quality: [0.3, 0.5]
                    })
                ]
            });
        }

        if (compressedFiles.length > 0) {
            // Upload the compressed image back to Google Cloud Storage
            await bucket.upload(compressedFiles[0].destinationPath, {
                destination: fileName,
                resumable: false,
            });

            // Clean up temporary files
            fs.unlinkSync(tempFilePath);
            fs.unlinkSync(compressedFiles[0].destinationPath);

            console.log(`Compressed and uploaded: ${fileName}`);
        } else {
            console.log(`Failed to compress: ${fileName}`);
        }
    }

    async function processAllImagesInFolder(folderName) {
        const bucket = storage.bucket(bucketName);
        const [files] = await bucket.getFiles({ prefix: folderName });

        for (const file of files) {
            const fileName = file.name;
            console.log(`Processing: ${fileName}`);
            await compressAndUploadImage(fileName);
        }
    }

    // Start processing all images in the folder
    processAllImagesInFolder('images-chess-page/');
} catch (error) {
    console.error('An error occurred:', error);
}