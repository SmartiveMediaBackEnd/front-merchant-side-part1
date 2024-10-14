import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { attributesFamiliesSliceModel } from 'src/app/models/attributeFamiliesSliceModel';
import { getAttributeFamiliesShow, getAttributesFamilies, postAttributeFamilies, putAttributeFamilies } from './attributeFamiliesAsyncThunks';

export const attributesFamiliesReducer = (builder: ActionReducerMapBuilder<attributesFamiliesSliceModel>) => {
	builder
		// get Attributes families
		.addCase(getAttributesFamilies.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAttributesFamilies.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.attributesFamilies = payload.data;
		})
		.addCase(getAttributesFamilies.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// // get attribute Families show
		.addCase(getAttributeFamiliesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAttributeFamiliesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.attributeFamiliesShow = payload.data;
		})
		.addCase(getAttributeFamiliesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// create attribute
		.addCase(postAttributeFamilies.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postAttributeFamilies.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postAttributeFamilies.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		// update attribute
		.addCase(putAttributeFamilies.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putAttributeFamilies.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
			const index = state.attributesFamilies.findIndex(role => role.key === payload.data.key);
			if (index !== -1) {
				state.attributesFamilies[index] = payload.data;
			}
		})
		.addCase(putAttributeFamilies.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.payload;
		})

};
