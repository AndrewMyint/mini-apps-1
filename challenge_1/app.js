console.log('Hello app.js');

var row1 = document.getElementsByClassName("row1");
console.log(row1.length)

row1[0].addEventListener('click', function(event) {
      console.log('Hello clicked');

})
