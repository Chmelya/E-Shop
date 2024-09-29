import { CatalogGrid } from '../../components/CatalogGrid/CatalogGrid';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';

export const CatalogPage = () => {
	return (
		<>
			<CatalogFilter />
			<CatalogGrid />
		</>
	);
};
