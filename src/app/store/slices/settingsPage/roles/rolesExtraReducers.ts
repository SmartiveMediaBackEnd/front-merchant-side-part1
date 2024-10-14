import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { deleteRole, getPermissions, getRolesList, getRolesShow, postRole, putRole } from './rolesAsyncThunks';
import { rolesSliceModel } from 'src/app/models/settingsModels/rolesSettingsModel';

export const rolesReducer = (builder: ActionReducerMapBuilder<rolesSliceModel>) => {
	builder
		// get permissions
		.addCase(getPermissions.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPermissions.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.permissions = payload.data;
		})
		.addCase(getPermissions.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// get roles list
		.addCase(getRolesList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getRolesList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.rolesList = payload.data;
		})
		.addCase(getRolesList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// get permissions show
		.addCase(getRolesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getRolesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.permissionsList = payload.data; // todo
		})
		.addCase(getRolesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// post role
		.addCase(postRole.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postRole.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postRole.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

			// Update role
			.addCase(putRole.pending, (state) => {
				state.isLoadingAddOrUpdate = true;
			})
			.addCase(putRole.fulfilled, (state, { payload }) => {
				state.isLoadingAddOrUpdate = false;
				const index = state.permissionsList.findIndex(role => role.key === payload.data.key);
				if (index !== -1) {
					state.permissionsList[index] = payload.data; 
				}
			})
			.addCase(putRole.rejected, (state, action) => {
				state.isLoadingAddOrUpdate = false;
				state.error = action.payload; 
			})
	
			// Delete role
			.addCase(deleteRole.pending, (state) => {
				state.isLoadingDelete = true;
			})
			.addCase(deleteRole.fulfilled, (state, { payload }) => {
				state.isLoadingDelete = false;
				state.permissionsList = state.permissionsList.filter(role => role.key !== payload.data.key); // Adjust based on your response structure
			})
			.addCase(deleteRole.rejected, (state, action) => {
				state.isLoadingDelete = false;
				state.error = action.payload; 
			});
};
