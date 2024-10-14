import { createSlice } from '@reduxjs/toolkit';
import {  specificationsReducer } from './SpecificationsExtraReducers';
import { SpecificationsSliceModel } from 'src/app/models/SpecificationsSliceModel';

const initialState: SpecificationsSliceModel = {
	specifications: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,
	
};

const specificationsSlice = createSlice({
	name: 'specifications',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		specificationsReducer(builder);
	},
});

export default specificationsSlice.reducer;
