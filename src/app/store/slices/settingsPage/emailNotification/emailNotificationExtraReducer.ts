import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { emailNotificationSliceModel } from 'src/app/models/settingsModels/emailSettingsModel';
import { deleteEmailNotification, getEmailNotificationList, getEmailNotificationShow, postEmailNotification, putEmailNotification } from './emailNotificationAsyncThunks';

export const emailNotificationReducer = (
	builder: ActionReducerMapBuilder<emailNotificationSliceModel>,
) => {
	builder
		// get Email Notification List
		.addCase(getEmailNotificationList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getEmailNotificationList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.emailNotification = payload.data;
		})
		.addCase(getEmailNotificationList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// get Email Notification Show
		.addCase(getEmailNotificationShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getEmailNotificationShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.emailNotificationShow = payload;
		})
		.addCase(getEmailNotificationShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		//  post Email Notification
		.addCase(postEmailNotification.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postEmailNotification.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postEmailNotification.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		//  put Email Notification
		.addCase(putEmailNotification.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putEmailNotification.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
			const index = state.emailNotification.findIndex(item => item.id === payload.data.id);
			if (index !== -1) {
				state.emailNotification[index] = payload.data; 
			}
		})
		.addCase(putEmailNotification.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.payload; 
		})
		// Delete Email Notification
		.addCase(deleteEmailNotification.pending, (state) => {
			state.isLoadingDelete = true;
		})
		.addCase(deleteEmailNotification.fulfilled, (state, { payload }) => {
			state.isLoadingDelete = false;
			state.emailNotification = state.emailNotification.filter(item => item.id !== payload.data.id); 
		})
		.addCase(deleteEmailNotification.rejected, (state, action) => {
			state.isLoadingDelete = false;
			state.error = action.payload; 
		});
};
