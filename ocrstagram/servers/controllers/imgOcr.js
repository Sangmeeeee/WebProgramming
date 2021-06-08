const { createWorker } = require('tesseract.js');
const asyncHandler = require('express-async-handler');
const path = require('path')
const fs = require('fs')

module.exports = asyncHandler(async (req, res, next) => {
    let img = req.files.img
    let temp = new Date().getTime().toString()
    let imgPath = path.resolve(__dirname,'..','..',`public/img/${req.params.id}`,temp+'.jpg') // add getTime
    try {
            img.mv(imgPath, async(err) => {
                console.log('upload img to server')
            })

            const worker = createWorker({
                langPath: path.join(__dirname, '..'),
                dataPath:path.join(__dirname, '..'),
                logger: m => console.log(m)
            })
            await worker.load();
            await worker.loadLanguage();
            await worker.initialize();
            // ocr img file
            const { data: { text } } = await worker.recognize(imgPath);
            console.log(text);
            // send ocr text
            res.send('upload img to server\n' + text);
            await worker.terminate();
            fs.unlinkSync(imgPath)
      } catch(err) {
        console.error(err)
    }
})