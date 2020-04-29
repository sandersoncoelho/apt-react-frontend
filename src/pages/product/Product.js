import React from 'react';
import './Product.css';
import bsCustomFileInput from 'bs-custom-file-input'
import { Form, Container, Row, Col, Button, Table, Popover, OverlayTrigger, InputGroup, FormControl } from 'react-bootstrap';
import Img from 'react-image';

import { Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';
import Pagination from '../../commons/Pagination';
import { get } from '../../service/ProductService';

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			totalItems: 1000,
			pageSize: 50,
			currentPage: 1,
			list: []
		};
	}

	handleOpen() {
		this.setState({show: true});
	}

	handleClose() {
		this.setState({show: false});
	}

	search() {
		console.log(`currentPage: ${this.state.currentPage}`);
		var items = [
			{name: 'Tijolo', description: 'Tijolo 8 furos', fotos: '@qwer, @wert'},
			{name: 'Cimento', description: 'Cimento Nassau', fotos: '@asdf, @zxcv'}
		];
		this.setState({list: items});
	}



	render() {

/*let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}*/
	const list = [
			{name: 'Tijolo', description: 'Tijolo 8 furos', fotos: '@qwer, @wert'},
			{name: 'Cimento', description: 'Cimento Nassau', fotos: '@asdf, @zxcv'}
		];
	let body = [];
	for (let i = 0; i < list.length; i++) {
		body.push(
			<tr>
			<td>{list[i].name}</td>
			<td>{list[i].description}</td>
			<td>{list[i].fotos}</td>
			<td>
				<div className="optionsCol">
					<Img src={require("../../assets/trash.svg")}/>
					<Img src={require("../../assets/folder.svg")}/>
				</div>
			</td>
			</tr>
		);
	}

	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">Popover right</Popover.Title>
			<Popover.Content>
				And here's some <strong>amazing</strong> content. It's very engaging.
				right?
			</Popover.Content>
		</Popover>
	);

	const Example = () => (
		<OverlayTrigger trigger="click" placement="right" overlay={popover}>
			<a>Pesquise</a>
		</OverlayTrigger>
	);

	return (
		<div className="product-content">
			<div className="searchNewBar">
				<InputGroup>
					<FormControl
						placeholder="Pesquise um produto"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
					<InputGroup.Append>
						<Button><Img src={require("../../assets/search.svg")}/></Button>
					</InputGroup.Append>
				</InputGroup>
				<Button onClick={() => this.handleOpen()}>Novo</Button>
			</div><br/>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Produto</th>
						<th>Descrição</th>
						<th>Fotos</th>
						<th><div className="center"><Img src={require("../../assets/gear.svg")}/></div></th>
					</tr>
				</thead>
				<tbody>
				{body}
    {/*
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <div className="optionsCol">
      <Img src={require("../../assets/trash.svg")}/><Img src={require("../../assets/folder.svg")}/>
      </div>
      </td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <div className="optionsCol">
      <Img src={require("../../assets/trash.svg")}/><Img src={require("../../assets/folder.svg")}/>
      </div>
      </td>
    </tr>
    <tr>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>
      <div className="optionsCol">
      <Img src={require("../../assets/trash.svg")}/><Img src={require("../../assets/folder.svg")}/>
      </div>
      </td>
    </tr>*/}
  </tbody>
</Table>
<Pagination
	totalItems={this.state.totalItems}
	pageSize={this.state.pageSize}
	currentPage={this.state.currentPage}
	search={() => this.search()}/>
<ProductModal show={this.state.show} handleClose={() => this.handleClose()}/>
</div>
		);
	}
}