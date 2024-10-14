import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { createTaxCategory, getTaxCategoriesList, getTaxCategoriesShow, updateTaxCategory } from './emailSettingAsyncThunks';
import { taxCategoriesSettingsSliceModel } from 'src/app/models/settingsModels/taxCategorySettingsModel';

export const taxCategoriesShowReducer = (
	builder: ActionReducerMapBuilder<taxCategoriesSettingsSliceModel>,
) => {
	builder
		// // get Tax Categories Show data
		.addCase(getTaxCategoriesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxCategoriesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxCategoriesShow = payload.data;
		})
		.addCase(getTaxCategoriesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// // get Tax Categories List data
		.addCase(getTaxCategoriesList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxCategoriesList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxCategoriesList = payload;
		})
		.addCase(getTaxCategoriesList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add tax rate
		.addCase(createTaxCategory.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(createTaxCategory.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(createTaxCategory.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		//  update tax rate
		.addCase(updateTaxCategory.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(updateTaxCategory.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(updateTaxCategory.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
