import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getPagesTable } from './pagesTableAsyncThunks';
import { pagesSliceModel } from 'src/app/models/pagesSliceModel';

export const getPagesTableReducer = (builder: ActionReducerMapBuilder<pagesSliceModel>) => {
	builder
		// get pages table
		.addCase(getPagesTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPagesTable.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.pages = payload?.data;
		})
		.addCase(getPagesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
