import PageNotFound from 'components/PageNotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';

const RouterView = () => {
    return(
        <div>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "*" component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default RouterView;