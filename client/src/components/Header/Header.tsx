import classes from './Header.module.scss';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={classes.category}>Main</div>
				<div className={classes.category}>Women</div>
				<div className={classes.category}>Man</div>
				<div className={classes.category}>Placeholder1</div>
				<div className={classes.category}>Placeholder1</div>
			</div>
			<SearchBar />
		</header>
	);
};
