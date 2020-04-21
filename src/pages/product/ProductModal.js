import React from 'react';
import { Button, Carousel, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Img from 'react-image';
import './Product.css';

export default (props) => {
	return (
	<Modal show={props.show} onHide={() => props.handleClose()}>
		<Modal.Header closeButton >
		<Modal.Title>Produto</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Nome</Form.Label>
				<Form.Control type="text" placeholder="Informe o nome do produto" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="text" placeholder="Informe uma descrição para o produto" />
			</Form.Group>

<div className="carouselContent">
<Img src={require("../../assets/card-image.svg")}/>
<Carousel className="carouselPhoto">
  <Carousel.Item>
    <img
      src={require("../../assets/download1.jpg")}
      	width={168}
    	height={180}
    	className="carouselImage"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    	src={require("../../assets/download2.jpg")}
    	
    	width={168}
    	height={180}
    	className="carouselImage"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    	src={require("../../assets/download3.jpg")}
    	width={168}
    	height={180}
    	className="carouselImage"
    />
  </Carousel.Item>
</Carousel>
</div>



		</Modal.Body>
		<Modal.Footer>
		<Button variant="secondary" onClick={() => props.handleClose()}>
		Cancelar
		</Button>
		<Button variant="primary" onClick={() => props.handleClose()}>
		Salvar
		</Button>
		</Modal.Footer>
	</Modal>
	);
}
