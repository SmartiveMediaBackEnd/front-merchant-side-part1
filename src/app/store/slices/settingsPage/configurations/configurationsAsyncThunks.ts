import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { QueriesInterface } from 'src/pages/SettingsPage/QueriesSettings/_hook/HookForQueriesSettings';
import { ReviewInterface } from 'src/pages/SettingsPage/ReviewsSettings/_hook/HookForReviewSettings';
import { languageSettingsInterface } from 'src/pages/SettingsPage/LanguageSettings/HookForLanguageSettings';
import { GeneralSettingsInterface } from 'src/pages/SettingsPage/GeneralSettings/_hook/HookForGeneralForm';
import { OrderCustomize } from 'src/pages/SettingsPage/CustomizationsSettings/_hook/HookOrderInvoiceCustomize';
import { DoubleOpt } from 'src/pages/SettingsPage/CustomizationsSettings/_hook/HookNewsletterConsent';
import { ProductCustomize } from 'src/pages/SettingsPage/CustomizationsSettings/_hook/CustomizationsSettingsHooks';
import { CheckoutCustomize } from 'src/pages/SettingsPage/CustomizationsSettings/_hook/HookCheckoutCustomize';
import { TaxConfigSetting } from 'src/pages/SettingsPage/Taxes/taxRates/_hook/HookTaxConfigSettings';

// get config list
// post store custom
export const postStoreCustom = createAsyncThunk('postStoreCustom/postStoreCustom', (payload: any) =>
	PublicRequest.postData(payload, `merchant/settings/config/store-custom`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

////////////////////////////////////////////////////////////////////////
// post general settings store
export const postGeneralSettingsStore = createAsyncThunk(
	'postGeneralSettingsStore/postGeneralSettingsStore',
	(payload: GeneralSettingsInterface) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post front defaults
export const postFrontDefaults = createAsyncThunk(
	'postFrontDefaults/postFrontDefaults',
	(payload: languageSettingsInterface) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post review
export const postReview = createAsyncThunk(
	// finished but it has a problem
	'postReview/postReview',
	(payload: ReviewInterface) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post queries
export const postQueries = createAsyncThunk(
	// finished but it has a problem
	'postQueries/postQueries',
	(payload: QueriesInterface) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customizations-checkout
export const postCustomizationsCheckout = createAsyncThunk(
	'postCustomizationsCheckout/postCustomizationsCheckout',
	(payload: CheckoutCustomize) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-product
export const postCustomizationProduct = createAsyncThunk(
	'postCustomizationProduct/postCustomizationProduct',
	(payload: ProductCustomize) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-double-opt
export const postCustomizationDoubleOpt = createAsyncThunk(
	'postCustomizationDoubleOpt/postCustomizationDoubleOpt',
	(payload: DoubleOpt) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-order-invoice
export const postCustomizationOrderInvoice = createAsyncThunk(
	'postCustomizationOrderInvoice/postCustomizationOrderInvoice',
	(payload: OrderCustomize) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post taxes
export const postTaxesConfiguration = createAsyncThunk(
	'postTaxesConfiguration/postTaxesConfiguration',
	(payload: TaxConfigSetting) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
