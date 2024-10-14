import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PostAddCustomerGroupRequest, getCustomerGroupInfo, getCustomersGroupTable } from './customersGroupTableAsyncThunks';
import { customersGroupSliceModel } from 'src/app/models/customersGroupSliceModel';

export const getCustomerGroupTableReducer = (
	builder: ActionReducerMapBuilder<customersGroupSliceModel>,
) => {
	builder
		// get customer group table
		.addCase(getCustomersGroupTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCustomersGroupTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.customersGroup = payload.data;
		})
		.addCase(getCustomersGroupTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.customersGroup = [];
		})
		//  add customer group  data
		.addCase(PostAddCustomerGroupRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddCustomerGroupRequest.fulfilled, (state, { payload }) => {

			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddCustomerGroupRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})
		//  get customer info data
		.addCase(getCustomerGroupInfo.pending, (state) => {
			state.isLoading = true;

		})
		.addCase(getCustomerGroupInfo.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.customerGroupItem = payload.data;
		})
		.addCase(getCustomerGroupInfo.rejected, (state, action) => {
			state.isLoading = false;

		})
};
