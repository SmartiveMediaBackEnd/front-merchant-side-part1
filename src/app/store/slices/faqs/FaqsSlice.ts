import { createSlice } from '@reduxjs/toolkit';
import { FAQsReducer } from './FaqsExtraReducers';
import { FAQsSliceModel } from 'src/app/models/FaqsSliceModel';

const initialState: FAQsSliceModel = {
	faqs: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,
	
};

const faqsSlice = createSlice({
	name: 'faqs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		FAQsReducer(builder);
	},
});

export default faqsSlice.reducer;
