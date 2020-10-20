import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Heatmap from '../pages/Heatmap';
import Home from '../pages/Home';
import Register from '../pages/Register';

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/heatmap" component={Heatmap} />
        </Switch>
    );
}