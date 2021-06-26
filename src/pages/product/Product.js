import React, { useState } from 'react';
import './Product.css';
import bsCustomFileInput from 'bs-custom-file-input'
import { Form, Container, Row, Col, Button, Table, Popover, OverlayTrigger, InputGroup, FormControl } from 'react-bootstrap';
import Img from 'react-image';

import { Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';
import Pagination from '../../commons/Pagination';

export default () => {
  
  const [showProductModal, setShowProductModal] = useState(false);
  const [current, setCurrent] = useState(1);

	const handleOpen = () => {
		setShowProductModal(true);
	};

	const handleClose = () => {
		setShowProductModal(false);
	};

	const onSelectPaginationItem = (i) => {
		setCurrent(i);
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



		return (
			<div className="product-content">
        <Example/>
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
<Pagination page="5" current={current} onSelectPaginationItem={i => onSelectPaginationItem(i)}/>
<ProductModal show={showProductModal} handleClose={handleClose}/>
</div>
			);
}