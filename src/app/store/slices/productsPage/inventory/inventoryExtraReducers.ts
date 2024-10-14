import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getInventoryInfo, getInventoryTable, PostAddInventoryRequest, PostImportInventoryRequest, PutUpdateInventoryRequest } from './inventoryAsyncThunks';
import { inventorySliceModel } from 'src/app/models/inventorySliceModel';

export const getInventoryReducer = (builder: ActionReducerMapBuilder<inventorySliceModel>) => {
	builder
		// get c table
		.addCase(getInventoryTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getInventoryTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.inventory = payload.data;
		})
		.addCase(getInventoryTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.inventory = [];
		})

		// add inventory
		.addCase(PostAddInventoryRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostAddInventoryRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostAddInventoryRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		//import data
		.addCase(PostImportInventoryRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostImportInventoryRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostImportInventoryRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		// update Inventory
		.addCase(PutUpdateInventoryRequest.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PutUpdateInventoryRequest.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PutUpdateInventoryRequest.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})
		// get Inventory info 
		.addCase(getInventoryInfo.pending, (state) => {
			state.isLoading = true;


		})
		.addCase(getInventoryInfo.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.inventoryInfo = payload.data
		})
		.addCase(getInventoryInfo.rejected, (state, action) => {
			state.isLoading = false;

		});
};
