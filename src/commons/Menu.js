import React from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

const MenuItem = (props) => {
	let history = useHistory();

	return (
		<div className="menuItem" onClick={() => history.push(props.to)}>
			<span className="menuLabel">{props.label}</span>
		</div>
	);
}

export default () => {
	return(
		<div className="menu">
			<div className="items">
			<MenuItem to="/working" label="Obras"/>
			<MenuItem to="/product" label="Produtos"/>
			<MenuItem to="/store" label="Lojas"/>
			<MenuItem to="/material-costs" label="Despesa Material"/>
			<MenuItem to="/working" label="Despesa Serviço"/>
			<MenuItem to="/working" label="Receita"/>
			<MenuItem to="/working" label="Balancete"/>
			</div>
		</div>
	);
};