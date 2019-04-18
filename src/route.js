import React from 'react';
import {Switch, Route } from 'react-router-dom';

// *******  Routes ******* //

import Form from './component/Form/Form';
import Product from './component/Product/Product';
// import Dashboard from './component/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path="/" component={ Product } />
        <Route path="/form"
                render={props => <Form {...props} />} />
    </Switch>
);