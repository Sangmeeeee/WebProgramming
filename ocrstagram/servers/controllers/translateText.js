module.exports = (req, res) => {
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt'
   var request = require('request')

   var options = {
       url: api_url,
       form: {'source':'en', 'target':'ko', 'text':req.body.text},
       headers: {'X-Naver-Client-Id':'QFJbQLuu6_I38EZAENeP', 'X-Naver-Client-Secret': 'IX0sR4uttL'}
    }

   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body).message.result.translatedText)
     } else {
        console.error(error)
     }
   })
}