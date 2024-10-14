import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCustomersAnalyticsTable = createAsyncThunk(
	'customersAnalyticsTable/getCustomersAnalyticsTable',
	() => PublicRequest.getData('customersAnalyticsTable'),
);
