const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['src/img/*.{jpg,png}'], {
        destination: 'src/img',
        plugins: [
            imageminMozjpeg({ quality: 80 }),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log(`\nImagemin: optimized ${files.length} images.\n`);
})();
