import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSubCategories } from './subCategoriesAsyncThunks';
import { subCategoriesTableSliceModel } from 'src/app/models/subCategoriesTableSliceModel';

export const getSubCategoriesReducer = (
	builder: ActionReducerMapBuilder<subCategoriesTableSliceModel>,
) => {
	builder

		.addCase(getSubCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSubCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.subCategories = action.payload;
		})
		.addCase(getSubCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
