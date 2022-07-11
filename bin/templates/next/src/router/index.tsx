import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from "../pages/login";
import Registre from "../pages/registre";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/login/" component={Login} />
            <Route path="/registre/" component={Registre} />
        </Switch>
    );
};
export default Routes;
