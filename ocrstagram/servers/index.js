const express = require('express')
const cors = require('cors')
const multipart = require('multiparty')
const app = express()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')
const { createWorker } = require('tesseract.js');
const asyncHandler = require('express-async-handler')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
app.use(express.static('public'))

// upload img & request ocr
app.post('/:id/ocr', asyncHandler(async (req, res, next) => {
    let img = req.files.img

    let imgPath = path.resolve(__dirname,'..',`public/img/${req.params.id}`,img.name);
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
}))

app.post('/:id/post',(req,res) => {
    res.send('post img and text to server')
    console.log(req.files)
    console.log(req.body)
})

app.post('/:id', (req, res) => {
    console.log(req.body)
    console.log(req)
    res.send(req.body.id)
    console.log(path.resolve(__dirname,'..','public/img'))
    if(!fs.existsSync(`${path.resolve(__dirname,'..','public/img')}/${req.body.id}`)){
        console.log('create folder')
        fs.mkdirSync(`${path.resolve(__dirname,'..','public/img')}/${req.body.id}`)
    }
})

app.listen(8080, () => {
    console.log('8080 port is open')
})