import React from 'react';
import Notification from '../Notification';

const style = {
	backgroundColor: '#ffcc66',
	borderColor: '#e69900',
	color: '#995c00',
};

const LowVoltageNotification = props => {
	return (
		<Notification additionalStyle={style}>
			Battery {props.id + 1}: Low Voltage
		</Notification>
	);
};

export default LowVoltageNotification;
