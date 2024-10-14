import { createSlice } from '@reduxjs/toolkit';
import { getInventoryReducer } from './inventoryExtraReducers';
import { inventorySliceModel } from 'src/app/models/inventorySliceModel';
import { initialInventoryData } from 'src/app/interface/InventoryInterface';

const initialState: inventorySliceModel = {
	inventory: [],
	isLoading: false,
	error: null,
	isLoadingAddOrUpdate: false,
	inventoryInfo: initialInventoryData()
};

const inventorySlice = createSlice({
	name: 'inventory',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getInventoryReducer(builder);
	},
});

export default inventorySlice.reducer;
