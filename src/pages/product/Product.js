import React, { useState, useEffect } from 'react';
import './Product.css';
import bsCustomFileInput from 'bs-custom-file-input'
import { Form, Container, Row, Col, Button, Table, Popover, OverlayTrigger, InputGroup, FormControl } from 'react-bootstrap';
import Img from 'react-image';

import { Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';
import Pagination from '../../commons/Pagination';
import { get } from '../../service/ProductService';

export default () => {
  
  const [showProductModal, setShowProductModal] = useState(false);
  const [totalItems, setTotalItems] = useState(1000);
	const [pageSize, setPageSize] = useState(50);
	const [currentPage, setCurrentPage] = useState(0);
	const [list, setList] = useState([]);
	const [body, setBody] = useState([]);

  const search = async (currentPage) => {
    console.log(`currentPage: ${currentPage}`);
    return([
      {name: 'Tijolo', description: 'Tijolo 8 furos', fotos: '@qwer, @wert'},
      {name: 'Cimento', description: 'Cimento Nassau', fotos: '@asdf, @zxcv'}
    ]);
  };

  const handleOpen = () => {
		setShowProductModal(true);
	};

	const handleClose = () => {
		setShowProductModal(false);
	};

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

	

/*let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}*/

  useEffect(() => {
		for (let i = 0; i < list.length; i++) {
			body.push(
				<tr key={i}>
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
	}, [list]);

  return(
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
				<Button onClick={handleOpen}>Novo</Button>
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
				</tbody>
			</Table>
			<Pagination
				totalItems={totalItems}
				pageSize={pageSize}
				currentPage={currentPage}
				search={() => search()}
			/>

			<ProductModal show={showProductModal} handleClose={handleClose}/>
		</div>
	);
}
