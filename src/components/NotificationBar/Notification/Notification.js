import React from 'react';

const initialStyle = {
	margin: '20px',
	padding: '20px 10px',
	borderWidth: '5px',
	borderStyle: 'solid',
	fontSize: '18px',
};

const Notification = (props) => {
	const style = { ...initialStyle, ...props.additionalStyle };

	return <div style={style}>{props.children}</div>;
};

export default Notification;
