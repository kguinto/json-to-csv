var http = require('http');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.post('/', (req, res, next)=>{
  console.log('POST REQUEST POST REQUEST POST REQUEST');
  console.log(req.body);
  res.end(":^)");
});

app.listen(3000, () =>{
  console.log('Running app.js on port 3000!');
})