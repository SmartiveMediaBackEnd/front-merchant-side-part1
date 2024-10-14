import { createSlice } from '@reduxjs/toolkit';
import { emailNotificationReducer } from './emailNotificationExtraReducer';
import { emailNotificationSliceModel } from 'src/app/models/settingsModels/emailSettingsModel';

const initialState: emailNotificationSliceModel = {
	emailNotification: [],
	emailNotificationShow: [],
	isLoadingAddOrUpdate: false,
	isLoadingDelete: false,
	isLoading: false,
	error: null,
};

const emailNotificationShowSlice = createSlice({
	name: 'emailNotificationSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		emailNotificationReducer(builder);
	},
});

export default emailNotificationShowSlice.reducer;
