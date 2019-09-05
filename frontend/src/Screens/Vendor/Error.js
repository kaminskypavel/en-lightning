import React from 'react';

const Error = ({onDone, error}) => (
  <div className="Vendor-body">

    <h1>ERROR</h1>
    <p>{ error }</p>

    <button onClick={() => onDone()}>done</button>
  </div>
)

export default Error;
