import classes from './GridCard.module.scss';

export const GridCard = () => {
	return (
		<div className={classes.card}>
			<img
				className={classes.image}
				src='https://www.theshirtstore.co.uk/images/stone-island-40823-garment-dyed-nylon-jacket-ivory-p3021-95583_zoom.jpg'
				alt=''
			/>
			<div className={classes.price}>224$</div>
		</div>
	);
};
