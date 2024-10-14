// import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSubdomain = createAsyncThunk('subdomain/getSubdomain', (payload: string) =>
	PublicRequest.getData(`merchant/get-domain/${payload}`),
);



// export const getSubdomain = createAsyncThunk<GetSubdomainResponse, string>(
//     'subdomain/getSubdomain',
//     async (email: string, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`merchant/get-domain`, {
//                 params: { email }
//             });
//             console.log('response.data;',response.data)
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response?.data || 'An error occurred');
//         }
//     }
// );



