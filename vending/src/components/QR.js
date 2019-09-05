import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QR extends Component {
  handleScan = data => {
    if (data) {
      this.props.onData(data)
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div className="qr">
        <h2>1. Scan the QR bellow for payment options</h2>
        <img src="qr.png" alt=""/>
        <h2>2. Show confirmed payment QR to the camera</h2>
        <div className="reader">
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{width: '100%'}}
          />
        </div>
      </div>
    )
  }
}

export default QR
