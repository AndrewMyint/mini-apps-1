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
var formatToCSV =  (data) => {
    // console.log(req.body);
    data = data.slice(0, data.length - 1);
    var temp = JSON.parse(data);
    var keys = Object.keys(temp).slice(0, 6);
    var str = keys.join() + '\n';
    str += helperFunction(temp);
    return str;
    //  next();

  //  next();
}
module.exports = formatToCSV;