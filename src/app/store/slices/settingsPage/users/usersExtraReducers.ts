import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAdminShow, getUsers, postNewUser, updateUser } from './usersAsyncThunks';
import { usersSliceModel } from 'src/app/models/settingsModels/usersSettingsModel';


export const userReducer = (builder: ActionReducerMapBuilder<usersSliceModel>) => {
	builder
		// get admin
		.addCase(getUsers.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getUsers.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.users = payload.data;
		})
		.addCase(getUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// get user by id
		.addCase(getAdminShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAdminShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.userById = payload.data;
		})
		.addCase(getAdminShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  add new user
		.addCase(postNewUser.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postNewUser.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postNewUser.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		//  update user
		.addCase(updateUser.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(updateUser.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(updateUser.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

};
