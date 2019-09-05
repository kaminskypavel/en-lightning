import React from 'react';
import Selector from './Selector';
import Invoice from './Invoice';

class PaymentFlow extends React.Component {
  state = {
    selected: null,
    paymentHash: null,
    receipt: null
  };

  handleSelect = coffee => {
    this.setState({
      selected: coffee,
      paymentHash: null,
      receipt: null
    })
  }

  render() {
    const { selected, paymentHash, receipt } = this.state;

    return (
      <div className="PaymentFlow">

        { selected === null && <Selector onSelect={ this.handleSelect }/> }

        { selected && receipt === null && <Invoice onBack={ () => this.setState({ selected: null } ) } coffee={ selected } /> }
      </div>
    )
  }
}

export default PaymentFlow;
