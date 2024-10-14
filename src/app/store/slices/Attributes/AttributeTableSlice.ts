import { createSlice } from '@reduxjs/toolkit';
import { getAllAttributesReducer } from './AttributeTableExtraReducers';

import { AttributesSliceModel } from 'src/app/models/AttributesSliceModel';

const initialState: AttributesSliceModel = {
	attributes: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,
	
};

const attributesSlice = createSlice({
	name: 'attributes',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllAttributesReducer(builder);
	},
});

// export const selectAllCustomer = (state: { allCustomer: allCustomerStatus }) => state.allCustomer;

export default attributesSlice.reducer;
