import React from 'react';
import Notification from '../Notification';

const style = {
	backgroundColor: '#ff8080',
	borderColor: '#b32400',
	color: '#991f00',
};

const ExtremeDrawNotification = props => {
	return (
		<Notification additionalStyle={style}>
			{props.name}: Extreme Current Draw
		</Notification>
	);
};

export default ExtremeDrawNotification;
