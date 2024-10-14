import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get attributes families
export const getAttributesFamilies = createAsyncThunk('attributesFamilies/getAttributesFamilies', () =>
	PublicRequest.getData('merchant/catalog/attribute-families/list'),
);

// get attribute Families show
export const getAttributeFamiliesShow = createAsyncThunk('attributeFamiliesShow/getAttributeFamiliesShow', (payload: string) =>
	PublicRequest.getData(`merchant/catalog/attribute-families/show/${payload}`),
);

// create attribute
export const postAttributeFamilies = createAsyncThunk(
	"addAttributeFamilies/PostAttributeFamilies",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/catalog/attribute-families/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update attribute Families
export const putAttributeFamilies = createAsyncThunk(
	"updateAttributeFamilies/putAttributeFamilies",
	(payload: any) =>
		PublicRequest.putData(payload, `merchant/catalog/attribute-families/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// delete attribute Families
export const deleteAttributeFamilies = createAsyncThunk(
	'deleteAttributeFamilies/deleteAttributeFamilies',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/attribute-families/destroy/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

