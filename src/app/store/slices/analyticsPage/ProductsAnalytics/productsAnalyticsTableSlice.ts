import { createSlice } from '@reduxjs/toolkit';
import { getProductsAnalyticsTableReducer } from './productsAnalyticsTableExtraReducers';
import { productsAnalyticsSliceModel } from 'src/app/models/productsAnalyticsSliceModel';

const initialState: productsAnalyticsSliceModel = {
	productsAnalytics: [],
	isLoading: false,
	error: null,
};

const productAnalyticsSlice = createSlice({
	name: 'productsAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getProductsAnalyticsTableReducer(builder);
	},
});

export default productAnalyticsSlice.reducer;
