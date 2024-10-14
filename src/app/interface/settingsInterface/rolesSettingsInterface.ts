
// * dashboard * //
export interface Dashboard {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: any[];
}
// ***************************************
// * Sales * //
interface Invoices {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenInvoices;
}

interface ChildrenInvoices {
	view: Dashboard;
	store: Dashboard;
}

interface Children {
	'update-customer-address': Dashboard;
	'update-checkout': Dashboard;
	'category-orders': Dashboard;
	view: Dashboard;
	cancel: Dashboard;
	search: Dashboard;
	store: Dashboard;
	status: Dashboard;
	'change-status': Dashboard;
	'update-customer-info': Dashboard;
}
interface Orders {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: Children;
}
interface ChildrenSales {
	orders: Orders;
	invoices: Invoices;
	shipments: Invoices;
	refunds: Invoices;
}
interface Sales {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenSales;
}
// *******************************************************************
// * catalog * //
// catalog / families & customers / addresses - groups
interface ChildrenBulkPrices {
	view: Dashboard;
	store: Dashboard;
	update: Dashboard;
	delete: Dashboard;
}


interface BulkPrices {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenBulkPrices;
}
// catalog / attributes

interface ChildrenCatalogAttributes {
	delete: Dashboard;
	'mass-delete': Dashboard;
	store: Dashboard;
	view: Dashboard;
	'add-option': Dashboard;
}
interface Attributes {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCatalogAttributes;
}
// catalog / categories
interface ChildrenCatalogCategories {
	delete: Dashboard;
	'mass-delete': Dashboard;
	'mass-update': Dashboard;
	store: Dashboard;
	tree: Dashboard;
	'delete-image': Dashboard;
	export: Dashboard;
	import: Dashboard;
}

interface Categories {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCatalogCategories;
}
// catalog / products 

interface ChildrenProducts {
	copy: Dashboard;
	delete: Dashboard;
	'mass-update': Dashboard;
	'mass-delete': Dashboard;
	filter: Dashboard;
	search: Dashboard;
	store: Dashboard;
	view: Dashboard;
	'associated-products': Dashboard;
	'brand-products': Dashboard;
	'inventory-products': Dashboard;
	'update-inventories': Dashboard;
	'delete-image': Dashboard;
	export: Dashboard;
	import: Dashboard;
	'bulk-prices': BulkPrices;
	specifications: BulkPrices;
	faqs: BulkPrices;
}

interface Products {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenProducts;
}
interface ChildrenCatalog {
	products: Products;
	categories: Categories;
	attributes: Attributes;
	families: BulkPrices;
}

interface Catalog {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCatalog;
}
// ****************************************************
// * customers * // 

interface ChildrenReviews {
	view: Dashboard;
	update: Dashboard;
	delete: Dashboard;
	'mass-update': Dashboard;
	'mass-delete': Dashboard;
}

interface Reviews {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenReviews;
}

interface ChildrenCustomers {
	customers: CustomersChild;
	addresses: BulkPrices;
	note: Dashboard;
	groups: BulkPrices;
	reviews: Reviews;
	asks: Reviews;
	orders: Dashboard;
	invoices: Dashboard;
	export: Dashboard;
	import: Dashboard;
}
interface ChildrenCustomersChild {
	view: Dashboard;
	store: Dashboard;
	update: Dashboard;
	delete: Dashboard;
	'mass-update': Dashboard;
	'mass-delete': Dashboard;
}
interface Customers {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCustomers;
}


interface CustomersChild {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCustomersChild;
}
// *********************************************
// * Marketing * //
// sitemaps
// * CatalogRules

// email-marketing
interface ChildrenSubscribers {
	edit: Dashboard;
	delete: Dashboard;
}

interface Subscribers {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenSubscribers;
}

interface ChildrenEmailMarketing {
	'email-templates': CatalogRules;
	events: CatalogRules;
	campaigns: CatalogRules;
	subscribers: Subscribers;
}

interface EmailMarketing {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenEmailMarketing;
}


// Promotions
interface ChildrenCatalogRules {
	create: Dashboard;
	edit: Dashboard;
	delete: Dashboard;
}

interface CatalogRules {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCatalogRules;
}

interface ChildrenCartRules {
	create: Dashboard;
	copy: Dashboard;
	edit: Dashboard;
	delete: Dashboard;
}

interface CarRules {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCartRules;
}

interface ChildrenPromotions {
	'cart-rules': CarRules;
	'catalog-rules': CatalogRules;
}
interface Promotions {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenPromotions;
}
// marketing
interface ChildrenMarketing {
	promotions: Promotions;
	'email-marketing': EmailMarketing;
	sitemaps: CatalogRules;
}
interface Marketing {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenMarketing;
}
// *******************************************
// * Cms * //
interface ChildrenPage {
	create: Dashboard;
	edit: Dashboard;
	delete: Dashboard;
	'mass-delete': Dashboard;
}

interface Pages {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenPage;
}

interface ChildrenCms {
	pages: Pages;
}

interface Cms {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCms;
}
// ***********************************************
// * Settings * //
// Settings / Taxes
interface ChildrenTaxes {
	'tax-categories': BulkPrices;
	'tax-rates': BulkPrices;
}

interface Taxes {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenTaxes;
}
// Settings / usersSettings
interface ChildrenUser {
	store: Dashboard;
	update: Dashboard;
	delete: Dashboard;
}

interface Users {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenUser;
}

interface ChildrenUsers {
	users: Users;
	roles: Users;
}
interface usersSettings {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenUsers;
}
// Settings / Channels

interface ChildrenChannels {
	view: Dashboard;
	update: Dashboard;
	delete: Dashboard;
}

interface Channels {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenChannels;
}


// Settings / Currencies

interface ChildrenCurrencies {
	view: Dashboard;
	store: Dashboard;
	update: Dashboard;
	delete: Dashboard;
	'mass-delete': Dashboard;
}

interface Currencies {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenCurrencies;
}
interface ChildrenSetting {
	locales: BulkPrices;
	currencies: Currencies;
	exchange_rates: CatalogRules;
	inventory_sources: BulkPrices;
	channels: Channels;
	users: usersSettings;
	sliders: CatalogRules;
	taxes: Taxes;
}

interface Settings {
	key: string;
	name: string;
	route: string;
	sort: number;
	children: ChildrenSetting;
}

// permissions data
export interface PermissionsData {
	dashboard: Dashboard;
	sales: Sales;
	catalog: Catalog;
	customers: Customers;
	marketing: Marketing;
	cms: Cms;
	settings: Settings;
	configuration: Dashboard;
}

// permissions list data
export interface Role {
    id: string;
    name: string;
    description: string;
    permission_type: string;
    permissions: any; 
    created_at: string;
    updated_at: string;
}

export interface RolesList {
    data: Role[];
}



