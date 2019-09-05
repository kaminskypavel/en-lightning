import React, {Component} from 'react';
import './styles.css';
import PaymentRequest from "../../Screens/PaymentRequest";
import {Route, Switch} from "react-router";

class App extends Component {
    render() {
        return <Switch>
            <Route exact path="/" component={PaymentRequest}/>
        </Switch>

    }
}

export default App;
