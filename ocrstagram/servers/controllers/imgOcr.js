const { createWorker } = require('tesseract.js');
const asyncHandler = require('express-async-handler');
const path = require('path')
const fs = require('fs')

module.exports = asyncHandler(async (req, res, next) => {
    let img = req.files.img

    let imgPath = path.resolve(__dirname,'..','..',`public/img/${req.params.id}`,img.name);
    try {
        if (fs.existsSync(imgPath)) {
          res.send("Same filename exists")
        }
        else {
            img.mv(imgPath, async(err) => {
                console.log('upload img to server')
            })

            const worker = createWorker();
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            // ocr img file
            const { data: { text } } = await worker.recognize(imgPath);
            console.log(text);
            // send ocr text
            res.send('upload img to server\n' + text);
            await worker.terminate();
        }
      } catch(err) {
        console.error(err)
    }
})