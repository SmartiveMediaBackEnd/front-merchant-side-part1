import { createSlice } from '@reduxjs/toolkit';
import { taxCategoriesShowReducer } from './taxCategoriesExtraReducer';
import { taxCategoriesSettingsSliceModel, handelDefaultValue } from 'src/app/models/settingsModels/taxCategorySettingsModel';

const initialState: taxCategoriesSettingsSliceModel = {
	taxCategoriesList: [],
	taxCategoriesShow: handelDefaultValue(),
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const taxCategoriesShowSlice = createSlice({
	name: 'taxCategorySettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxCategoriesShowReducer(builder);
	},
});

export default taxCategoriesShowSlice.reducer;
