import React from 'react';

class Invoice extends React.Component {
  
  render() {
    const price = this.props.coffee[0];
    const name = this.props.coffee[1];

    return (
      <div className="payment">
        <div className="header">
          <h1>Complete your payment</h1>
        </div>

        <p>One { name } for ${ price }</p>
        <button onClick={ () => this.props.onBack() }>back</button>
      </div>
    )
  }
}

export default Invoice;
