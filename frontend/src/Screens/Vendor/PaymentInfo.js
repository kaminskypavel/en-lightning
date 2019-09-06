import React from 'react';
import { QRReader } from "../../components/QRReader";
import { QRGenerator } from '../../components/QRGenerator';

const PaymentInfo = ({ onData}) => (
  <div className="Vendor-body">

    <p>1. Scan QR to initiate payment</p>

    <img src="qr.png" alt=""/>

    <p>2. Show payment confirmation to camera to proceed</p>

    <div className="reader">
      <QRReader onData={ onData }/>
    </div>
  </div>
)

export default PaymentInfo;
