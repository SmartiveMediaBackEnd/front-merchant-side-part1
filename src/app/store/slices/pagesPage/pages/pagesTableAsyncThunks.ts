import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getPagesTable = createAsyncThunk('pagesTable/getPagesTable', () =>
	PublicRequest.getData('pages'),
);
