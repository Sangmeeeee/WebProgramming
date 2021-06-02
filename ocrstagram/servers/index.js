const express = require('express')
const cors = require('cors')
const multipart = require('multiparty')
const app = express()
const fileUpload = require('express-fileupload')


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/:id/ocr', (req, res, next) => {
    var form = new multipart.Form({maxFieldsSize:'15MB'})
    form.on('error',next)

    form.on('close', () => {
        console.log('send')
        res.send('hello')
    })
    form.on('field', (name, val) => {
        if(name !== 'text') return
        // console.log('filed')
        console.log(name, val)
    })
    form.on('part', (part) => {
        if(!part.filename) return
        if(part.name !== 'img') return part.resume()
        // console.log(part)
        part.on('data', () => {

        })
    })
    form.parse(req)
})

app.post('/:id/post', (req, res, next) => {
    var form = new multipart.Form({maxFieldsSize:'15MB'})
    form.on('error',next)

    form.on('close', () => {
        console.log('send')
        res.send('hello')
    })
    form.on('field', (name, val) => {
        if(name !== 'text') return
        // console.log('filed')
        console.log(name, val)
    })
    form.on('part', (part, data) => {
        if(!part.filename) return
        if(part.name !== 'img') return part.resume()
        // console.log(part)
        part.on('data', () => {

        })
    })
    form.parse(req)
})

app.post('/:id', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(8080, () => {
    console.log('8080 port is open')
})