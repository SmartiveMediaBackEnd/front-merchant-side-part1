import {
	InventoryIcon,
	PaymentIcon,
	ProductsIcon,
	SettingsIcon,
	ShippingIcon,
} from 'src/app/utils/icons';

export interface StoreLaunchStep {
	id?: string;
	title: string;
	description: string;
	buttonText: string;
	Icon: React.ComponentType<{ className?: string }>;
	classes?: string;
}

export const basicSetup: StoreLaunchStep[] = [
	{
		id: 'generalSettings',
		title: 'General Settings',
		description: 'Set your store general information',
		buttonText: 'Activate',
		Icon: SettingsIcon,
		classes: 'first-step',
	},
	{
		id: 'addProducts',
		title: 'Products',
		description: 'Add at least 1 product to your store',
		buttonText: 'Add',
		Icon: ProductsIcon,
		classes: 'second-step',
	},
	{
		id: 'createInventory',
		title: 'Inventory',
		description: 'Create at least 1 inventory to locate and manage',
		buttonText: 'Add',
		Icon: InventoryIcon,
		classes: 'third-step',
	},
];
export const servicesSetup: StoreLaunchStep[] = [
	{
		id:'addShipping',
		title: 'shipping',
		description:
			'Add shipping method for your store, so you can deliver products to your customers',
		buttonText: 'Activate',
		Icon: ShippingIcon,
	},
	{
		id:'addPayment',
		title: 'payment',
		description: 'Add payment method for your store, so your customers can pay you online',
		buttonText: 'Activate',
		Icon: PaymentIcon,
	},
];
