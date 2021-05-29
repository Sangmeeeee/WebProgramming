const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(8080, () => {
    console.log('8080 port is open')
})