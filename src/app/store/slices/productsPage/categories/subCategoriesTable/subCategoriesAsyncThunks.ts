import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getSubCategories = createAsyncThunk('subCategories/getSubCategories', () =>
	PublicRequest.getData('subCategories'),
);
