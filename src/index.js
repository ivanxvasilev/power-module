import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import {
	addBattery,
	incrementVoltage,
	decrementVoltage,
} from './reducers/batterySlice';
import {
	addPayload,
	incrementConsumption,
	decrementConsumption,
} from './reducers/payloadSlice';

store.dispatch(addBattery(14));
store.dispatch(addBattery(17));

setTimeout(() => setBatteryLoop(0), 2000);
setTimeout(() => setBatteryLoop(1), 5500);

const obc = { id: 0, name: 'OBC', consumption: 2, isActive: true };
const camera = { id: 1, name: 'Camera', consumption: 2.4, isActive: true };

store.dispatch(addPayload(obc));
store.dispatch(addPayload(camera));

setTimeout(() => setPayloadLoop(0), 1000);
setTimeout(() => setPayloadLoop(1), 4000);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

const setBatteryLoop = index => {
	simulateBattery(index);
	setInterval(() => simulateBattery(index), 8000);
};

const simulateBattery = index => {
	for (let i = 0; i < 6; i++) {
		let delay = i * 500;
		setTimeout(() => store.dispatch(incrementVoltage(index)), delay);
		setTimeout(() => store.dispatch(decrementVoltage(index)), 3500 + delay);
	}
};

const setPayloadLoop = index => {
	simulatePayload(index);
	setInterval(() => simulatePayload(index), 10000);
};

const simulatePayload = index => {
	for (let i = 0; i < 8; i++) {
		let delay = i * 500;
		setTimeout(() => store.dispatch(incrementConsumption(index)), delay);
		setTimeout(() => store.dispatch(decrementConsumption(index)), 5000 + delay);
	}
};