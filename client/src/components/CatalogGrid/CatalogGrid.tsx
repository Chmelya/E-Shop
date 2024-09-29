import { GridCard } from '../GridCard/GridCard';
import classes from './CatalogGrid.module.scss';

export const CatalogGrid = () => {
	return (
		<div className={classes.grid}>
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
			<GridCard />
		</div>
	);
};
