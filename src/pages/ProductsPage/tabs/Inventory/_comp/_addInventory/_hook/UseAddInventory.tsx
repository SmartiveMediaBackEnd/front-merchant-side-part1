// import {
// 	AddAddressInterface,
// 	createAddressSchema,
// 	getDefaultValues,
// } from 'src/pages/OrdersPage/AddOrder/Comp/AddOrderAddress/_hook/useOrderAddress';
import { z } from 'zod';
const RequiredAddressData = z.string().min(1);

// export interface AddInventoryInterface extends AddAddressInterface {
export interface AddInventoryInterface {
	code: string;
	name: string;
	description: string;
	priority: number;
	branch_id: string;
	contact_name: string;
	contact_email: string;
	contact_number: string;
	contact_fax: number;
	status: number;
	postcode: string;

	// country?: string;
	// city?: string;
	// state?: string;
	// street?: string;
	// building: string;
	// landmark?: string;
}
// const requiredFieldSchema = z.string().min(1, { message: 'This field is required' });

// const getConditionalSchema = (isRequired?: boolean) =>
// 	isRequired ? requiredFieldSchema : z.string().optional();



export const UseAddInventory = (selectedOption: string) => {
	// const isManualEntry = selectedOption === 'Add manually';

	const AddInventoryPageSchema = {
		code: RequiredAddressData,
		description: RequiredAddressData,
		priority: z.coerce.number().positive(),
		name: RequiredAddressData,
		branch_id: RequiredAddressData,
		contact_name: RequiredAddressData,
		contact_email: RequiredAddressData.email(),
		contact_number: z.string().min(7),
		contact_fax: z.coerce.number().positive(),
		status: z.number(),
		postcode: RequiredAddressData,
		// ...createAddressSchema(false, selectedOption, false),
		// country: getConditionalSchema(isManualEntry),
		// city: z.string().optional().or(z.literal('')),
		// state: getConditionalSchema(isManualEntry),
		// street: getConditionalSchema(isManualEntry),
		// building: requiredFieldSchema,
		// landmark: getConditionalSchema(isManualEntry),
	};

	const handelDefaultValue = () => {
		return {
			code: '',
			name: '',
			description: '',
			priority: 0,
			branch_id: '',
			contact_name: '',
			contact_email: '',
			contact_number: '',
			contact_fax: 0,
			status: 0,
			postcode: '',
			// country: '',
			// city: '',
			// state: '',
			// street: '',
			// building: '',
			// landmark: '',
			// ...getDefaultValues(),
		};
	};

	return {
		AddInventoryPageSchema,
		handelDefaultValue,
	};
};
