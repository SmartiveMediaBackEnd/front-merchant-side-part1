import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCheckOutFormValues } from 'src/pages/OrdersPage/AddOrder/Comp/AddCheckOut/_hook/useAddCheckOutForm';
import { AddAddressInterface } from 'src/pages/OrdersPage/AddOrder/Comp/AddOrderAddress/_hook/useOrderAddress';
import { INoteForm } from 'src/pages/OrdersPage/OrderDetails/Forms/CustomerNoteForm';
import { OrdercustomerFormInterface } from 'src/pages/OrdersPage/OrderDetails/Forms/HookCustomerForm';
import { orderStatusFormInterface } from 'src/pages/OrdersPage/OrderDetails/Forms/HookOrderStatus';

export const getAllOrdersPageTable = createAsyncThunk('allOrdersPage/getAllOrdersPageTable', () =>
	PublicRequest.getData('merchant/sales/orders'),
);

export const getExportOrders = createAsyncThunk('allCustomersTable/getExportCustomers', () =>
	PublicRequest.getData('merchant/sales/orders/export'),
);

export const CancelOrder = createAsyncThunk('allOrdersPage/CancelOrder', (payload: { data: { comment?: string, customer_notified?: string }, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/${payload.id}/cancel`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const ChangeOrderStatus = createAsyncThunk('allOrdersPage/ChangeOrderStatus', (payload: { data: orderStatusFormInterface, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/status/${payload.id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
)
export const AddOrderNote = createAsyncThunk('allOrdersPage/AddOrderNote', (payload: { data: INoteForm, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/${payload.id}/comments`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const updateOrderCustomer = createAsyncThunk('allOrdersPage/updateOrderCustomer', (payload: { data: OrdercustomerFormInterface, id: string }) =>
	PublicRequest.putData(payload.data, `merchant/sales/orders/customer-info/update/${payload.id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const updateOrderaddress = createAsyncThunk('allOrdersPage/updateOrderaddress', (payload: { data: AddAddressInterface, id: string }) =>
	PublicRequest.putData(payload.data, `merchant/sales/orders/customer-address/update/${payload.id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const updateOrderCheckOut = createAsyncThunk('allOrdersPage/updateOrderCheckOut', (payload: { data: AddCheckOutFormValues, id: string }) =>
	PublicRequest.putData(payload.data, `merchant/sales/orders/checkout/update/${payload.id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


export const getOrderInfo = createAsyncThunk(
	'allCustomersTable/getOrderInfo',
	(payload: string) => PublicRequest.getData(`merchant/sales/orders/show/${payload}`),
);





