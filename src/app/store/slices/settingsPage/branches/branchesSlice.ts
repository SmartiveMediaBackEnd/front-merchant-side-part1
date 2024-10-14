import { createSlice } from '@reduxjs/toolkit';
import { branchesReducer } from './branchesExtraReducers';
import { branchesSliceModel } from 'src/app/models/settingsModels/branchesSettingsModel';


const initialState: branchesSliceModel = {
	branches: [],
	branch: null,
	isLoadingDelete: false,
	isLoading: false,
	error: null,
};

const branchesSlice = createSlice({
	name: 'branchSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		branchesReducer(builder);
	},
});

export default branchesSlice.reducer;
