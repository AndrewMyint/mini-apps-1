console.log('Hello app.js');
window.player = {
      name: 'player1',
      turn: 'O'
};
window.square = [];
for (var i = 0; i < 9; i++) {
      window.square[i] = '-';
}

// toggle the playerTurn and set text 'X' or 'O'
const toggleTurn = () => {
      if (window.player.turn === 'X') {
            window.player.turn = 'O';
            window.player.name = 'player2'
      } else {
            window.player.turn = 'X';
            window.player.name = 'player1'
      }
      return window.player.turn;
}

var td = document.querySelectorAll("td");
// create Event listener for each 'td'
var check_X = (array) => {
      var bol = true;
      array.forEach((value) => {
            if (value !== 'X') {
                  bol = false;
            }
      })
      return bol;
}

var check_O = (array) => {
      var bol = true;
      array.forEach((value) => {
            if (value !== 'O') {
                  bol = false;
            }
      })

      return bol;
}

var rowWin = () => {
      var row1 = window.square.slice(0, 3);
      var row2 = window.square.slice(3, 6);
      var row3 = window.square.slice(6);

      if (check_O(row1) || check_X(row1)) {
            return true;
      } else if (check_O(row2) || check_X(row2)) {
            return true;
      } else if (check_O(row3) || check_X(row3)) {
            return true;
      }
      return false;
}

var colWin = () => {
      var col1 = window.square.filter((value, index)=> {return index % 3 === 0});
      var col2 = window.square.filter((value, index) => {return index % 3 === 1});
      var col3 = window.square.filter((value, index) => {return index % 3 === 2});

      if (check_O(col1) || check_X(col1)) {
            return true;
      } else if (check_O(col2) || check_X(col2)) {
            return true;
      } else if (check_O(col3) || check_X(col3)) {
            return true;
      }
      return false;
}

var diagonalWin = () => {
      var d1 = window.square.filter((value, index) => {return index % 4 === 0});
      var d2 = window.square.filter((value, index) => {
            if (index !== 0 && index !== 8) {
                  return index % 2 === 0;
            }
      });

      if (check_O(d1) || check_X(d1)) {
            return true;
      } else if (check_O(d2) || check_X(d2)) {
            return true;
      }
      return false;
}

var checkWin = () => {
      if (rowWin()) {
            return true;
      } else if (colWin()) {
            return true;
      } else if (diagonalWin()) {
            return true;
      }
      return false;
}

td.forEach((td, index) => {
      td.clickOnce = true;
      td.addEventListener('click', () => {
            // Each 'td' should give an 'int value' when clicked
            console.log('td: ', index);
            if (td.clickOnce) {
                  // Each 'td' should display 'X', or 'O' when clicked
                  td.textContent = toggleTurn();
                  window.square[index] = td.textContent;
                  // make it disabled after user click
                  td.clickOnce = false;

                  if (checkWin()) {
                        alert(`${window.player.name}  win!!!!`);
                        console.log('winnnnn')
                  }
            }
      })
})

// TODO
// reset button needed
// freeze the program if winner has occured




