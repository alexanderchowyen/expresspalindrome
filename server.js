const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, () => {
  console.log('listening on port 3000')
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs',)
})
app.get('/api', (req, res) => {
  console.log('api start',req.query)
  if(req.query.word){ 
    let word = req.query.word
    let isPalin = false
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')){
      isPalin = true
    }
    const objToJson = {
      isPalin: isPalin ,
    }
    res.send(objToJson);
  }
})
