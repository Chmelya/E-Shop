import { IconType } from 'react-icons';
import classes from './HeaderButton.module.scss';

export declare interface HeaderButtonProps {
	icon: IconType;
}

export const HeaderButton = (props: HeaderButtonProps) => {
	const Icon = props.icon;

	return <Icon className={classes['icon-button']} />;
};
