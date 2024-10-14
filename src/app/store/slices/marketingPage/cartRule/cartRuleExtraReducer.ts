import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
	getCartRule,
	getCartRuleShow,
	postCartRule,
	putCartRule,
	deleteCartRule,
} from './cartRuleAsyncThunks';
import { CartRulesItem } from './cartRuleSlice';

export const cartRuleExtraReducer = (builder: ActionReducerMapBuilder<any>) => {
	builder
		//!  Get Cart Rules
		// .addCase(getCartRule.pending, (state) => {
		// 	state.isLoading = true;
		// 	state.error = null;
		// })
		// .addCase(getCartRule.fulfilled, (state, { payload }: any) => {
		// 	state.isLoading = false;
		// 	state.cartRules = payload.data;

		// })
		// .addCase(getCartRule.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.error.message || 'Failed to fetch cart rules';
		// })

		.addCase(getCartRule.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCartRule.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.cartRules = payload.data;
		})
		.addCase(getCartRule.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		//!  Get Single Cart Rule
		.addCase(getCartRuleShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCartRuleShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.cartRuleShow = payload.data;
		})
		.addCase(getCartRuleShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || 'Failed to fetch cart rule details';
		})
		//!  Post Cart Rule
		.addCase(postCartRule.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
			state.error = null;
		})
		.addCase(postCartRule.fulfilled, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.cartRules.push(action.payload);
		})
		.addCase(postCartRule.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.error.message || 'Failed to create cart rule';
		})

		//! Put Cart Rule
		.addCase(putCartRule.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
			state.error = null;
		})
		.addCase(putCartRule.fulfilled, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			const index = state.cartRules.findIndex(
				(rule: CartRulesItem) => rule.id === action.payload.id,
			);
			if (index !== -1) {
				state.cartRules[index] = action.payload;
			}
		})
		.addCase(putCartRule.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.error.message || 'Failed to update cart rule';
		})

		//! Delete Cart Rule
		.addCase(deleteCartRule.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(deleteCartRule.fulfilled, (state, action) => {
			state.isLoading = false;
			state.cartRules = state.cartRules.filter((rule: CartRulesItem) => rule.id !== action.payload);
		})
		.addCase(deleteCartRule.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || 'Failed to delete cart rule';
		});
};

// import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
// import { getCatalogRules, getCatalogRuleShow, postCatalogRule, putCatalogRule } from '../catalogRule/catalogRuleAsyncThunks';

// export const catalogRulesReducer = (
// 	builder: ActionReducerMapBuilder<any>,
// ) => {
// 	builder
// 		// // get cart rule
// 		.addCase(getCatalogRules.pending, (state) => {
// 			state.isLoading = true;
// 			state.error = null;
// 		})
// 		.addCase(getCatalogRules.fulfilled, (state, { payload }: any) => {
// 			state.isLoading = false;
// 			state.catalogRules = payload.data;
// 		})
// 		.addCase(getCatalogRules.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.error = action.payload;
// 		})
// 		// // get cart rule Show
// 		.addCase(getCatalogRuleShow.pending, (state) => {
// 			state.isLoading = true;
// 			state.error = null;
// 		})
// 		.addCase(getCatalogRuleShow.fulfilled, (state, { payload }: any) => {
// 			state.isLoading = false;
// 			state.catalogRuleShow = payload?.data;
// 		})
// 		.addCase(getCatalogRuleShow.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.error = action.payload;
// 		})

// 		//
// 		.addCase(postCatalogRule.pending, (state) => {
// 			state.isLoadingAddOrUpdate = true;
// 		})
// 		.addCase(postCatalogRule.fulfilled, (state, { payload }: any) => {
// 			state.isLoadingAddOrUpdate = false;
// 		})
// 		.addCase(postCatalogRule.rejected, (state, action) => {
// 			state.isLoadingAddOrUpdate = false;
// 		})

// 		//
// 		.addCase(putCatalogRule.pending, (state) => {
// 			state.isLoadingAddOrUpdate = true;
// 		})
// 		.addCase(putCatalogRule.fulfilled, (state, { payload }: any) => {
// 			state.isLoadingAddOrUpdate = false;
// 		})
// 		.addCase(putCatalogRule.rejected, (state, action) => {
// 			state.isLoadingAddOrUpdate = false;
// 		})

// };
