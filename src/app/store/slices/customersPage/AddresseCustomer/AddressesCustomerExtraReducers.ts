import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AddressesCustomerSliceModel } from 'src/app/models/AddressesCustomerSliceModel';

import { PostAddCustomerAddressRequest, getAllAddressesCustomer, getCustomerAddresseInfo } from './AddressesCustomersAsyncThunks';

export const getAllCustomerAddressesReducer = (
	builder: ActionReducerMapBuilder<AddressesCustomerSliceModel>,
) => {
	builder
		// get all customer  table
		.addCase(getAllAddressesCustomer.pending, (state) => {
			state.isLoading = true;

		})
		.addCase(getAllAddressesCustomer.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.Addresses = payload.data;
		})
		.addCase(getAllAddressesCustomer.rejected, (state, action) => {
			state.isLoading = false;
			state.Addresses = [];

		})


		//  add customer Address data
		.addCase(PostAddCustomerAddressRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddCustomerAddressRequest.fulfilled, (state, { payload }) => {

			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddCustomerAddressRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(getCustomerAddresseInfo.pending, (state) => {
			state.isLoading = true;

		})
		.addCase(getCustomerAddresseInfo.fulfilled, (state, { payload }: any) => {

			state.isLoading = false;
			state.addreseCustomerInfo = payload.data;
		})
		.addCase(getCustomerAddresseInfo.rejected, (state, action) => {
			state.isLoading = false;


		})

};
