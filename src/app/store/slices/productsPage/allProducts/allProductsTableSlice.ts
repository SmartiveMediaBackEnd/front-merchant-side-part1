import { createSlice } from '@reduxjs/toolkit';
import { getAllProductsReducer } from './allProductsExtraReducers';
import { Product, allProducts, initialProduct } from 'src/pages/ProductsPage/_comp/data';

export interface AllProductsStatus {
	allProducts: Product[];
	isLoading: boolean;
	error: string | null | unknown;
	isLoadingAddOrUpdate:boolean
	product:Product
}

const initialState: AllProductsStatus = {
	allProducts: allProducts,
	isLoading: false,
	error: null,
	isLoadingAddOrUpdate: false,
	product:initialProduct()
};

const allProductsSlice = createSlice({
	name: 'allProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllProductsReducer(builder);
	},
});


export const getAllProducts = (state: { allProducts: AllProductsStatus }) => state.allProducts;

export default allProductsSlice.reducer;

