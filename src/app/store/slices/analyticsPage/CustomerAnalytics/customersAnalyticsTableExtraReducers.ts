import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCustomersAnalyticsTable } from './customersAnalyticsTableAsyncThunks';
import { customersAnalyticsSliceModel } from 'src/app/models/customersAnalyticsSliceModel';

export const getCustomerAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<customersAnalyticsSliceModel>,
) => {
	builder
		// get customer analytics table
		.addCase(getCustomersAnalyticsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCustomersAnalyticsTable.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.customersAnalytics = payload?.data;
		})
		.addCase(getCustomersAnalyticsTable.rejected, (state) => {
			state.isLoading = false;
			state.error = null;
		});
};
