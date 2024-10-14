import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


export const getAllAttributes = createAsyncThunk('attributes/getAllAttributes', () =>
	PublicRequest.getData('merchant/catalog/attributes/list'),
);



