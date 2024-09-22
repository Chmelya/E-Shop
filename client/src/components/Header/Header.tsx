import classes from './Header.module.scss';
import { SearchBar } from '../SearchBar/SearchBar';
import { FaHeart, FaLaravel, FaShoppingCart, FaUser } from 'react-icons/fa';
import { HeaderButton } from '../HeaderButton/HeaderButton';

export const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes['logo-container']}>
				<FaLaravel className={classes.logo} />
				<div className={classes.title}>TheShop</div>
			</div>
			<div className={classes.container}>
				<div className={classes.category}>Main</div>
				<div className={classes.category}>Women</div>
				<div className={classes.category}>Man</div>
				<div className={classes.category}>Placeholder1</div>
				<div className={classes.category}>Placeholder1</div>
			</div>
			<SearchBar />
			<div className={classes['buttons-container']}>
				<HeaderButton icon={FaHeart} />
				<HeaderButton icon={FaUser} />
				<HeaderButton icon={FaShoppingCart} />
			</div>
		</header>
	);
};
