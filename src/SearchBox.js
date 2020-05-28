import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<input
			className="pa3 ba b--green bg-lighest-blue"
			type="search"
			placeholder="search robots"
			onChange={searchChange}
		/>
	);
};

export default SearchBox;
