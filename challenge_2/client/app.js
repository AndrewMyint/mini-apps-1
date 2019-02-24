
console.log("Hello from app.js")
// var connection = new XMLHttpRequest();

// connection.open('GET', 'http://localhost:3000/hello', true);
// connection.open('POST','http://localhost:3000/hello',true);
// connection.onload = function() {
//   if (connection.status === 200) {

//     console.log('Thi is from onload ******** ' + connection.response);
//   } else {
//     console.log('wtf*******', connection.status)
//   }
// }
// connection.send('Hello from client');
// connection.send();
// connection.onreadystatechange = function() {
//   if (connection.readyState === 4 && connection.status === 200) {
//     console.log("Hello from readystateChange", connection.response);
//   }
// }
var helperFunction = function(json) {

  var keys = Object.keys(json).slice(0, 6);
  var valueArray = [];
  keys.forEach((val) => {
     valueArray.push(json[val]);
  })
   var str = valueArray.join() + '\n';
  if (json.children.length > 0) {
      for (var i = 0; i < json.children.length; i++) {
         str += helperFunction(json.children[i]);
    }
    return str;
  } else {
      return str;
  }
}
var formatToCSV =  (req, res, next) => {
  if (req && Object.keys(req.body).length > 0) {
    console.log(req.body);
    req.body = req.body.json.slice(0, req.body.json.length - 1);
    var temp = JSON.parse(req.body);
    var keys = Object.keys(temp).slice(0, 6);
    var str = keys.join() + '\n';
    str += helperFunction(temp);
    req.body = str;
     next();
  }
   next();
}
module.exports = formatToCSV;
/*

The server must flatten the JSON hierarchy,
 mapping each item/object in the JSON to a single line of CSV report (see included sample output),
where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file).
In other words, all sibling records at a particular level of
the hierarchy will have the same set of properties,
 but child objects might not contain the same properties. In all cases,
 every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
*/

// build the form
// connect form data to the server
// response the data to the client
// build helper function or middleware for CSV report
// response the formatted data to the client

// think about how you can response report along with server
// make it possible
