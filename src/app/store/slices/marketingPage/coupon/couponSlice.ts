import { createSlice } from '@reduxjs/toolkit';
import { couponsReducer } from './couponExtraReducer';


const initialState: any = {
	coupons: [],
	couponShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const couponSlice = createSlice({
	name: 'couponPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		couponsReducer(builder);
	},
});

export default couponSlice.reducer;
