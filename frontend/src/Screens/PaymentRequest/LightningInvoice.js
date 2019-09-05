import React from 'react';

const LightningInvoice = ({ invoice }) => (
  <div>

    <p className='ln-invoice'>
     { invoice }
    </p>

    <a className="button main-button" target="_blank" href={ `lightning://${ invoice }`}>PAY WITH LIGHTNING</a>
  </div>
)

export default LightningInvoice;
