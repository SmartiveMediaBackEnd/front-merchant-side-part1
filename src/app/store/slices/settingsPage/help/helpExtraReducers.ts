import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { deleteHelp, getHelpList, getHelpShow, postHelp, putHelp } from './helpAsyncThunks';
import { helpSliceModel } from 'src/app/models/settingsModels/helpSettingsModel';

export const helpReducer = (builder: ActionReducerMapBuilder<helpSliceModel>) => {
	builder
		
		// get help list
		.addCase(getHelpList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getHelpList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.helpList = payload.data;
		})
		.addCase(getHelpList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// get help show
		.addCase(getHelpShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getHelpShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.helpShow = payload.data; // todo
		})
		.addCase(getHelpShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// post help
		.addCase(postHelp.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postHelp.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postHelp.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

			// Update help
			.addCase(putHelp.pending, (state) => {
				state.isLoadingAddOrUpdate = true;
			})
			.addCase(putHelp.fulfilled, (state, { payload }) => {
				state.isLoadingAddOrUpdate = false;
				const index = state.helpList.findIndex(role => role.key === payload.data.key);
				if (index !== -1) {
					state.helpList[index] = payload.data; 
				}
			})
			.addCase(putHelp.rejected, (state, action) => {
				state.isLoadingAddOrUpdate = false;
				state.error = action.payload; 
			})
	
			// Delete help
			.addCase(deleteHelp.pending, (state) => {
				state.isLoadingDelete = true;
			})
			.addCase(deleteHelp.fulfilled, (state, { payload }) => {
				state.isLoadingDelete = false;
				state.helpList = state.helpList.filter(role => role.key !== payload.data.key); // Adjust based on your response structure
			})
			.addCase(deleteHelp.rejected, (state, action) => {
				state.isLoadingDelete = false;
				state.error = action.payload; 
			});
};
