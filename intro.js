const express = require('express');
const path = require('path');


const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/iller', function (req, res) {
    res.send('ankara');
  });


app.listen(8080, function () {
  console.log('Sunucu çalışıyor...');
});