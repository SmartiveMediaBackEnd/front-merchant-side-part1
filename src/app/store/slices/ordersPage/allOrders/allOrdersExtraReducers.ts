import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllOrdersPageTable, getOrderInfo, updateOrderaddress, updateOrderCheckOut, updateOrderCustomer } from './allOrdersAsyncThunks';
import { allOrdersSliceModel } from 'src/app/models/allOrdersPageSliceModel';

export const getAllOrdersTableReducer = (builder: ActionReducerMapBuilder<allOrdersSliceModel>) => {
	builder

		.addCase(getAllOrdersPageTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllOrdersPageTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allOrders = payload?.data;
		})
		.addCase(getAllOrdersPageTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		.addCase(getOrderInfo.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getOrderInfo.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.ordderItem = payload?.data;
		})
		.addCase(getOrderInfo.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})




		.addCase(updateOrderCheckOut.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(updateOrderCheckOut.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(updateOrderCheckOut.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		.addCase(updateOrderaddress.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(updateOrderaddress.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(updateOrderaddress.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})


		.addCase(updateOrderCustomer.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(updateOrderCustomer.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(updateOrderCustomer.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})


		
};
