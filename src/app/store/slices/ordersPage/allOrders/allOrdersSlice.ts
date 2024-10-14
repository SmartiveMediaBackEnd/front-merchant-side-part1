import { createSlice } from '@reduxjs/toolkit';
import { getAllOrdersTableReducer } from './allOrdersExtraReducers';
import { allOrdersSliceModel } from 'src/app/models/allOrdersPageSliceModel';
import { initialOrderData } from 'src/app/interface/OrderInterface';

const initialState: allOrdersSliceModel = {
	allOrders: [],
	ordderItem:initialOrderData(),
	isLoading: false,
	isLoadingAddOrUpdate:false,
	error: null,
};

const allOrdersSlice = createSlice({
	name: 'allOrders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllOrdersTableReducer(builder);
	},
});

export default allOrdersSlice.reducer;
