import React, {Component} from 'react';
import PaymentFlow from "../../Screens/PaymentRequest/PaymentFlow";
import Vendor from "../../Screens/Vendor";
import {Route, Switch} from "react-router";
import DonePayment from "../../Screens/DonePayment";
import PaymentRequest from "../../Screens/PaymentRequest";

class App extends Component {
    render() {
        return <Switch>
            <Route exact path="/vendor" component={Vendor}/>
            <Route exact path="/" component={PaymentFlow}/>
            <Route path="/payment" component={PaymentRequest}/>
            <Route path="/success/:invoice" component={DonePayment}/>
        </Switch>

    }
}

export default App;
