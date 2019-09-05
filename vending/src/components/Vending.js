import React from 'react';
import Spinner from './common/Spinner';

const Vending = ({ type }) => (
  <div>
    <h1>Vending coffee: { type }</h1>
    <Spinner />
    <iframe src="https://giphy.com/embed/Dcqmvo1kzZR0A" width="480" height="270" frameBorder="0" className="giphy-embed"
            allowFullScreen></iframe>
  </div>
)

export default Vending;
