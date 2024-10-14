import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { deleteMerchantPayment, getMerchantPaymentList, getMerchantPaymentShow, postMerchantPayment, putUpdateMerchantPayment } from './merchantPaymentAsyncThunks';
import { merchantPaymentMethodsSliceModel } from 'src/app/models/settingsModels/merchantPaymentMethodsSettingsModel';

export const merchantPaymentMethodsReducer = (
	builder: ActionReducerMapBuilder<merchantPaymentMethodsSliceModel>,
) => {
	builder
		// get Merchant Payment List
		.addCase(getMerchantPaymentList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getMerchantPaymentList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.merchantPaymentList = payload.data;
		})
		.addCase(getMerchantPaymentList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.merchantPaymentList = []
		})
		// // get  Merchant Payment Show
		.addCase(getMerchantPaymentShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getMerchantPaymentShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.merchantPaymentShow = payload.data;
		})
		.addCase(getMerchantPaymentShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add Merchant Payment
		.addCase(postMerchantPayment.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postMerchantPayment.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postMerchantPayment.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		//  update Merchant Payment
		.addCase(putUpdateMerchantPayment.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putUpdateMerchantPayment.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
			// const index = state.merchantPaymentList.findIndex(item => item.id === payload.data.id);
			// if (index !== -1) {
			// 	state.merchantPaymentList[index] = payload.data; 
			// }
		})
		.addCase(putUpdateMerchantPayment.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.payload;
		})
		//  delete Merchant Payment
		.addCase(deleteMerchantPayment.pending, (state) => {
			state.isLoadingDelete = true;
		})
		.addCase(deleteMerchantPayment.fulfilled, (state, { payload }) => {
			state.isLoadingDelete = false;

		})
		.addCase(deleteMerchantPayment.rejected, (state, action) => {
			state.isLoadingDelete = false;
			state.error = action.payload;
		});

};
