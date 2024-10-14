import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { createTaxRate, getTaxRatesList, getTaxRatesShow, updateTaxRate } from './taxRateAsyncThunks';
import { taxRateSettingsSliceModel } from 'src/app/models/settingsModels/taxRateSettingsModel';

export const taxCategoriesShowReducer = (
	builder: ActionReducerMapBuilder<taxRateSettingsSliceModel>,
) => {
	builder
		// // get Tax RAtes list
		.addCase(getTaxRatesList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxRatesList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesList = payload.data;
		})
		.addCase(getTaxRatesList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// // get Tax Rates Show
		.addCase(getTaxRatesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxRatesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesShow = payload.data;
		})
		.addCase(getTaxRatesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add tax rate
		.addCase(createTaxRate.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(createTaxRate.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(createTaxRate.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		//  update tax rate
		.addCase(updateTaxRate.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(updateTaxRate.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(updateTaxRate.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

};
