import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationItems = (props) => {
	const {totalItems, pageSize, currentPage, search} = props;
	let items = [];

	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number == currentPage} onClick={() => search()}>
				{number}
			</Pagination.Item>
		);
	}

	return items;
}

export default (props) => {
	return <Pagination><PaginationItems {...props}/></Pagination>
}