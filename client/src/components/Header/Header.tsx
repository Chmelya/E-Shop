import React from 'react';
import './Header.scss';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
	return (
		<header className='App-header'>
			<div className='container-categories'>
				<div className='category'>Main</div>
				<div className='category'>Women</div>
				<div className='category'>Man</div>
				<div className='category'>Placeholder1</div>
				<div className='category'>Placeholder1</div>
			</div>
			<SearchBar />
		</header>
	);
};
