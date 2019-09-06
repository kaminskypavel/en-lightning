import React, {Component} from 'react'
import QrReader from 'react-qr-reader'

export class QRReader extends Component {
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
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{width: '100%'}}
                    facingMode={'user'}
                />
            </div>
        )
    }
}
