import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSpecifications, postSpecifications } from './SpecificationsAsyncThunks';
import { SpecificationsSliceModel } from 'src/app/models/SpecificationsSliceModel';


export const specificationsReducer = (
	builder: ActionReducerMapBuilder<SpecificationsSliceModel>,
) => {
	builder
		// getSpecifications
		.addCase(getSpecifications.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(getSpecifications.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.specifications = payload.data;
		})
		.addCase(getSpecifications.rejected, (state, action) => {
			state.isLoading = false;
			state.specifications = [];
		})
		// postSpecifications
		.addCase(postSpecifications.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postSpecifications.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postSpecifications.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
