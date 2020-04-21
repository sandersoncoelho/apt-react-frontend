import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes';
import './Content.css';

export default () => {
	return(
		<div className="apt-content">
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}/>
				))}
			</Switch>
		</div>
	);
};