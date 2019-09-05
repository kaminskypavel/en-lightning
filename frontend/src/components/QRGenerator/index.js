import React from "react";
var QRCode = require('qrcode.react');

export const QRGenerator = ({link}) =>
    <QRCode value={link} level={"Q"}/>

