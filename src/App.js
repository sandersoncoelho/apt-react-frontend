import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

import Menu from './commons/Menu';
import Content from './commons/Content';

import 'bootstrap/dist/css/bootstrap.min.css';

const Background = styled.div`
	background-color: #FFFFFF;
  width: 100%;
`;

const Header = styled.div`
	top: 0px;
	left: 0px;
	position: absolute;
	background-color: #337DFF;
	width: 100%;
	height: 50px;
`;

export default class Apt extends React.Component {
	render() {
		return (
			<Background>
				<Router>
					<Header></Header>
					<Menu></Menu>
					<Content></Content>
				</Router>
			</Background>
		);
	}
}