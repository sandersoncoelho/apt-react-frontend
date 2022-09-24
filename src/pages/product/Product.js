// import { useState } from "react";
import "./Product.css";
import bsCustomFileInput from "bs-custom-file-input";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Popover,
  OverlayTrigger,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import Img from "react-image";

import { Modal } from "react-bootstrap";
import ProductModal from "./ProductModal";
import Pagination from "../../commons/Pagination";
import { get } from "../../service/ProductService";
import Table from "../../components/Table/index";
import * as S from "./styles";
import { products } from "./ProductRepository";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const Product = () => {
  // const [showProductModal, setShowProductModal] = useState(false);
  // const [totalItems, setTotalItems] = useState(1000);
  // const [pageSize, setPageSize] = useState(50);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [list, setList] = useState([]);
  // const [body, setBody] = useState([]);

  // const search = (currentPage) => {
  //   console.log(`currentPage: ${currentPage}`);
  //   return [
  //     { name: "Tijolo", description: "Tijolo 8 furos", fotos: "@qwer, @wert" },
  //     { name: "Cimento", description: "Cimento Nassau", fotos: "@asdf, @zxcv" },
  //   ];
  // };

  // const handleOpen = () => {
  //   setShowProductModal(true);
  // };

  // const handleClose = () => {
  //   setShowProductModal(false);
  // };

  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Title as="h3">Popover right</Popover.Title>
  //     <Popover.Content>
  //       And here's some <strong>amazing</strong> content. It's very engaging.
  //       right?
  //     </Popover.Content>
  //   </Popover>
  // );

  // const Example = () => (
  //   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  //     <a>Pesquise</a>
  //   </OverlayTrigger>
  // );

  /*let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}*/

  // useEffect(() => {

  // }, [list]);

  // const makeSearch = async () => {
  //   setList(search(0));
  //   console.log(list);

  //   for (let i = 0; i < list.length; i++) {
  //     body.push(
  //       <tr key={i}>
  //         <td>{list[i].name}</td>
  //         <td>{list[i].description}</td>
  //         <td>{list[i].fotos}</td>
  //         <td>
  //           <div className="optionsCol">
  //             <Img src={require("../../assets/trash.svg")} />
  //             <Img src={require("../../assets/folder.svg")} />
  //           </div>
  //         </td>
  //       </tr>
  //     );
  //   }
  // };

  const renderCardContainer = () => {
    return (
      <S.CardContainer>
        {products.map((item) => (
          <S.Card>
            <S.CardTitle>{item.name}</S.CardTitle>
            <img
              src={item.image}
              width={100}
              height={100}
              className="carouselImage"
            />
            <S.CardDescription>{item.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.CardContainer>
    );
  };

  return (
    <div className="product-content">
      <div className="searchNewBar">
        <InputGroup>
          <FormControl
            placeholder="Pesquise um produto"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          {/* <InputGroup.Append> */}
          <Button>
            {/* <Img src={require("../../assets/search.svg")} /> */}
            <ReactSVG src="assets/search.svg" />
          </Button>
          {/* </InputGroup.Append> */}
        </InputGroup>
        <Button onClick={() => {}}>Novo</Button>
      </div>
      <br />
      {/* <Table /> */}
      {
        renderCardContainer()
        /*
      <S.Thing>Hello world!</S.Thing>
      <S.Thing>How ya doing?</S.Thing>
      <S.Thing className="something">The sun is shining...</S.Thing>
      <div>Pretty nice day today.</div>
      <S.Thing>Don't you think?</S.Thing>
      <div className="something-else">
        <S.Thing>Splendid.</S.Thing>
      </div>

      <S.Input defaultValue="@probablyup" type="text" />
      <S.Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <S.Link>Unstyled, boring Link</S.Link>
      <S.StyledLink>Styled, exciting Link</S.StyledLink>
      <S.StyledButton>teste</S.StyledButton>
      <S.TomatoButton>tsetete</S.TomatoButton>
      <S.ReversedButton>estou testando novamente</S.ReversedButton>
      <S.Wrapper>
        <S.StyledTitle>TESTESTE</S.StyledTitle>
      </S.Wrapper>
      
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
			/> */
      }
      {/* <ProductModal show={showProductModal} handleClose={handleClose} /> */}
      {/* <Modal
        show={showProductModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Product;
