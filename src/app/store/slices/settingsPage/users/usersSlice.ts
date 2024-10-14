import { createSlice } from '@reduxjs/toolkit';
import {  userReducer } from './usersExtraReducers';
import { usersSliceModel } from 'src/app/models/settingsModels/usersSettingsModel';


const initialState: usersSliceModel = {
	users: [],
	userById: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const usersSlice = createSlice({
	name: 'usersSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		userReducer(builder);
	},
});

export default usersSlice.reducer;
