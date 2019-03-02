// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user: 'root',
//   password: '',
//   database: 'checkout'
// })

// connection.connect((err) => {
//   if (err) {
//     console.log('database is not connected: ', err);
//   } else {
//     console.log('database is successfully connected');
//   }
// });


// var db_post = {
//   user: function(table, dataAray) {
//     post : connection.query("INSERT INTO users (Username, UserPassword) VALUES ('andrew', 'andrew11234')", (err, results, fields) => {
//       if (err) {
//         console.log('inside insert query', err);
//       } else {
//         console.log("results########", results);
//         console.log("fields##########", fields);
//       }
//     })
//   }
// }

const Sequelize = require('sequelize');
const db = new Sequelize('checkout', 'root', '', { dialect: 'mysql' });

const users = db.define('users', {
//userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

const address = db.define('address', {
  // addressID: {
  //   type: Sequelize.INTEGER, references: {
  //     model: users,
  //     key: 'userId',
  //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  //   }
  // },
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  City: Sequelize.STRING,
  StateName: Sequelize.STRING,
  ZipCode: Sequelize.STRING,
  PhoneNo: Sequelize.STRING

})

const creditCard = db.define('creditCard', {
  // cardId: {
  //   type: Sequelize.INTEGER, references: {
  //     model: users,
  //     key: 'userId',
  //     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  //   }
  // },
  cardNumber: Sequelize.STRING,
  expiryDate: Sequelize.STRING,
  cvv: Sequelize.STRING,
  billingZipCode: Sequelize.STRING,
})
address.belongsTo(users);
users.hasMany(creditCard)
  module.exports = {
    users: users,
    address: address,
    creditCard: creditCard
  }
// db.sync({force : true});
// module.exports = {name : 'john'}