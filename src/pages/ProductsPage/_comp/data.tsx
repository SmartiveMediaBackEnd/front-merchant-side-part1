import { nanoid } from 'nanoid';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { LiaTrashAlt } from 'react-icons/lia';
import { SiMicrosoftexcel } from 'react-icons/si';

import { AnalyticsIcon, OrdersIcon } from 'src/app/utils/icons';

// Define products array with correct type


export interface VariantProduct {
	variants: Product;
	shipping_rate_type: string;
	shipping_method: string;
	shipping_rate: string;
	state: string;
	weight_unit: string;
	height: string;
	width: string;
	length: string;
	dimension_unit: string;
	downloaded_link: string;
	is_shipped: number;
	base_qty: number;
	meta_keywords: string;
	meta_description: string;
	meta_title: string;
	cost: number;
	page_title: string;
	brand_id: string;
	taxable: number;
	status: number;
	name: string;
	category: string;
	option: number;
	imageUrl: string;
	sku: string;
	id: string;
	quantity: number;
	qty: number;
	price: number;
	en: { name: string; description: string };
	ar: { name: string; description: string };
	type: string;
	images: {
		id: string;
		large_image_url: string;
		medium_image_url: string;
		original_image_url: string;
		path: string;
		small_image_url: string;
		url: string;
	}[];
	inventory_sources: {
		id: string;
		inventory_source_id: string;
		product_id: string;
		qty: number;
	}[];
	continue_selling: number;
	categories: string[];
	discount_amount?: string;
	discount_percent?: string;
	grant_total?: number;
	qty_ordered?: number;
	tax_amount?: string;
	tax_percent?: string;
	total: string;
	total_weight?: string;
	discount: string;
	weight?: string;
}

export interface Product {
	variants: VariantProduct[];
	shipping_rate_type: string;
	shipping_method: string;
	shipping_rate: string;
	state: string;
	weight_unit: string;
	height: string;
	width: string;
	length: string;
	dimension_unit: string;
	downloaded_link: string;
	is_shipped: number;
	base_qty: number;
	meta_keywords: string;
	meta_description: string;
	meta_title: string;
	cost: number;
	page_title: string;
	brand_id: string;
	taxable: number;
	status: number;
	name: string;
	category: string;
	option: number;
	imageUrl: string;
	sku: string;
	id: string;
	quantity: number;
	qty: number;
	price: number;
	en: { name: string; description: string };
	ar: { name: string; description: string };
	type: string;
	images: {
		id: string;
		large_image_url: string;
		medium_image_url: string;
		original_image_url: string;
		path: string;
		small_image_url: string;
		url: string;
	}[];
	inventory_sources: {
		id: string;
		inventory_source_id: string;
		product_id: string;
		qty: number;
	}[];
	continue_selling: number;
	categories: string[];
	discount_amount?: string;
	discount_percent?: string;
	grant_total?: number;
	qty_ordered?: number;
	tax_amount?: string;
	tax_percent?: string;
	total: string;
	total_weight?: string;
	discount: string;
	weight?: string;
}



export const initialProduct = () => {
	return {
		variants: [],
		weight_unit: '',
		shipping_rate_type: '',
		shipping_method: '',
		shipping_rate: '',
		state: '',
		height: '',
		width: '',
		length: '',
		dimension_unit: '',
		downloaded_link: '',
		is_shipped: 0,
		meta_keywords: '',
		base_qty: 0,
		continue_selling: 0,
		cost: 0,
		meta_title: '',
		meta_description: '',
		page_title: '',
		brand_id: '',
		taxable: 0,
		status: 0,
		name: '',
		category: '',
		option: 0,
		imageUrl: '',
		sku: '',
		id: '',
		quantity: 0,
		qty: 0,
		price: 0,
		en: { name: '', description: '' },
		ar: { name: '', description: '' },
		type: '',
		images: [],
		inventory_sources: [],
		categories: [],
		discount_amount: '',
		discount_percent: '',
		grant_total: 0,
		qty_ordered: 0,
		tax_amount: 0,
		tax_percent: '',
		total: '',
		total_weight: '',
		weight: '',
		discount: '',
	};
};

export const allProducts: Product[] = [
	{
		id: '1',
		name: 'Cozy Fleece Blanket',
		category: 'Blankets',
		sku: 'BLK-001',
		option: 5,
		quantity: 50,
		price: 29.99,
		imageUrl: 'images/product.png',
	},
	{
		id: '2',
		name: 'Luxury Down Comforter',
		category: 'Bedding',
		sku: 'BED-002',
		option: 7,
		quantity: 20,
		price: 199.99,
		imageUrl: 'images/product.png',
	},
	{
		id: '3',
		name: 'Memory Foam Pillow',
		category: 'Pillows',
		sku: 'PIL-003',
		option: 3,
		quantity: 100,
		price: 49.99,
		imageUrl: 'images/product.png',
	},
];

export const productDropdownMenu = [
	{
		id: nanoid(),
		title: 'Simple Product',
		description: "You don't need advanced options to fill",
		shipping: true,
		to: '/products/new/simple',
	},
	{
		id: nanoid(),
		title: 'Configurable product',
		description: 'You need all options available',
		shipping: false,
		to: '/products/new/configurable',
	},
	// {
	// 	id: nanoid(),
	// 	title: 'Configurable test',
	// 	description: 'You need all options available',
	// 	shipping: false,
	// 	to: '/products/new/basicInfo',
	// },
	// {
	// 	id: nanoid(),
	// 	title: 'Virtual Product',
	// 	describtion: 'Services, ebooks, Downloadable',
	// 	shipping: false,
	// 	to: '/products/new/virtual',
	// },
	// {
	// 	id: nanoid(),
	// 	title: 'Food',
	// 	describtion: 'Food & Drinks have special way shipping',
	// 	shipping: true,
	// 	to: '/products/new/food',
	// },
	// {
	// 	id: nanoid(),
	// 	title: 'Bundle',
	// 	describtion: 'Collection of related products',
	// 	shipping: false,
	// 	to: '/products/new/bundle',
	// },
];

export const productSortMenu = [
	{ id: nanoid(), text: 'Name A to Z' },
	{ id: nanoid(), text: 'Name Z to A' },
	// { id: nanoid(), text: 'SKU Ascending' },
	// { id: nanoid(), text: 'SKU Descending' },
	// { id: nanoid(), text: 'Price Low in first' },
	// { id: nanoid(), text: 'Price High in first' },
	// { id: nanoid(), text: 'Date Added' },
	// { id: nanoid(), text: 'Date modified' },
];

export const productActionsMenu = [
	{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
	{ id: nanoid(), text: 'Export products', icon: <SiMicrosoftexcel className='iconClass' /> },
	{ id: nanoid(), text: 'Import products', icon: <FiUploadCloud className='iconClass' /> },
	{
		id: nanoid(),
		text: 'Delete all products',
		icon: <LiaTrashAlt size='28' className='fill-error' />,
	},
];

// Define setting menus for setting button action and will be used in brands section page
export const productSettingsMenu = [
	// { id: nanoid(), text: 'Copy product link', icon: <CopyIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product report', icon: <AnalyticsIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product orders', icon: <OrdersIcon className='fill-subtitle' /> },
	{
		id: nanoid(),
		text: 'Export product orders XLS',
		icon: <FiUploadCloud className='iconClass' />,
	},
	{ id: nanoid(), text: 'Delete product', icon: <LiaTrashAlt size='25' className='fill-error' /> },
];
