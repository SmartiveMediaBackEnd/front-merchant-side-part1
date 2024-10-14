import { bulkEditsSliceModel } from 'src/app/models/addBulkEditSliceModel';
import { createSlice } from '@reduxjs/toolkit';
import { bulkEditReducer } from './bulkPricesExtraReducers';

const initialState: bulkEditsSliceModel = {
	allBulks: [],
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const bulkEditSlice = createSlice({
	name: 'bulkEdit',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		bulkEditReducer(builder);
	},
});



export default bulkEditSlice.reducer;

