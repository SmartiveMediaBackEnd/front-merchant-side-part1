import { createSlice } from '@reduxjs/toolkit';
import { configurationsReducer } from './configurationsExtraReducer';
import { statusGlobal } from 'src/app/models';


const initialState: statusGlobal = {
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const configurationsSlice = createSlice({
	name: 'configurations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		configurationsReducer(builder);
	},
});

export default configurationsSlice.reducer;
