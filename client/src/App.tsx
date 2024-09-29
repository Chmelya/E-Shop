import classes from './App.module.scss';
import { BreadCrumb } from './components/BreadCrumb/BreadCrumb';
import { Header } from './components/Header/Header';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
// import { ProductPage } from './pages/ProductPage/ProductPage';

function App() {
	return (
		<>
			<Header />
			<div className={classes['page-container']}>
				<BreadCrumb />
				<div>
					<div className={classes['catalog-container']}>
						<CatalogPage />
						{/* <ProductPage /> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
