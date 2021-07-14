import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
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

	const data = useMemo(
		() => [
			{
				col1: 'Hello',
				col2: 'World',
			},
			{
				col1: 'react-table',
				col2: 'rocks',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Column 2',
				accessor: 'col2',
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

  const search = (currentPage) => {
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

  // useEffect(() => {
		
	// }, [list]);

	const makeSearch = async () => {
		setList(search(0));
		console.log(list);

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
	}

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
			<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
			{/* <Table striped bordered hover>
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
			/> */}

			<ProductModal show={showProductModal} handleClose={handleClose}/>
		</div>
	);
}
