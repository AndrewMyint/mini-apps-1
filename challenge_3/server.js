
const port = 3000;
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./db/index.js');

console.log(db);
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/create', router);

app.get('/', (req, res) => {
  console.log("Hello from server");
  res.end();
})
router.post('/f1', (req, res) => {
  console.log('inside post f1', req.body);
  db.users.create(req.body)
  .then(()=> {
    console.log('UserData is inserted');
  })
  res.end();

})
router.post('/f2', (req, res) => {
  console.log('inside post f2', req.body);
  db.address.create(req.body)
  .then(()=> {
    console.log('UserData is inserted');
  })
  res.end();

})
router.post('/f3', (req, res) => {
  console.log('inside post f3', req.body);
  db.creditCard.create(req.body)
  .then(()=> {
    console.log('UserData is inserted');
  })
  res.end();
$()

})
app.listen(port, () => {
  console.log("listening to the port:", port);
});

