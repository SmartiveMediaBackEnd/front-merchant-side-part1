import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { dashboardSliceModel } from 'src/app/models/dashboardModel';
import { getReports } from './dashboardAsyncThunks';

export const dashboardReducer = (
	builder: ActionReducerMapBuilder<dashboardSliceModel>,
) => {
	builder
		// get Reports
		.addCase(getReports.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getReports.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.dashboardReports = payload; 
		})
		.addCase(getReports.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		
};
