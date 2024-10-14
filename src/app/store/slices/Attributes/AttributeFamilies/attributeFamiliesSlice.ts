import { createSlice } from '@reduxjs/toolkit';
import { attributesFamiliesReducer } from './attributeFamiliesExtraReducers';

import { attributesFamiliesSliceModel } from 'src/app/models/attributeFamiliesSliceModel';

const initialState: attributesFamiliesSliceModel = {
	attributesFamilies: [],
	attributeFamiliesShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const attributesSlice = createSlice({
	name: 'attributesFamilies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		attributesFamiliesReducer(builder);
	},
});

export default attributesSlice.reducer;
