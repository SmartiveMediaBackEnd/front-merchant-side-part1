import { createSlice } from '@reduxjs/toolkit';
import { subdomainReducer } from './subdomainExtraReducers';
export interface SubdomainState {
    subdomain: string[];
    isLoading: boolean;
    error: string | null;
}
const initialState: SubdomainState = {
	subdomain: [],
	isLoading: false,
	error: null,
};

const shippingSlice = createSlice({
	name: 'subdomains',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		subdomainReducer(builder);
	},
});

export default shippingSlice.reducer;
