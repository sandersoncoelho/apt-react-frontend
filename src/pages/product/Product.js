import React from 'react';
import './Product.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import bsCustomFileInput from 'bs-custom-file-input'
import { Form, Container, Row, Col, Button, Table, Pagination, Popover, OverlayTrigger, InputGroup, FormControl } from 'react-bootstrap';
import Img from 'react-image';

import { Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	handleOpen() {
		this.setState({show: true});
	}

	handleClose() {
		this.setState({show: false});
	}

	render() {
		const data = [{
			name: 'Sanderson Coelho',
			age: 26,
			friend: {
			name: 'Daniely Cristina',
			age: 23,
			}
		}, {
			name: 'Samara Coelho',
			age: 26,
			friend: {
			name: 'Saymo Coelho',
			age: 23,
			}
		}, {
			name: 'Gloria Monteiro',
			age: 26,
			friend: {
			name: 'Juvenal Coelho',
			age: 23,
			}
		}];

		const columns = [{
			Header: 'Name',
			accessor: 'name' // String-based value accessors!
		}, {
			Header: 'Age',
			accessor: 'age',
			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		}, {
			id: 'friendName', // Required because our accessor is not a string
			Header: 'Friend Name',
			accessor: d => d.friend.name // Custom value accessors!
		}, {
			Header: props => <span>Friend Age</span>, // Custom header components!
			accessor: 'friend.age'
		}];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
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
    </tr>
  </tbody>
</Table>
<Pagination>{items}</Pagination>
<ProductModal show={this.state.show} handleClose={() => this.handleClose()}/>
</div>
			);
	}
}