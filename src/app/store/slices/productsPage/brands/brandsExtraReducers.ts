import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getBrandInfo, getBrandsTable, PostAddBrandRequest, PutUpdateBrandRequest } from './brandsAsyncThunks';
import { brandsSliceModel } from 'src/app/models/brandsSliceModel';
import { BrandsInitialInfo } from 'src/app/interface/BrandInterface';

export const getBrandsReducer = (builder: ActionReducerMapBuilder<brandsSliceModel>) => {
	builder
		// get brands table
		.addCase(getBrandsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBrandsTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.brands = payload.data;
		})
		.addCase(getBrandsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.brands = [];

		})

		// get brandInfo
		.addCase(getBrandInfo.pending, (state) => {
			state.isLoading = true;
			state.brandInfo = BrandsInitialInfo();

		})
		.addCase(getBrandInfo.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.brandInfo = payload.data;
		})
		.addCase(getBrandInfo.rejected, (state, action) => {
			state.isLoading = false;
			state.brandInfo = BrandsInitialInfo();

		})


		// add brandInfo
		.addCase(PostAddBrandRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddBrandRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddBrandRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})


		// update brandInfo
		.addCase(PutUpdateBrandRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PutUpdateBrandRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PutUpdateBrandRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		});
};
