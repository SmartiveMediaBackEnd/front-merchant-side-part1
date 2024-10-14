import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { deleteBranch, getBranches, getBranchesShow, postBranch, putBranch } from './branchesAsyncThunks';
import { branchesSliceModel } from 'src/app/models/settingsModels/branchesSettingsModel';

export const branchesReducer = (builder: ActionReducerMapBuilder<branchesSliceModel>) => {
	builder
		// get branches
		.addCase(getBranches.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBranches.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.branches = payload.data;
		})
		.addCase(getBranches.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// get show branch
		.addCase(getBranchesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBranchesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.branch = payload.data;
		})
		.addCase(getBranchesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// post branch
		.addCase(postBranch.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postBranch.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postBranch.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		// Update branch
		.addCase(putBranch.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putBranch.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
			const index = state.branches.findIndex(branch => branch.id === payload.data.id);
			if (index !== -1) {
				state.branches[index] = payload.data;
			}
		})
		.addCase(putBranch.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.payload;
		})

};
