import React from 'react';

const Working = ({onDone, name}) => (
  <div className="Vendor-body">

    <p>Your {name} is being prepared...</p>

    <div className="spinner">
      <img src="spinner.gif" alt=""/>
    </div>

    <button onClick={() => onDone()}>done</button>
  </div>
)

export default Working;
