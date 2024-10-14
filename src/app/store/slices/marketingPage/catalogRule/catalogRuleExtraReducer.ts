import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
	getCatalogRules,
	getCatalogRuleShow,
	postCatalogRule,
	// postCouponMassDestroy,
} from './catalogRuleAsyncThunks';

export const catalogRulesReducer = (builder: ActionReducerMapBuilder<any>) => {
	builder
		// // get Coupons
		.addCase(getCatalogRules.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCatalogRules.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.coupons = payload.data;
		})
		.addCase(getCatalogRules.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// // get coupon Show
		.addCase(getCatalogRuleShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCatalogRuleShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.couponShow = payload?.data;
		})
		.addCase(getCatalogRuleShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add tax rate
		.addCase(postCatalogRule.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCatalogRule.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCatalogRule.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		});

	//  post Coupon Mass Destroy
	// .addCase(postCouponMassDestroy.pending, (state) => {
	// 	state.isLoadingAddOrUpdate = true;
	// })
	// .addCase(postCouponMassDestroy.fulfilled, (state, { payload }: any) => {
	// 	state.isLoadingAddOrUpdate = false;
	// })
	// .addCase(postCouponMassDestroy.rejected, (state, action) => {
	// 	state.isLoadingAddOrUpdate = false;
	// });
};
