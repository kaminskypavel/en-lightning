import React, {Component} from 'react';
import './styles.css';
import Button from "@material-ui/core/Button";
import {LightningSpinner} from "../../components/Spinner";
import {getServerURL} from "../../commons/env";
import axios from "axios";
import {Redirect} from "react-router";

export class DonePayment extends Component {

    render() {
        const {invoice} = this.props.match.params;
        return (<div className="Done">
                <header className="Done-header">
                    <h1>Woo Hoo 🎉 {invoice} is Payed</h1>
                </header>
            </div>
        )
    }
}

export default DonePayment;
