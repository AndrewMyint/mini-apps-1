const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const path = require('path');
const formatToCSV = require('./client/app.js');
console.log(formatToCSV);
// app.use((req, res, next) => {
//   req.rawBody = '';
//   // req.setEncoding('utf8');
//   req.on('data', (chunk) => {
//     req.rawBody += chunk;
//  });
//   req.on('end', function() {
//     //  req.jsonBody = JSON.parse(req.rawBody);
//      next();
//    });
// });
app.set('client', path.join(__dirname + '/client'));
app.set('view engine', 'ejs');
app.use('/',express.static(path.join(__dirname + '/client')));
app.use(bodyParser.urlencoded());
app.use(formatToCSV);
// app.use(bodyParser.json());

app.post('/upload_json', (req, res, next) => {
  // req.body = req.body.json.slice(0, req.body.json.length - 1);
  // var temp = JSON.parse(req.body);
  console.log('this is from upload_json******req.body ', req.body);
  // res.render('/client/index');
  res.render('index', {jason: req.body});
  // res.send(`<p>${req.rawBody.json}<p>`);

})


// app.post('/hello', (req, res) => {
//   console.log('This is from /hello request********* req.body', req.rawBody.json);
//   res.send('This is from /hello response');
//   // res.redirect('/hello');
// });


app.listen(4000, () => {
  console.log('listening to port 3000');
})
