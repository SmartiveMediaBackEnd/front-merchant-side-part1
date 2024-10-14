import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddAddressInterface } from 'src/pages/OrdersPage/AddOrder/Comp/AddOrderAddress/_hook/useOrderAddress';


export const getAllAddressesCustomer = createAsyncThunk('AddressesCustomer/getAllAddressesCustomer', (payload: string) =>
	PublicRequest.getData(`merchant/customers/${payload}/addresses`),
);
export const PostAddCustomerAddressRequest = createAsyncThunk(
	"AddressesCustomer/PostAddCustomerAddressRequest",
	(payload: AddAddressInterface) =>
		PublicRequest.postData(payload, `merchant/customers/${payload?.customer_id}/addresses`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const PutUpdateCustomerAddressRequest = createAsyncThunk(
	"AddressesCustomer/PutUpdateCustomerAddressRequest",
	(payload: AddAddressInterface) =>
		PublicRequest.putData(payload, `merchant/customers/${payload.customer_id}/addresses/${payload.address_id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const getCustomerAddresseInfo = createAsyncThunk(
	'AddressesCustomer/getCustomerAddresseInfo',
	(payload: { customer_id: string, address_id: string }) => PublicRequest.getData(`merchant/customers/${payload.customer_id}/addresses/${payload.address_id}`),
);

export const deleteCustomerAddressAction = createAsyncThunk(
	'deleteCustomerAction/deleteCustomerAddressAction',
	(payload: { customer_id: string, address_id: string }) => PublicRequest.deleteData(`merchant/customers/${payload?.customer_id}/addresses/${payload?.address_id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
