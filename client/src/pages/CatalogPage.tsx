import classes from './CatalogPage.module.scss';
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb';

export const CatalogPage = () => {
	return (
		<div className={classes['page-container']}>
			<BreadCrumb />
			<div className={classes['catalog-container']}>
				<div className={classes.filter}>
					<div className={classes['filter-title']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
					<div className={classes['filter-option']}>Filter</div>
				</div>
				<div className={classes.items}></div>
			</div>
		</div>
	);
};
