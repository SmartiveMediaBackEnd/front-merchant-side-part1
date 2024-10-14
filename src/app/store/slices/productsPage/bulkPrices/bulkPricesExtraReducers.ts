import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getBulkPrices, PostBulkPrices } from './bulkPricesAsyncThunks';
import { bulkEditsSliceModel } from 'src/app/models/addBulkEditSliceModel';

export const bulkEditReducer = (builder: ActionReducerMapBuilder<bulkEditsSliceModel>) => {
	builder
		// get Bulk Prices
		.addCase(getBulkPrices.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBulkPrices.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allBulks = payload?.data;
		})
		.addCase(getBulkPrices.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.allBulks = [];
		})

		// add bulk 
		.addCase(PostBulkPrices.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostBulkPrices.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostBulkPrices.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		// // update bulk 
		// .addCase(putMerchantPayment.pending, (state) => {
		// 	state.isLoadingAddOrUpdate = true;

		// })
		// .addCase(putMerchantPayment.fulfilled, (state, { payload }: any) => {
		// 	state.isLoadingAddOrUpdate = false;

		// })
		// .addCase(putMerchantPayment.rejected, (state, action) => {
		// 	state.isLoadingAddOrUpdate = false;

		// });
};
