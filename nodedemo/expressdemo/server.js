var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
var todos= [
    {text: 'First item in todo'},
    {text: 'Second item in todo'}
]

app.get('/todo', function (req, res) {
  res.json(todos);
})

app.post('/todo', function (req, res) {
    var todo = req.body
    console.log(todo)
    todos.push(todo)
    res.json(todos);
  })

  app.post('/authenticate', function (req, res) {
    var email = req.body.email
    var pwd = req.body.pwd

    if(email == pwd){
      res.json({auth: true})
    }
    else{
      res.json({auth:false});
    }

    
  })

app.get('/weather', function (req, res) {
  res.json({"currentTemp" : 25})
})

app.post('/', function (req, res) {
    res.send('Hello World')
  })
 
app.listen(4000)