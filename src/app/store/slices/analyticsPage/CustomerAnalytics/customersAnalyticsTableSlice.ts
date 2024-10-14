import { createSlice } from '@reduxjs/toolkit';
import { getCustomerAnalyticsTableReducer } from './customersAnalyticsTableExtraReducers';
import { customersAnalyticsSliceModel } from 'src/app/models/customersAnalyticsSliceModel';

const initialState: customersAnalyticsSliceModel = {
	customersAnalytics: [
		{
			day: '24 Apr 2024',
			new_customers: 1200,
			purchasing_customers: '420 (12%)',
			customer_groups: '520',
		},
	],
	isLoading: false,
	error: null,
};

const customerAnalyticsSlice = createSlice({
	name: 'customersAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCustomerAnalyticsTableReducer(builder);
	},
});

export default customerAnalyticsSlice.reducer;
