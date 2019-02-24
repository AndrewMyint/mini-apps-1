const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const formatToCSV = require('./middleware/csvFormat.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

app.use(bodyParser.urlencoded());
app.set('client', path.join(__dirname + '/client'));
app.set('view engine', 'ejs');
app.use('/',express.static(path.join(__dirname + '/client')));

// app.use(formatToCSV);
// app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.render('/client/index.html');
})
app.post('/upload_json', upload.single('json'), (req, res) => {
  // req.body = req.body.json.slice(0, req.body.json.length - 1);
  // var temp = JSON.parse(req.body);
  fs.readFile(req.file.path, 'utf8',(err, data) => {
    if (err) {
      console.log(err);
    } else {
    // req.body = req.body.json.slice(0, req.body.json.length - 1);
    // var temp = JSON.parse(req.body);
      var csv = formatToCSV(data);
      // console.log('data********',csv);
      res.render('index', {json: csv})
    }
  })
  // res.render('/client/index');
  // res.render('index', {jason: req.body});
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
