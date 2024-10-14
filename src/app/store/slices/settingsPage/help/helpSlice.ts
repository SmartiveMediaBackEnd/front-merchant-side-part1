import { createSlice } from '@reduxjs/toolkit';
import { helpReducer } from './helpExtraReducers';
import { helpSliceModel } from 'src/app/models/settingsModels/helpSettingsModel';

const initialState: helpSliceModel = {
	helpList: [],
	helpShow: [],
	isLoadingDelete: false,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const helpSlice = createSlice({
	name: 'helpSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		helpReducer(builder);
	},
});

export default helpSlice.reducer;
