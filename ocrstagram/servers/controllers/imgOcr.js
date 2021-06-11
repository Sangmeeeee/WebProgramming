const { createWorker } = require('tesseract.js');
const asyncHandler = require('express-async-handler');
const path = require('path')
const fs = require('fs')

module.exports = asyncHandler(async (req, res, next) => {
    let img = req.files.img
    let temp = new Date().getTime().toString()
    let imgPath = path.resolve(__dirname,'..','..',`public/img/${req.params.id}`,temp) // add getTime
    try {
            img.mv(imgPath, async(err) => {
                console.log('upload img to server')
            })

            const worker = createWorker()
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            // ocr img file
            const { data: { text } } = await worker.recognize(imgPath);
            console.log(text);
            // send ocr text
            // res.send('upload img to server\n' + text);
            res.send(text)
            await worker.terminate();
            fs.unlinkSync(imgPath)
      } catch(err) {
        console.error(err)
    }
})