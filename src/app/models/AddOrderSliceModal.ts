import { AddCheckOutFormValues } from "src/pages/OrdersPage/AddOrder/Comp/AddCheckOut/_hook/useAddCheckOutForm"
import { Product } from "src/pages/ProductsPage/_comp/data"
import { statusGlobal } from '.';
// Define the initial state type and value
export interface AddOrderSliceState extends statusGlobal {
    Add_Order_Data: {
        customer_id: string
        products: Product[]
        address_id: string
        deliveryData: AddCheckOutFormValues
    }
   
}