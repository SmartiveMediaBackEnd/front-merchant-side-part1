import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { postCustomizationDoubleOpt, postCustomizationOrderInvoice, postCustomizationProduct, postCustomizationsCheckout, postFrontDefaults, postGeneralSettingsStore, postQueries, postReview, postStoreCustom, postTaxesConfiguration } from './configurationsAsyncThunks';
import { statusGlobal } from 'src/app/models';

export const configurationsReducer = (
	builder: ActionReducerMapBuilder<statusGlobal>,
) => {
	builder
		// get config list
		// post store custom
		.addCase(postStoreCustom.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postStoreCustom.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postStoreCustom.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post general settings store
		.addCase(postGeneralSettingsStore.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postGeneralSettingsStore.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postGeneralSettingsStore.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post front defaults
		.addCase(postFrontDefaults.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postFrontDefaults.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postFrontDefaults.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post review
		.addCase(postReview.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postReview.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postReview.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post queries
		.addCase(postQueries.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postQueries.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postQueries.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post customizations-checkout
		.addCase(postCustomizationsCheckout.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCustomizationsCheckout.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCustomizationsCheckout.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post customization-product
		.addCase(postCustomizationProduct.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCustomizationProduct.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCustomizationProduct.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post customization-double-opt
		.addCase(postCustomizationDoubleOpt.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCustomizationDoubleOpt.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCustomizationDoubleOpt.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post customization-order-invoice
		.addCase(postCustomizationOrderInvoice.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCustomizationOrderInvoice.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCustomizationOrderInvoice.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		// post taxes
		.addCase(postTaxesConfiguration.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postTaxesConfiguration.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postTaxesConfiguration.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
