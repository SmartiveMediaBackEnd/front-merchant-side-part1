import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { TaxRateInterface } from 'src/pages/SettingsPage/Taxes/taxRates/_hook/HookTaxRate';

// get Tax Rates List data
export const getTaxRatesList = createAsyncThunk('taxRates/getTaxRatesList', () =>
	PublicRequest.getData('merchant/settings/tax-rates'),
);

// get Tax Rates Show
export const getTaxRatesShow = createAsyncThunk(
	'taxRatesShow/getTaxRatesShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/tax-rates/${payload}`), 
);

// create tax rates 
export const createTaxRate = createAsyncThunk(
	"taxRates/createTaxRate",
	(payload: TaxRateInterface) =>
		PublicRequest.postData(payload, `merchant/settings/tax-rates`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update user
export const updateTaxRate = createAsyncThunk(
	'taxRates/updateTaxRate',
	(payload: { data: TaxRateInterface, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/tax-rates/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete tax rate
export const deleteTaxRate = createAsyncThunk(
	'delete/deleteTaxRate',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/tax-rates/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);



