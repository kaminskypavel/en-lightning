import React from 'react';
import './styles.css';
import { QRGenerator } from '../../components/QRGenerator';

const Receipt = ({ onDone, receipt}) => (
  <div className="payment">
    <div className="header">
      <h1>Hold QR in-front of vending machine</h1>
    </div>

    <div className='receipt'>
      <QRGenerator size={ 400 } link={ receipt }/>
    </div>

    <button onClick={ () => onDone() }>DONE</button>

  </div>
);

export default Receipt;
