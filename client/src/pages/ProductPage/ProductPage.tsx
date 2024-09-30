import classes from './ProductPage.module.scss';

export const ProductPage = () => {
	return (
		<div className={classes.grid}>
			<div className={classes['images']}>
				<div className={classes['image-container']}>
					<img
						className={classes.image}
						src='https://www.theshirtstore.co.uk/images/stone-island-40823-garment-dyed-nylon-jacket-ivory-p3021-95583_zoom.jpg'
						alt=''
					/>
				</div>
				<div className={classes['image-container']}>
					<img
						className={classes.image}
						src='https://www.theshirtstore.co.uk/images/stone-island-40823-garment-dyed-nylon-jacket-ivory-p3021-95583_zoom.jpg'
						alt=''
					/>
				</div>
				<div className={classes['image-container']}>
					<img
						className={classes.image}
						src='https://www.theshirtstore.co.uk/images/stone-island-40823-garment-dyed-nylon-jacket-ivory-p3021-95583_zoom.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className={classes['image-container']}>
				<img
					className={classes.image}
					src='https://www.theshirtstore.co.uk/images/stone-island-40823-garment-dyed-nylon-jacket-ivory-p3021-95583_zoom.jpg'
					alt=''
				/>
			</div>
			<div className={classes.description}>
				<div className={classes.title}>
					TIIIIITLEEE TIIIIITLEEE TIIIIITLEEE TIIIIITLEEEq 2315123
				</div>
				<div className={classes['price-container']}>
					<div className={classes['discount-price']}>127$</div>
					<div className={classes.price}>204$</div>
				</div>
				<div className={classes['description-text']}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic
				</div>
				<div className={classes['select-size']}>SELECT SIZE</div>
				<div className={classes['size-container']}>
					<div className={classes['size-box']}>XS</div>
					<div className={classes['size-box']}>S</div>
					<div className={classes['size-box']}>M</div>
					<div className={classes['size-box']}>L</div>
					<div className={classes['size-box']}>XL</div>
				</div>
				<div className={classes['cart-button']}>ADD TO CART</div>
				<div className={classes['category-container']}>
					<div>Category:</div>
					<div>T-Shirt, Man</div>
				</div>
				<div className={classes['tag-container']}>
					<div>Tags:</div>
					<div>Casual, Sport</div>
				</div>
			</div>
		</div>
	);
};
