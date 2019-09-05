import React, {Component} from 'react';
import PaymentFlow from "../../Screens/PaymentRequest/PaymentFlow";
import Vendor from "../../Screens/Vendor";
import {Route, Switch} from "react-router";

class App extends Component {
    render() {
        return <Switch>
            <Route exact path="/vendor" component={Vendor}/>
            <Route path="/" component={PaymentFlow}/>
        </Switch>

    }
}

export default App;
