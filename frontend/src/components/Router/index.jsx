import {Route, Router} from "react-router";
import Index from "../App/App";
import React from "react";

export const Router = <Router>
    <Route exact path="/" component={Index}/>
    <Route path="/vendor" component={Index}/>
</Router>
