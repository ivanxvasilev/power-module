import React from 'react';

const style = {
	display: 'flex',
	padding: '10px',
	flexGrow: 1,
	height: '98%',
	boxSizing: 'border-box',
	margin: '5px',
	flexDirection: 'column',
	justifyContent: 'space-between',
	maxWidth: '49%',
	backgroundColor: 'white',
	borderRadius: '5px',
	boxShadow: 'gray 0px 2px 5px',
	fontSize: '30px'
};

const Payload = props => {
	const { consumption, name, isActive } = props;

	const message = isActive ? `${consumption.toFixed(1)}A` : 'OFF';

	return (
		<div style={style}>
			<h1 style={{ fontSize: '72px' }}>{message}</h1>
			<div>{name} Current Draw</div>
		</div>
	);
};

export default Payload;
