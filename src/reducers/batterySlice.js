import { createSlice } from '@reduxjs/toolkit';

export const batterySlice = createSlice({
	name: 'battery',
	initialState: [],
	reducers: {
		addBattery: (state, actions) => {
			state.push(actions.payload);
		},
		incrementVoltage: (state, actions) => {
			let index = actions.payload;
			if (state[index] < 30)
				state[index]++;
		},
		decrementVoltage: (state, actions) => {
			let index = actions.payload;
			if (state[index] > 0)
				state[index]--;
		},
	},
});

export const {
	addBattery,
	incrementVoltage,
	decrementVoltage,
} = batterySlice.actions;

export default batterySlice.reducer;
