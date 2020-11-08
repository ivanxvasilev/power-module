import { createSlice } from '@reduxjs/toolkit';

export const payloadSlice = createSlice({
	name: 'payload',
	initialState: [],
	reducers: {
		addPayload: (state, action) => {
			state.push(action.payload);
		},
		incrementConsumption: (state, action) => {
			let payload = state[action.payload];
			if (payload.isActive) {
				payload.consumption += 0.1;
			}
		},
		decrementConsumption: (state, action) => {
			let payload = state[action.payload];
			if (payload.isActive && payload.consumption > 0) {
				payload.consumption -= 0.1;
			}
		},
		changeStatus: (state, action) => {
			const payload = state[action.payload];

			payload.isActive = !payload.isActive;
			payload.consumption = payload.isActive ? 2 : 0;
		},
	},
});

export const {
	addPayload,
	incrementConsumption,
	decrementConsumption,
	changeStatus,
} = payloadSlice.actions;

export default payloadSlice.reducer;
