import { createSlice } from '@reduxjs/toolkit';

import { taxCategoriesShowReducer } from './emailSettingExtraReducer';
import { taxCategoriesSettingsSliceModel } from 'src/app/models/settingsModels/taxCategorySettingsModel';

const initialState: taxCategoriesSettingsSliceModel = {
	taxCategoriesShow: [],
	taxCategoriesList: [],
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
