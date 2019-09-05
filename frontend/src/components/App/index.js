import React, {Component} from 'react';
import PaymentRequest from "../../Screens/PaymentRequest";
import Vendor from "../../Screens/Vendor";
import {Route, Switch} from "react-router";

class App extends Component {
    render() {
        return <Switch>
            <Route exact path="/vendor" component={Vendor}/>
            <Route path="/" component={PaymentRequest}/>
        </Switch>

    }
}

export default App;
