import React from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
	const onClickMenuItem = () => {
		console.log(this);
	};
	return (
		<div className="items">
			<MenuItem to="/working" label="Obras" active={false}/>
			<MenuItem to="/product" label="Produtos" active={true}/>
			<MenuItem to="/store" label="Lojas" active={false}/>
			<MenuItem to="/material-costs" label="Despesa Material" active={false}/>
			<MenuItem to="/working" label="Despesa Serviço" active={false}/>
			<MenuItem to="/working" label="Receita" active={false}/>
			<MenuItem to="/working" label="Balancete" active={false}/>
		</div>
	);
};

const MenuItem = (props) => {
	let history = useHistory();
//() => history.push(props.to)
	const styles = props.active ? "menuItem menuItemActive" : "menuItem";
	return (
		<div className={styles} onClick={props.onClick}>
			<span className="menuLabel">{props.label}</span>
		</div>
	);
}

export default () => {
	return(
		<div className="menuContainer">
			<Menu/>
		</div>
	);
};