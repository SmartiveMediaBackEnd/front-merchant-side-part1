import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllProductsTable, getProduct, getProductFilters, PostSimpleQuickProduct, PostUpdateQuickProduct } from './allProductsAsyncThunks';
import { productsSliceModel } from 'src/app/models/allProductsSliceModel';

// const error: string | null;
export const getAllProductsReducer = (builder: ActionReducerMapBuilder<productsSliceModel>) => {
	builder
		// get products table
		.addCase(getAllProductsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllProductsTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allProducts = payload?.data;
		})
		.addCase(getAllProductsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.allProducts = [];
		})

		// add product 
		.addCase(PostSimpleQuickProduct.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostSimpleQuickProduct.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
			state.allProducts = payload;

		})
		.addCase(PostSimpleQuickProduct.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.error.message;

		})

		// update product 
		.addCase(PostUpdateQuickProduct.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostUpdateQuickProduct.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
			state.allProducts = payload;

		})
		.addCase(PostUpdateQuickProduct.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})
		// get products table
		.addCase(getProduct.pending, (state) => {
			state.isLoading = true;
			
		})
		.addCase(getProduct.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allProducts = payload?.data;
			state.product=payload.data
		})
		.addCase(getProduct.rejected, (state, action) => {
			state.isLoading = false;
			
		})
		// filter
		.addCase(getProductFilters.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getProductFilters.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.allProducts = payload.data;
		})
		.addCase(getProductFilters.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
};
