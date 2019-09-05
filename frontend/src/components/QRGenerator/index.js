import React from "react";
var QRCode = require('qrcode.react');

export const QRGenerator = ({link, size=200}) =>
    <QRCode value={link} size={size} level={"Q"}/>

