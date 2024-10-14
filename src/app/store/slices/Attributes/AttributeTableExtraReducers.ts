import { ActionReducerMapBuilder } from '@reduxjs/toolkit';


import { AttributesSliceModel } from 'src/app/models/AttributesSliceModel';
import { getAllAttributes } from './AttributeAsyncThunks';

export const getAllAttributesReducer = (
	builder: ActionReducerMapBuilder<AttributesSliceModel>,
) => {
	builder
		// get all customer  table
		.addCase(getAllAttributes.pending, (state) => {
			state.isLoading = true;

		})
		.addCase(getAllAttributes.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.attributes = payload.data;
		})
		.addCase(getAllAttributes.rejected, (state, action) => {
			state.isLoading = false;

			state.attributes = [];
		})


};
