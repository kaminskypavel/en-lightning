import React from 'react';
import SmallSpinner from '../../components/Spinner/Small';
import LightningInvoice from './LightningInvoice';

const SERVER = 'http://192.168.43.206:4567'

class Invoice extends React.Component {
  constructor(props) {
    super()

    this.generateInvoice(props.coffee)
  }

  state = {
    invoice: null,
    id: null,
    polls: 0,
  }


  clearPolling = () => {
    if (this.state.handle) {
      clearInterval(this.state.handle)
      this.setState({ handle: null, polls: 0 })
    }
  }

  componentWillUnmount() {
    this.clearPolling();
  }

  pollInvoice = () => {
    console.log("Check...")
    fetch(`${ SERVER }/check?id=${ this.state.id } `)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        if (data.ready) {
          this.clearPolling();
          this.props.onPaid(data.secret)
        }
      })
  }

  handleInvoice = (data) => {
    const handle = setInterval(this.pollInvoice, 500)
    this.setState({ invoice: data.request, id: data.r_hash, handle })
  }

  generateInvoice = (coffee) => {
    const url = `${ SERVER }/add?value=${ coffee[0]}&note=${ coffee[1] }`
    console.log('URL', url);
    
    fetch(url)
      .then(response => response.json())
      .then(this.handleInvoice)
  }

  render() {
    const price = this.props.coffee[0];
    const name = this.props.coffee[1];
    const { invoice, id } = this.state;

    return (
      <div className="payment">
        <div className="header">
          <h1>Complete your payment</h1>
        </div>

        <p>One { name } for ${ price }</p>

        { !id && <SmallSpinner /> }

        { invoice && <LightningInvoice invoice={ invoice }/> }

        <button onClick={ () => this.props.onBack() }>back</button>
      </div>
    )
  }
}


export default Invoice;
