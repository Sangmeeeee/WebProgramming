const express = require('express')
const cors = require('cors')
const multipart = require('multiparty')
const app = express()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')
const imgOcrController = require('./controllers/imgOcr');
const storeUserController = require('./controllers/storeUser');
const storePostController = require('./controllers/storePost')
const loginUserController = require('./controllers/loginUser')
const searchUserContrller = require('./controllers/userSearch')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://twknds:!!0906wkd@cluster0.udzlq.mongodb.net/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true    
});

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

app.use(express.static('../public'))

/* 실제 배포를 위해선
app.use(cors())
app.use(express.static('../public'))
를 주석처리해주고 아래 부분의 주석을 해제해준다.
*/


// app.use(express.static('../build'))

// app.get('*', (req, res, next) => {
//     if(req.path.split('/')[1] === 'static') return next();
//     res.sendFile(path.resolve(__dirname, '../build/index.html'));
// });

// upload img & request ocr
app.post('/:id/ocr', imgOcrController);

app.post('/:id/post', storePostController)

app.post('/:id', loginUserController)

app.post('/user/search',searchUserContrller)

app.post('/test/test',(req, res) =>{
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
   var request = require('request');

   var options = {
       url: api_url,
       form: {'source':'en', 'target':'ko', 'text':req.body.text},
       headers: {'X-Naver-Client-Id':'QFJbQLuu6_I38EZAENeP', 'X-Naver-Client-Secret': 'IX0sR4uttL'}
    };

   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body).message.result.translatedText)

     } else {
        console.error(error)
     }
   });
})

const User = require('./models/User')
const asyncHandler = require('express-async-handler');

app.post('/user/isok',asyncHandler(async (req, res, next) => {
    let result = await User.find(
        { userid: req.body.userid}
    )
    if (result.length == 0)
        res.send(false)
    else
        res.send(true)
}))

// app.post('/user/register', storeUserController);

app.listen(8080, () => {
    console.log('8080 port is open')
})