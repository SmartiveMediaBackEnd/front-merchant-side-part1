import { createSlice } from '@reduxjs/toolkit';

import { subCategoriesTableSliceModel } from 'src/app/models/subCategoriesTableSliceModel';
import { getSubCategoriesReducer } from './subCategoriesExtraReducers';

const initialState: subCategoriesTableSliceModel = {
	subCategories: [],
	isLoading: false,
	error: null,
};

const subCategoriesSlice = createSlice({
	name: 'subCategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getSubCategoriesReducer(builder);
	},
});

export default subCategoriesSlice.reducer;
