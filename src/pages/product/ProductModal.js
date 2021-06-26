import React, { useState } from 'react';
import { Button, Carousel, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Img from 'react-image';
import './Product.css';


export default (props) => {

	const [{
    description
  }, setState] = useState({ description: ''});


	const handleSubmit = () => {
		console.log(`description ${description}`);
	};

	const handleChange = (name, value) => {
		console.log(`handle change: ${name} ${value}`);
    setState(prevState => ({ ...prevState, [name]: value }));
  };

	return (
		<Modal show={props.show} onHide={() => props.handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>Produto</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Nome</Form.Label>
					<Form.Control type="text" placeholder="Informe o nome do produto" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Descrição</Form.Label>
					<Form.Control
						name="description"
						type="text"
						placeholder="Informe uma descrição para o produto"
						value={description}
						onChange={event => handleChange(event.target.name, event.target.value)}/>
				</Form.Group>

				<div className="carouselContent">
					<Img src={require("../../assets/card-image.svg")} />
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
				<Button variant="primary" onClick={handleSubmit}>
					Salvar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
