import { createSlice } from '@reduxjs/toolkit';
import { getOrderAnalyticsTableReducer } from './orderAnalyticsTableExtraReducers';
import { ordersAnalyticsSliceModel } from 'src/app/models/ordersAnalyticsSliceModel';

const initialState: ordersAnalyticsSliceModel = {
	ordersAnalytics: [
		{
			day: '24 Apr 2024',
			orders: 15,
			average_units_ordered: 200,
			average_order_value: 'phone',
			delivered: 20,
			returned_quantity: 17,
		},
	],
	isLoading: false,
	error: null,
};

const orderAnalyticsSlice = createSlice({
	name: 'ordersAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getOrderAnalyticsTableReducer(builder);
	},
});

export default orderAnalyticsSlice.reducer;
