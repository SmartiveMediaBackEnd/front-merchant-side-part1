import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getProductsAnalyticsTable } from './productsAnalyticsTableAsyncThunks';
import { productsAnalyticsSliceModel } from 'src/app/models/productsAnalyticsSliceModel';

export const getProductsAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<productsAnalyticsSliceModel>,
) => {
	builder
		// get products analytics table
		.addCase(getProductsAnalyticsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getProductsAnalyticsTable.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.productsAnalytics = payload?.data;
		})
		.addCase(getProductsAnalyticsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
