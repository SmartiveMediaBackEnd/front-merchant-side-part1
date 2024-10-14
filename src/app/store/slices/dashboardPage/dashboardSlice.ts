import { createSlice } from '@reduxjs/toolkit';
import { dashboardReducer } from './dashboardExtraReducer';
import { dashboardSliceModel } from 'src/app/models/dashboardModel';

const initialState: dashboardSliceModel = {
	dashboardReports: [],
	isLoading: false,
	error: null,
};

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		dashboardReducer(builder);
	},
});

export default dashboardSlice.reducer;
