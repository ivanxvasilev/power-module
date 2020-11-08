import React from 'react';
import BatteryPack from './BatteryPack';
import Payload from './Payload';
import { useSelector } from 'react-redux';

const boxStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	margin: '10px 10px 10px 0',
	flexGrow: 2,
};

const rowStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexGrow: 1,
	padding: '5px',
};

const ParameterDisplay = props => {
	const batteries = useSelector(state => state.battery);
	const payloads = useSelector(state => state.payload);

	return (
		<div style={boxStyle}>
			<div style={rowStyle}>
				{batteries.map((value, index) => (
					<BatteryPack key={index} id={index} voltage={value} />
				))}
			</div>
			<div style={rowStyle}>
				{payloads.map((payload, index) => (
					<Payload key={index} {...payload} />
				))}
			</div>
		</div>
	);
};

export default ParameterDisplay;
