const express = require('express')
const cors = require('cors')
const multipart = require('multiparty')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/user/ocr', (req, res, next) => {
    var form = new multipart.Form({maxFieldsSize:'15MB'})

    form.on('close', () => {
        res.send('ok')
    })
    form.on('field', (name, val) => {
        console.log(name)
        console.log(val)
    })
    form.on('part', (part) => {
        console.log(part.filename)
    })
    form.parse(req)
})

app.post('/user/post', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(8080, () => {
    console.log('8080 port is open')
})