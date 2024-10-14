import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getFaqs, postFaqs } from './FaqsAsyncThunks';
import { FAQsSliceModel } from 'src/app/models/FaqsSliceModel';


export const FAQsReducer = (
	builder: ActionReducerMapBuilder<FAQsSliceModel>,
) => {
	builder
		// get faqs
		.addCase(getFaqs.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(getFaqs.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.faqs = payload.data;
		})
		.addCase(getFaqs.rejected, (state, action) => {
			state.isLoading = false;
			state.faqs = [];
		})
		// post faqs
		.addCase(postFaqs.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postFaqs.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postFaqs.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
};
