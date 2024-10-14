import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCategoriesTable, getCategoryInfo, PostAddCategoryRequest, PutUpdateCategoryRequest } from './categoriesTableAsyncThunks';
import { categoriesTableSliceModel } from 'src/app/models/categoriesTableSliceModel';

export const getCategoriesReducer = (
	builder: ActionReducerMapBuilder<categoriesTableSliceModel>,
) => {
	builder
		.addCase(getCategoriesTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCategoriesTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.categoriesTable = payload?.data;
		})
		.addCase(getCategoriesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.categoriesTable = [];
		})



		// add category
		.addCase(PostAddCategoryRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddCategoryRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddCategoryRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})


		// update category
		.addCase(PutUpdateCategoryRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PutUpdateCategoryRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PutUpdateCategoryRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})


		// getCategory info 
		.addCase(getCategoryInfo.pending, (state) => {
			state.isLoading = true;


		})
		.addCase(getCategoryInfo.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.categoryInfo = payload.data
		})
		.addCase(getCategoryInfo.rejected, (state, action) => {
			state.isLoading = false;

		});
};
