var http = require('http');
var express = require('express');
var fs = require('fs');

const app = express();

app.use(express.static('public'));

app.listen(3000, () =>{
  console.log('Running app.js on port 3000!');
})