import React from 'react';
import Selector from './Selector';
import Invoice from './Invoice';
import Receipt from './Receipt';

const EMPTY_STATE = {
  selected: null,
  paymentHash: null,
  receipt: null
}
class PaymentFlow extends React.Component {
  state = Object.assign({}, EMPTY_STATE)


  handleSelect = coffee => {
    this.setState({
      selected: coffee,
      paymentHash: null,
      receipt: null
    })
  }

  handlePaid = receipt => {
    console.log('Paid', receipt)
    this.setState({ receipt })
  }

  render() {
    const { selected, receipt } = this.state;

    return (
      <div className="PaymentFlow">

        { selected === null && receipt === null && <Selector onSelect={ this.handleSelect }/> }

        {
          selected && receipt === null &&
            <Invoice
              onPaid={ this.handlePaid }
              onBack={ () => this.setState({ selected: null } ) }
              coffee={ selected } />
        }

        { receipt && <Receipt receipt={ receipt } onDone={ () => this.setState(EMPTY_STATE) }/>}
      </div>
    )
  }
}

export default PaymentFlow;
