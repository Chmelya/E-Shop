import classes from './CatalogPage.module.scss';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { CatalogGrid } from '../../components/CatalogGrid/CatalogGrid';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';

export const CatalogPage = () => {
	return (
		<div className={classes['page-container']}>
			<BreadCrumb />
			<div>
				<div className={classes['catalog-container']}>
					<CatalogFilter />
					<CatalogGrid />
				</div>
			</div>
		</div>
	);
};
