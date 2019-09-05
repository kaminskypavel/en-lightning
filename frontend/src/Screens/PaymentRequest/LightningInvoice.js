import React from 'react';

const LightningInvoice = ({ invoice }) => (
  <div>

    <p>
     { invoice }
    </p>

    <a className="button main-button" href={ `lightning://${ invoice }`}>PAY WITH LIGHTNING</a>
  </div>
)

export default LightningInvoice;
