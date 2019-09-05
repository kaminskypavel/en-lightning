import React, {Component} from 'react';
import './styles.css';
import Button from "@material-ui/core/Button";
import {LightningSpinner} from "../../components/Spinner";
import {getServerURL} from "../../commons/env";
import axios from "axios";

class PaymentReuqest extends Component {
    state = {
        showSpinner: false
    };

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
                    <Button variant="contained" color="primary"
                            onClick={() => this.openWallet(1000)}>
                        Start Payment
                    </Button>
                    }
                </header>
            </div>
        );
    }

    async generateInvoice(amount = 1000) {
        const {data: res} = await axios.get(`${getServerURL()}/payment/invoice?amount=${amount}`);
        return res.data.invoice;
    }

    async openWallet(amount) {
        this.setState({showSpinner: true});
        const invoice = await this.generateInvoice(amount);
        const paylink = `${getServerURL()}/payment/pay?invoice=${invoice.id}`;
        window.open(paylink);
        this.pollIsPayed(invoice.id)
    }

    async pollIsPayed(invoiceId) {
        const timer = setInterval(async () => {
            const {data: res} = await axios.get(`${getServerURL()}/payment/isPayed?invoice=${invoiceId}`)
            console.log(res);
            if (res.data.paid) {
                clearInterval(timer);
                return this.props.history.push(`/success/${invoiceId}`)
            }
        }, 4000)
    }
}

export default PaymentReuqest;
