import { createSlice } from '@reduxjs/toolkit';
import { getAllCustomerTableReducer } from './customersTableExtraReducers';
import { allCustomerSliceModel } from 'src/app/models/allCustomerSliceModel';
import { initialCustomerData } from 'src/app/interface/CustomerInterface';

const initialState: allCustomerSliceModel = {
	allCustomers: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,
	CustomerInfo: initialCustomerData()
};

const allCustomerSlice = createSlice({
	name: 'allCustomer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllCustomerTableReducer(builder);
	},
});

// export const selectAllCustomer = (state: { allCustomer: allCustomerStatus }) => state.allCustomer;

export default allCustomerSlice.reducer;
