const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const formatToCSV = require('./middleware/csvFormat.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');
const ejs = require('ejs');
// app.use(bodyParser.text());
app.use(bodyParser.text());
app.set('client', path.join(__dirname + '/client'));
//set the view engine to ejs so that don't need to type for extension
// res.render() will loock in a view folder for the view
app.set('view engine', 'ejs');
app.use('/',express.static(path.join(__dirname + '/client')));
app.get('/', (req, res) => {
  res.render('/client/index.html');
})
// below is post request for file type input
app.post('/upload_json', (req, res) => {
  console.log('inside server post', req.file, req.body);
  // req.body = req.body.json.slice(0, req.body.json.length - 1);
  // var temp = JSON.parse(req.body);
  // fs.readFile(req.body, 'utf8',(err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //   // req.body = req.body.json.slice(0, req.body.json.length - 1);
  //   // var temp = JSON.parse(req.body);
  //   console.log(data);
  //     // var csv = formatToCSV(data);
  //     // res.render('index', {json: csv})
  //   }
  // })
})

// ****** below is accepting value from textarea with ajax request
// app.post('/upload_json', (req, res) => {
//   // req.body = req.body.json.slice(0, req.body.json.length - 1);
//   // var temp = JSON.parse(req.body);
//  var csv = formatToCSV(req.body);
//  var str;
//   res.render('index', {json: csv});
//   // str = ejs.render(csv, 'index', {json: csv});

// //  res.end();
// })

// app.post('/hello', (req, res) => {
//   console.log('This is from /hello request********* req.body', req.rawBody.json);
//   res.send('This is from /hello response');
//   // res.redirect('/hello');
// });


app.listen(5000, () => {
  console.log('listening to port 5000');
})
