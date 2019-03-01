// first couple of tell that you must you inblah blah factor
//the 3rd question is un mixing problem
  // give you a hint that dy/dt is rate out rate in
  // do not specify on this one which method to use differial equation
// paramatric equation
  // eliminate the T parameter
  // do not solve solve for the y, write in term of x and y
// derivative of differial problem,
// 2 part 1 is arc lengh, solve entire integral
  // part 2 is surface problem
  const port = 3000;
  const express = require('express');
  const path = require('path');
  const app = express();

  app.use('/', express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
    console.log("Hello from server");
    res.end();
  })

  app.listen(port, () => {
    console.log("listening to the port:", port);
  });

