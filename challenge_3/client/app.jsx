var F1 = (prop) => {
  if (prop.bol) {
    console.log("Hello from F1 ", prop)
    return (
      <form action="">
        <div>
          <label>username</label>
          <input type="text" name='username' className="username" required />
        </div>
        <div>
          <label>passowrd</label>
          <input type="text" name='passowrd' className="password" required />
        </div>
        <input type="submit" name="submit" value="Login" onClick={() => { prop.handleForm(prop)}} />
      </form>
    );
  } else {
    return null;
  }

}
var F2 = (prop) => {
  if (prop.bol) {
    return (
      <form>
        <div>
          <label>Line1</label>
          <input type="text" name='line1' className='line1' />

          <label>Line2</label>
          <input type="text" name='line2' className='line2' />

          <label>City</label>
          <input type="text" name='city' className='city' />

          <label>State</label>
          <input type="text" name='state' className='state' />

          <label>zipcode</label>
          <input type="text" name='zipcode' className='zipcode' />

          <label>Phone Number</label>
          <input type="text" name='phoneNumber' className='phoneNumber' />

          <input type="submit" name='submit' value='next' onClick={() => { prop.handleForm(prop)}} />
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
      <form>
        <label>Credit Card</label>
        <input type="text" name='creditCard' className='creditCard' />

        <label>Expiry date</label>
        <input type="text" name='expiryDate' className='expiryDate' />

        <label>CVV</label>
        <input type="text" name='cvv' className='cvv' />

        <label>Billing Zip Code</label>
        <input type="text" name='zipCode' className='zipCode' />

        <input type="submit" value="purchase" name='submit' onClick={() => { prop.handleForm(prop)}}/>
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
    this.formName = "checkout"
  }
  // componentWillMount() {
  //   this.setState({
  //     checkout: true
  //   })
  // }
  handleForm(prop) {
    console.log('inside handleForm, ',this.formName);
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
  render() {
    console.log('this.state.checkout', this.state.checkout)
    if (this.state.checkout) {
      return (<div>
        <button onClick={this.handleForm.bind(this, this)} className='checkoutBtn'>checkout</button>
      </div>)
    } else {
      return (
        <div>
          <div> <F1 formName={"f1"} bol={this.state.f1} handleForm={this.handleForm.bind(this)} /></div>
          <div> <F2 formName={"f2"} bol={this.state.f2} handleForm={this.handleForm.bind(this)} /></div>
          <div> <F3 formName={"f3"} bol={this.state.f3} handleForm={this.handleForm.bind(this)} /></div>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

