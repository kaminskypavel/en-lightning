import React from 'react';
import SmallSpinner from '../../components/Spinner/Small';
import LightningInvoice from './LightningInvoice';

class Invoice extends React.Component {
  constructor() {
    super()

    this.generateInvoice()
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
    this.setState({ polls: this.state.polls + 1 })

    if (this.state.polls > 4) {
      this.clearPolling()
      this.props.onPaid("aaa")
    }

  }

  handleInvoice = () => {
    const handle = setInterval(this.pollInvoice, 500)
    this.setState({ invoice: 'aaaaa', id: 1000, handle })
  }

  generateInvoice = () => {
    setTimeout(() => this.handleInvoice(), 100)
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
