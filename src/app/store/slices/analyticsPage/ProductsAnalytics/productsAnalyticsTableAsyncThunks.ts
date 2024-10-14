import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getProductsAnalyticsTable = createAsyncThunk(
	'productsAnalyticsTable/getProductsAnalyticsTable',
	() => PublicRequest.getData('productsAnalyticsTable'),
);
