import classNames from 'classnames';
import React from 'react';
import styles from './CommonButton.module.css';

export interface ICommonButton {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

const CommonButton : React.FC<ICommonButton> = (props) => {
	return (
		<button onClick={props.onClick} className={classNames(styles['common-button'], props.className)}>{props.text}</button>
	);
}

export default CommonButton;
