import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getOrderAnalyticsTable = createAsyncThunk(
	'orderAnalyticsTable/getOrderAnalyticsTable',
	() => PublicRequest.getData('ordersAnalyticsTable'),
);
