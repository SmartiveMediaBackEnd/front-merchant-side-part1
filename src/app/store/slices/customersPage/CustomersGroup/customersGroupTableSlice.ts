import { createSlice } from '@reduxjs/toolkit';
import { getCustomerGroupTableReducer } from './customersGroupTableExtraReducers';
import { customersGroupSliceModel } from 'src/app/models/customersGroupSliceModel';
import { CustomerGroupDefaultValue } from 'src/app/interface/CustomerGroupInterface';

const initialState: customersGroupSliceModel = {
	customersGroup: [],
	isLoading: false,
	error: null,
	customerGroupItem: CustomerGroupDefaultValue(),
};

const customerGroupSlice = createSlice({
	name: 'customersGroup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCustomerGroupTableReducer(builder);
	},
});

export default customerGroupSlice.reducer;
