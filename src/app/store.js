import { configureStore } from "@reduxjs/toolkit";
import payloadReducer from "../reducers/payloadSlice";
import batteryReducer from "../reducers/batterySlice";

export default configureStore({
	reducer: {
		battery: batteryReducer,
		payload: payloadReducer,
	},
});
