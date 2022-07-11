import React from 'react';
import {
    Route as DOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from 'react-router-dom';
import _ from 'lodash';


interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
   isPrivate = false,
   component: Component,
   ...rest}) => {
    const redirectPathname = () => {
        if (isPrivate) return '/';
    };

    return (
        <DOMRoute
            {...rest}
            render={({ location }) => {
                let pathName = _.get(location, 'pathname', '');
                pathName = pathName === '/' ? '' : pathName;
                const search = _.get(location, 'search', '');
                if (pathName || search) {
                    return (
                        <Redirect
                            to={{
                                pathname: redirectPathname(),
                                state: { from: location },
                                search: pathName ? `?redirect=${pathName}` : search
                            }}
                        />
                    )
                }
                return (
                    <Redirect
                        to={{
                            pathname: redirectPathname(),
                            state: { from: location },
                        }}
                    />
                )
            }}
        />
    );
};
export default Route;
