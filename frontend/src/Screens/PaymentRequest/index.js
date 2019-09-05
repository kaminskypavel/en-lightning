import React, {Component} from 'react';
import './styles.css';
import Button from "@material-ui/core/Button";
import {LightningSpinner} from "../../components/Spinner";
import {getServerURL} from "../../commons/env";

class PaymentReuqest extends Component {
    state = {
        showSpinner: false
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.showSpinner &&
                    <div>
                        <LightningSpinner/>
                        <p>Waiting For A Payment</p>
                    </div>
                    }
                    <div>

                    </div>
                    <br/>
                    {!this.state.showSpinner &&
                    <Button variant="contained" color="primary" onClick={() => this.openWallet()}>
                        Start Payment
                    </Button>
                    }
                </header>
            </div>
        );
    }

    async generateInvoice() {
        const res = await axios.get(`${getServerURL()}/invoice`);
    }

    async openWallet() {
        this.setState({showSpinner: true});
        const invoiceId = await this.generateInvoice();
        alert(invoiceId)
        // setTimeout(() => {
        //     window.open("lightning://8DAuGnTQCLpuyB3uhsWfC2eMQ174py1UD457Pabeumgi4svvJ22cumpiNjECpytQHmsiejWwXLf7w2UwTZuLh2a2B2dcFBriQCxSjgPssYJ7LCMewVs6ZuayAGoLkWzSdrHdiSX1DYmfXoeF2CMGR8gBf4493N2Gsfj94jyWMxS.png")
        // }, 2000)
    }
}

export default PaymentReuqest;
