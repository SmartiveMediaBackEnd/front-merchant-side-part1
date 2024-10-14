import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { TaxCategory } from 'src/pages/SettingsPage/Taxes/taxCategories/_hook/HookTaxCategories';

// get Tax Categories List data
export const getTaxCategoriesList = createAsyncThunk('taxCategories/getTaxCategoriesList', () =>
	PublicRequest.getData('merchant/settings/tax-categories?page='),
);

// get Tax Categories Show data
export const getTaxCategoriesShow = createAsyncThunk(
	'taxCategoriesShow/getTaxCategoriesShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/tax-categories/${payload}`),
);

// create tax category 
export const createTaxCategory = createAsyncThunk(
	"taxCategories/createTaxCategory",
	(payload: TaxCategory) =>
		PublicRequest.postData(payload, `merchant/settings/tax-categories`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update tax category
export const updateTaxCategory = createAsyncThunk(
	'taxCategories/updateTaxCategory',
	(payload: { data: TaxCategory, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/tax-categories/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete tax category
export const deleteTaxCategory = createAsyncThunk(
	'delete/deleteTaxCategory',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/tax-categories/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);