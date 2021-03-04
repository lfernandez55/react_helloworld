const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

// to use the following two lines install cors
// var cors = require('cors')
// app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.get('/api/test', function (req, res) {
    let msg = {};
    msg.sender="Joe";
    msg.writing="Roses are red....";
    return res.send(JSON.stringify(msg));
});


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(process.env.PORT || 8080);