import React from 'react';
import { QRReader } from "../../components/QRReader";
import { QRGenerator } from '../../components/QRGenerator';

const PaymentInfo = ({ onData}) => (
  <div className="Vendor-body">

    <p>1. Scan QR to initiate payment</p>

    <QRGenerator size={ 300 } link="https://5d720eb385fefb0008be4458--determined-golick-f17160.netlify.com/"/>

    <p>2. Show payment confirmation to camera to proceed</p>

    <div className="reader">
      <QRReader onData={ onData }/>
    </div>
  </div>
)

export default PaymentInfo;
