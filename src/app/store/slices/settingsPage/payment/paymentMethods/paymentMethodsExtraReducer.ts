import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { createPaymentMethod, getPaymentMethods, getPaymentMethodShow } from './paymentMethodsAsyncThunks';
import { paymentMethodsSliceModel } from 'src/app/models/settingsModels/paymentMethodsSettingsModel';

export const paymentMethodsReducer = (
	builder: ActionReducerMapBuilder<paymentMethodsSliceModel>,
) => {
	builder
		// getPaymentMethods
		.addCase(getPaymentMethods.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPaymentMethods.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.paymentList = payload.data; // []
		})
		.addCase(getPaymentMethods.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.paymentList=[]
		})
		// getPaymentMethodShow
		.addCase(getPaymentMethodShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPaymentMethodShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.paymentShow = payload.data;
		})
		.addCase(getPaymentMethodShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// createPaymentMethod
		.addCase(createPaymentMethod.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(createPaymentMethod.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(createPaymentMethod.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
	

};
