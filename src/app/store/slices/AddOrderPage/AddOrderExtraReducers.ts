import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { PostAddOrder } from './AddOrderAsyncThunks';
import { AddOrderSliceState } from 'src/app/models/AddOrderSliceModal';


export const AddOrderReducer = (
	builder: ActionReducerMapBuilder<AddOrderSliceState>,
) => {
	builder
		//  add order data
		.addCase(PostAddOrder.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddOrder.fulfilled, (state, { payload }) => {

			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddOrder.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})



};
