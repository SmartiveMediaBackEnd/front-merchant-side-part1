import { createSlice } from '@reduxjs/toolkit';
import { getBrandsReducer } from './brandsExtraReducers';
import { brandsSliceModel } from 'src/app/models/brandsSliceModel';
import { BrandsInitialInfo } from 'src/app/interface/BrandInterface';

const initialState: brandsSliceModel = {
	brands: [],
	brandInfo: BrandsInitialInfo(),
	isLoading: false,
	error: null,
};

const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getBrandsReducer(builder);
	},
});

export default brandsSlice.reducer;
