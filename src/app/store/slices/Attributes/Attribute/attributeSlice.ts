import { createSlice } from '@reduxjs/toolkit';
import { attributesReducer } from './attributeExtraReducers';
import { attributesSliceModel } from 'src/app/models/attributeSliceModel';


const initialState: attributesSliceModel = {
	attributesList: [],
	attributeShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const attributesSlice = createSlice({
	name: 'attributesProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		attributesReducer(builder);
	},
});

export default attributesSlice.reducer;
