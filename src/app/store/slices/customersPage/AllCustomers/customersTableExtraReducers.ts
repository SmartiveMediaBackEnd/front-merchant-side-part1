import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PostAddCustomerRequest, PutUpdateCustomerRequest, getAllCustomersTable, getCustomerInfo, getFilterCustomer } from './customersTableAsyncThunks';
import { allCustomerSliceModel } from 'src/app/models/allCustomerSliceModel';

export const getAllCustomerTableReducer = (
	builder: ActionReducerMapBuilder<allCustomerSliceModel>,
) => {
	builder
		// get all customer  table
		.addCase(getAllCustomersTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllCustomersTable.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.allCustomers = payload.data;
		})
		.addCase(getAllCustomersTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.allCustomers = [];
		})

		//  get customer info data
		.addCase(getCustomerInfo.pending, (state) => {
			state.isLoading = true;

		})
		.addCase(getCustomerInfo.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.CustomerInfo = payload.data;
		})
		.addCase(getCustomerInfo.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add customer  data
		.addCase(PostAddCustomerRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddCustomerRequest.fulfilled, (state, { payload }) => {

			state.isLoadingAddOrUpdate = false;
			
		})
		.addCase(PostAddCustomerRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			
		})
		//  update customer  data
		.addCase(PutUpdateCustomerRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PutUpdateCustomerRequest.fulfilled, (state, { payload }) => {

			state.isLoadingAddOrUpdate = false;
			
		})
		.addCase(PutUpdateCustomerRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			
		})

		// filter
		.addCase(getFilterCustomer.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getFilterCustomer.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.allCustomers = payload.data;
		})
		.addCase(getFilterCustomer.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
};
