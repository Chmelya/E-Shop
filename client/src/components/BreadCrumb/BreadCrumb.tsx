import classes from './BreadCrumb.module.scss';

export const BreadCrumb = () => {
	return (
		<div className={classes.container}>
			<div>Home</div>
			<div>{'>'}</div>
			<div>Clothes</div>
		</div>
	);
};
