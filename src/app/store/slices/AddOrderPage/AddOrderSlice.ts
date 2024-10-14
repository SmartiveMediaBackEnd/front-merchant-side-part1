import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddOrderSliceState } from 'src/app/models/AddOrderSliceModal';

import { AddCheckOutFormValues } from 'src/pages/OrdersPage/AddOrder/Comp/AddCheckOut/_hook/useAddCheckOutForm';
import { Product } from 'src/pages/ProductsPage/_comp/data';
import { AddOrderReducer } from './AddOrderExtraReducers';



const initialState: AddOrderSliceState = {
    Add_Order_Data: {
        customer_id: '',
        products: [],
        address_id: '',
        deliveryData: {
            purchase_method: '',
            branch_id: '',
            payment_method: '',
            status: '',
            delivery_method: '',
            shipping_rate: '',
            shipping_method: '',
        }
    },
    isLoadingAddOrUpdate: false,
};

// Create the slice
const AddOrderSlice = createSlice({
    name: 'addOrderdata',
    initialState,
    reducers: {
        setAdd_Order_Data_Customer_id(state: AddOrderSliceState, action: PayloadAction<string>) {
            state.Add_Order_Data.customer_id = action.payload;
        },
        setAdd_Order_Data_Products(state: AddOrderSliceState, action: PayloadAction<Product[]>) {
            state.Add_Order_Data.products = action.payload;
        },
        setAdd_Order_Data_Address_id(state: AddOrderSliceState, action: PayloadAction<string>) {
            state.Add_Order_Data.address_id = action.payload;
        },
        setAdd_Order_Data_DeliveryData(state: AddOrderSliceState, action: PayloadAction<AddCheckOutFormValues>) {

            state.Add_Order_Data.deliveryData = action.payload;
        },
        clearData(state: AddOrderSliceState) {
            state.Add_Order_Data.customer_id = ""
            state.Add_Order_Data.products = []
            state.Add_Order_Data.address_id = ""
            state.Add_Order_Data.deliveryData = {
                purchase_method: '',
                branch_id: '',
                payment_method: '',
                status: '',
                delivery_method: '',
                shipping_rate: '',
                shipping_method: '',
            }

        }
    },
    extraReducers: (builder) => {
        AddOrderReducer(builder);
    },
});

// Export actions and reducer
export const { setAdd_Order_Data_Customer_id, setAdd_Order_Data_Products, setAdd_Order_Data_Address_id, setAdd_Order_Data_DeliveryData, clearData } = AddOrderSlice.actions;
export default AddOrderSlice.reducer;