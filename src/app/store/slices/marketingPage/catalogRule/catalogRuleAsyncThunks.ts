import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

// get catalog rule List data
export const getCatalogRules = createAsyncThunk('catalogRules/getCatalogRules', () =>
	PublicRequest.getData(`merchant/marketing/promotions/catalog-rules`),
);

// get catalog rule Show
export const getCatalogRuleShow = createAsyncThunk(
	'catalogRuleShow/getCatalogRuleShow',
	(payload: string) => PublicRequest.getData(`merchant/marketing/promotions/catalog-rules/${payload}`), 
);

// create catalog rule 
export const postCatalogRule = createAsyncThunk(
	"catalogRule/postCatalogRule",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/marketing/promotions/catalog-rules`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update catalog rule 
export const putCatalogRule = createAsyncThunk(
	"updateCatalogRule/putCatalogRule",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/marketing/promotions/catalog-rules/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// delete catalog rule
export const deleteCatalog = createAsyncThunk(
	'delete/deleteCatalog',
	(payload: string) => PublicRequest.deleteData(`merchant/marketing/promotions/catalog-rules/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);



