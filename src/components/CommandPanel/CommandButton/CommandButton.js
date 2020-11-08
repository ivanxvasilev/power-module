import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../reducers/payloadSlice';

const CommandButton = props => {
	const { id, name, isActive } = props;
	const command = isActive ? 'Disconnect' : 'Reconnect';
	const dispatch = useDispatch();

	return (
		<button
			aria-label="name"
			onClick={() => dispatch(changeStatus(id))}
		>
			{command} {name}
		</button>
	);
};

export default CommandButton;
