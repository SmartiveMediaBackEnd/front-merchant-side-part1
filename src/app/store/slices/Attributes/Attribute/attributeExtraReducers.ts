import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAttributes, getAttributeShow, postAttribute, postOption, putAttribute } from './attributeAsyncThunks';
import { attributesSliceModel } from 'src/app/models/attributeSliceModel';

export const attributesReducer = (builder: ActionReducerMapBuilder<attributesSliceModel>) => {
	builder
		// get Attributes
		.addCase(getAttributes.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAttributes.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.attributesList = payload.data;
		})
		.addCase(getAttributes.rejected, (state, action) => {
			state.isLoading = false;

		})

		// // get attribute show
		.addCase(getAttributeShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAttributeShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.attributeShow = payload.data;
		})
		.addCase(getAttributeShow.rejected, (state, action) => {
			state.isLoading = false;

		})

		// create attribute
		.addCase(postAttribute.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postAttribute.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postAttribute.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		// update attribute
		.addCase(putAttribute.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putAttribute.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(putAttribute.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		// store option
		.addCase(postOption.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postOption.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postOption.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
