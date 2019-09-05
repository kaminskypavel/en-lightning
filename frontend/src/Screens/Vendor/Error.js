import React from 'react';

const Error = ({ error, onDone }) => (
  <div className='error'>
    <h2>ERROR</h2>
    <h1>{ error }</h1>

    <button onClick={ () => onDone() }>Back</button>
  </div>
)

export default Error;
