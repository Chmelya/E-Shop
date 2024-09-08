import classes from './SearchBar.module.scss';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
	return (
		<div className={classes['search-wrapper']}>
			<FaSearch className={classes['search-icon']} />
			<input
				className={classes['search-input']}
				placeholder='Type to search...'
			></input>
		</div>
	);
};
