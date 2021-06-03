const express = require('express')
const cors = require('cors')
const multipart = require('multiparty')
const app = express()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }))
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
app.use(express.static('public'))

// app.post('/:id/ocr', (req, res, next) => {
//     var form = new multipart.Form({maxFieldsSize:'15MB'})
//     form.on('error',next)

//     form.on('close', () => {
//         console.log('send')
//         res.send('hello')
//     })
//     form.on('field', (name, val) => {
//         if(name !== 'text') return
//         // console.log('filed')
//         console.log(name, val)
//     })
//     form.on('part', (part) => {
//         if(!part.filename) return
//         if(part.name !== 'img') return part.resume()
//         // console.log(part)
//         part.on('data', () => {

//         })
//     })
//     form.parse(req)
// })

app.post('/:id/ocr',(req, res) => {
    // console.log(req.files)
    // console.log(req.body)
    // console.log(req.params)
    let img = req.files.img
    img.mv(path.resolve(__dirname,'..',`public/img/${req.params.id}`,img.name), async(err) => {
        console.log('upload img to server')
    })
    res.send('upload img to server')
    // console.log(req.cookies)
})

app.post('/:id/post',(req,res) => {
    res.send('post img and text to server')
    console.log(req.files)
    console.log(req.body)
})

// app.post('/:id/post', (req, res, next) => {
//     var form = new multipart.Form({maxFieldsSize:'15MB'})
//     form.on('error',next)

//     form.on('close', () => {
//         console.log('send')
//         res.send('hello')
//     })
//     form.on('field', (name, val) => {
//         if(name !== 'text') return
//         // console.log('filed')
//         console.log(name, val)
//     })
//     form.on('part', (part, data) => {
//         if(!part.filename) return
//         if(part.name !== 'img') return part.resume()
//         // console.log(part)
//         part.on('data', () => {

//         })
//     })
//     form.parse(req)
// })

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