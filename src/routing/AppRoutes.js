import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes';
import RoutesProvider from './RoutesProvider';
import HomeContainer from '../containers/HomeContainer';

export default () => (
    <RoutesProvider>
        <Switch>
            <Route exact path={routes.home} component={HomeContainer} />
        </Switch>
    </RoutesProvider>
);
