import { createSlice } from '@reduxjs/toolkit';
import { shippingListReducer } from './shippingExtraReducers';
import { shippingSliceModel } from 'src/app/models/settingsModels/shippingSettingsModel';
import { initialShippingMethd } from 'src/app/interface/settingsInterface/ShippingSettingsInterface';

const initialState: shippingSliceModel = {
	shippingList: initialShippingMethd(),
	shippingMethod: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,
};

const shippingSlice = createSlice({
	name: 'shippingSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		shippingListReducer(builder);
	},
});

export default shippingSlice.reducer;
