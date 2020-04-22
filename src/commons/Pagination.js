import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationItems = (props) => {
	const {page, current, onSelectPaginationItem} = props;
	let items = [];

	for (let number = 1; number <= page; number++) {
		items.push(
			<Pagination.Item key={number} active={number == current} onClick={() => onSelectPaginationItem(number)}>
				{number}
			</Pagination.Item>
		);
	}

	return items;
}

export default (props) => {
	return <Pagination><PaginationItems {...props}/></Pagination>
}