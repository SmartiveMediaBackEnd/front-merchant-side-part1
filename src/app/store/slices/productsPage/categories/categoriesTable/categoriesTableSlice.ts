import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesReducer } from './categoriesTableExtraReducers';
import { categoriesTableSliceModel } from 'src/app/models/categoriesTableSliceModel';
import { CategoryInitialInfo } from 'src/app/interface/CategoriesInterface';

const initialState: categoriesTableSliceModel = {
	categoriesTable: [],
	categoryInfo: [[CategoryInitialInfo()], {"products":[]}],
	isLoading: false,
	error: null,
};

const categoriesSlice = createSlice({
	name: 'categoriesTable',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCategoriesReducer(builder);
	},
});

export default categoriesSlice.reducer;
