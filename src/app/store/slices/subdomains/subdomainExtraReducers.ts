import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
// import { statusGlobal } from 'src/app/models';
import { getSubdomain } from './subdomainAsyncThunks';
import { SubdomainState } from './subdomainSlice';


export const subdomainReducer = (builder: ActionReducerMapBuilder<SubdomainState>) => {
	builder
	.addCase(getSubdomain.pending, (state) => {
		state.isLoading = true;
		state.error = null;

	})
	.addCase(getSubdomain.fulfilled, (state, { payload }: any) => {
		state.isLoading = false;
		state.subdomain = payload.data;
	})
	.addCase(getSubdomain.rejected, (state, action) => {
		state.isLoading = false;
		state.error = action.payload as string;

	})
};
