import React, {Component} from 'react';
import './styles.css';
import {QRReader} from "../../components/QRReader";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class extends Component {
    state = {
        showSpinner: false
    }

    render() {
        return (
            <div className="Vendor">
                <header className="Vendor-header">
                    <QRReader/>

                    <div>
                        <CircularProgress/>
                    </div>
                </header>
            </div>
        );
    }
}

