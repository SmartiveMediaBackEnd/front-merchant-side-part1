import { CustomerInterface } from "./CustomerInterface";

export interface CustomerGroupInterface {
	id: string;
	name: string;
	customers_count: number;
	description: string;
	status: number;
	customers: CustomerInterface[]
}

export const CustomerGroupDefaultValue = () => {
	return {
		id: "",
		name: "",
		customers_count: 0,
		description: "",
		status: 0,
		customers: []
	}
}
export interface AddCustomerGroupInterface {
	code?: string
	id: string;
	name?: string;
	customers_count?: number;
	description?: string;
	status?: boolean;
	customers: string[]
}
