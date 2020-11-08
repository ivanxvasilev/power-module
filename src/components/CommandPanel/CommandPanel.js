import React from 'react';
import { useSelector } from 'react-redux';
import CommandButton from './CommandButton';

const panelStyle = {
	display: 'flex',
	flexDirection: 'column',
	boxSizing: 'border-box',
	marginRight: '20px',
	marginLeft: '10px',
	backgroundColor: 'white',
	borderRadius: '5px',
	boxShadow: 'gray 0px 2px 5px',
	fontSize: '26px'
};

const buttonRowStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: '10px',
};

const CommandPanel = props => {
	const payloads = useSelector(state => state.payload);

	return (
		<div style={panelStyle}>
			<h2>Command Center</h2>
			<div style={buttonRowStyle}>
				{payloads.map((payload, index) => (
					<CommandButton key={index} {...payload} />
				))}
			</div>
		</div>
	);
};

export default CommandPanel;
