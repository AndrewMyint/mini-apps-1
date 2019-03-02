// import db from '../db/index.js'
// import React from 'react';
// console.log(React);
var F1 = (prop) => {
  if (prop.bol) {
    console.log("Hello from F1 ", prop)
    return (
      <form id='target' action="/create/f1" method="post" onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target.length)
        prop.postLoginData(e.target, prop, "/create/f1");
        prop.handleForm(prop);
      }
      }>
        <div>
          <label>username</label>
          <input type="text" name='username' className="username" required />
        </div>
        <div>
          <label>passoword</label>
          <input type="text" name='password' className="password" required />
        </div>
        <input type="submit" name="submit" />
      </form>
    );
  } else {
    // onSubmit={(e)=>{console.log("submmitingg")}}
    return null;
  }

}
var F2 = (prop) => {
  if (prop.bol) {
    return (
      <form id='target1' action='/create/f2' method='post' onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target.length)
        prop.postAddressData(e.target, prop, '/create/f2');
        prop.handleForm(prop);
      }
      }>
        <div>
          <label>Line1</label>
          <input type="text" name='line1' className='line1' />

          <label>Line2</label>
          <input type="text" name='line2' className='line2' />

          <label>City</label>
          <input type="text" name='City' className='city' />

          <label>State</label>
          <input type="text" name='StateName' className='state' />

          <label>zipcode</label>
          <input type="text" name='ZipCode' className='zipcode' />

          <label>Phone Number</label>
          <input type="text" name='PhoneNo' className='phoneNumber' />

          <input type="submit" name='submit' value='next'/>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
var F3 = (prop) => {
  if (prop.bol) {
    return (
      <form id='target2' action='/create/f3' method='post' onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target.length)
        prop.postCreditCardData(e.target, prop, '/create/f3');
        prop.handleForm(prop);
      }
      }>
        <label>Credit Card</label>
        <input type="text" name='cardNumber' className='creditCard' />

        <label>Expiry date</label>
        <input type="text" name='expiryDate' className='expiryDate' />

        <label>CVV</label>
        <input type="text" name='cvv' className='cvv' />

        <label>Billing Zip Code</label>
        <input type="text" name='billingZipCode' className='zipCode' />

        <input type="submit" value="purchase" name='submit'/>
      </form>
    )
  } else {
    return null;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1: false,
      f2: false,
      f3: false
    }
    this.form = { formName: 'checkout' }


  }
  // componentWillMount() {
  //   this.setState({
  //     checkout: true
  //   })
  // }

  handleForm(prop) {
    console.log('inside handleForm, ', this.formName);
    if (prop.formName === "checkout") {
      console.log('inside checkout')
      this.setState({
        checkout: false,
        f1: true,
        f2: false,
        f3: false
      })
      this.formName = 'checkout';
    }
    else if (prop.formName === "f1") {
      console.log('inside f1')
      this.setState({
        checkout: false,
        f1: false,
        f2: true,
        f3: false
      })
    } else if (prop.formName === "f2") {
      console.log('inside f2')
      this.setState({
        checkout: false,
        f1: false,
        f2: false,
        f3: true
      })
    } else if (prop.formName === "f3") {
      console.log('inside f3')
      this.setState({
        checkout: true,
        f1: false,
        f2: false,
        f3: false
      })
    }
  }

  postData(data, url) {
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log('***************inside succuess')
          // this.setState(
          //   {f2 : true}
          // );
        }
      }
    })
  }
  postLoginData(target, prop, url) {
    var userLogin = {}
    for (var i = 0; i < target.length - 1; i++) {
      userLogin[target[i].name] = target[i].value;
    }
    prop.postData(userLogin, url);
  }


  postAddressData(target, prop, url) {
    var address = {}
    for (var i = 0; i < target.length - 1; i++) {
      address[target[i].name] = target[i].value;
    }
    prop.postData(address, url);
  }

  postCreditCardData(target, prop, url) {
    var creditcard = {}
    for (var i = 0; i < target.length - 1; i++) {
      creditcard[target[i].name] = target[i].value;
    }
    prop.postData(creditcard, url);
  }

  render() {
    console.log('this.state.checkout', this.state.checkout)
    if (this.state.checkout) {
      return (<div>
        <button onClick={this.handleForm.bind(this, this.form)} className='checkoutBtn'>checkout</button>
      </div>)
    } else {
      return (
        <div>
          <div> <F1 formName={"f1"} bol={this.state.f1} handleForm={this.handleForm.bind(this)}
            postLoginData={this.postLoginData} postData={this.postData.bind(this)} /></div>

          <div> <F2 formName={"f2"} bol={this.state.f2} handleForm={this.handleForm.bind(this)}
            postAddressData={this.postAddressData} postData={this.postData.bind(this)} /></div>

          <div> <F3 formName={"f3"} bol={this.state.f3} handleForm={this.handleForm.bind(this)}
            postCreditCardData={this.postCreditCardData} postData={this.postData.bind(this)} /></div>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// $( "#target" ).submit(function( event ) {
//   var userLogin = {
//     username: $('.username').value(),
//     password: $('.password').value()
//   }
//   $.ajax({
//     url: '/create/f1',
//     type: 'POST',
//     contentType: 'application/json',
//     data: userLogin
//   })
// });