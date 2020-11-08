import React from 'react';
import Notification from '../Notification';

const style = {
	backgroundColor: '#ffffcc',
	borderColor: '#cccc00',
	color: '#808000',
};

const HighDrawNotification = props => {
	return (
		<Notification additionalStyle={style}>
			{props.name}: High Current Draw
		</Notification>
	);
};

export default HighDrawNotification;
