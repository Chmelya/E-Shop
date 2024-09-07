import React from 'react';
import './SearchBar.scss';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
	return (
		<div className='search-wrapper'>
			<FaSearch id='search-icon' />
			<input className='search-input' placeholder='Type to search...'></input>
		</div>
	);
};
