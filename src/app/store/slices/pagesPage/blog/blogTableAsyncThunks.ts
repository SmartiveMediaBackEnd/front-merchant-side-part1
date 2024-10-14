import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getBlogTable = createAsyncThunk('blogTable/getBlogTable', () =>
	PublicRequest.getData('blog'),
);
