import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getShippingList, getShippingMethods, postDhlShippingMethod, postFreeShippingMethod} from './shippingAsyncThunks';
import { shippingSliceModel } from 'src/app/models/settingsModels/shippingSettingsModel';

export const shippingListReducer = (builder: ActionReducerMapBuilder<shippingSliceModel>) => {
	builder
		// get shipping list
		.addCase(getShippingList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getShippingList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.shippingList = payload.data; 
		})
		.addCase(getShippingList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		
		// get shipping methods
		.addCase(getShippingMethods.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getShippingMethods.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.shippingMethod = payload.data;
		})
		.addCase(getShippingMethods.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// post Shipping Method
		.addCase(postFreeShippingMethod.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postFreeShippingMethod.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postFreeShippingMethod.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		// post Shipping Method
		.addCase(postDhlShippingMethod.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postDhlShippingMethod.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postDhlShippingMethod.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
