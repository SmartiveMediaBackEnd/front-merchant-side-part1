import { createSlice } from '@reduxjs/toolkit';
import { getPagesTableReducer } from './pagesTableExtraReducers';
import { pagesSliceModel } from 'src/app/models/pagesSliceModel';

const initialState: pagesSliceModel = {
	pages: [],
	isLoading: false,
	error: null,
};

const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getPagesTableReducer(builder);
	},
});

export default pagesSlice.reducer;
