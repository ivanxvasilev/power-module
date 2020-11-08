import React from 'react';
import { useSelector } from 'react-redux';
import LowVoltageNotification from './LowVoltageNotification';
import HighDrawNotification from './HighDrawNotification';
import ExtremeDrawNotification from './ExtremeDrawNotification';

const style = {
	height: '98%',
	boxSizing: 'border-box',
	width: '25%',
	minWidth: '200px',
	marginTop: '17px',
	marginRight: '10px',
	backgroundColor: 'white',
	borderRadius: '5px',
	boxShadow: 'gray 0px 2px 5px',
};

const NotificationBar = props => {
	const batteries = useSelector(state => state.battery);
	const payloads = useSelector(state => state.payload);

	const batteryNotifications = batteries.map((value, i) => {
		return value < 18 ? <LowVoltageNotification key={i} id={i} /> : null;
	});

	const payloadNotifications = payloads.map((payload, index) => {
		if (!payload.isActive || payload.consumption < 2.5) return null;
		if (payload.consumption < 3)
			return <HighDrawNotification key={index} name={payload.name} />;

		return <ExtremeDrawNotification key={index} name={payload.name} />;
	});

	return (
		<div style={style}>
			<h2>Notifications</h2>
			{batteryNotifications}
			{payloadNotifications}
		</div>
	);
};

export default NotificationBar;
