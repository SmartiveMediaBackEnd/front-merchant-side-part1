import {
	// AddCustomerGroup,
	// AddCustomerPage,
	// AddNewAddressCustomer,
	// AddOrder,
	// AnalyticsPage,
	// AppsPage,
	// AppsTabs,
	// BillingAndPlans,
	// ChooseEmail,
	// CustomerInfo,
	// CustomersPage,
	HomePage,
	// MarketingPage,
	// Nested_pages_SettingsConfig,
	// OrderDetails,
	ProductsPage,
	ProductsTabs,
	// ReviewsPage,
	// ServicesPage,
	// SettingsConfig,
	// SettingsPage,
	// SocialAppDetails,
	// StorePage,
} from 'src/pages';
// import { AnalyticsTabs } from 'src/pages/AnalyticsPage/_comp';
// import { MarketingConfig, MarketingTabs } from 'src/pages/MarketingPage/_comp';
// import EmailForm from 'src/pages/MarketingPage/_comp/EmailForm/Email/EmailForm';
// import PackageSubscribe from 'src/pages/MarketingPage/_comp/EmailForm/Email/_comp/PackageSubscribe';
// import AllOrders from 'src/pages/OrdersPage/AllOrders';
// import PagesPage from 'src/pages/PagesPage/PagesPage';
// import PagesConfig from 'src/pages/PagesPage/_comp/PagesConfig';
import { SubCategories } from 'src/pages/ProductsPage/tabs/Categories/_comp/subCategory/SubCategories';
import AddInventoryPage from 'src/pages/ProductsPage/tabs/Inventory/_comp/_addInventory/AddInventoryPage';
import {
	BundleProductPage,
	ConfigurableProductPage,
	FoodProductPage,
	SimpleProductForm,
	VirtualProductPage,
} from 'src/pages/ProductsPage/tabs/_comp';
// import PurchaseConfig from 'src/pages/ServicesPage/_comp/PurchaseServices/_comp/PurchaseConfig';
// import SuccessfullyPurchased from 'src/pages/ServicesPage/_comp/PurchaseServices/_comp/SuccessfullyPurchased/SuccessfullyPurchased';
// import SetupConfig from 'src/pages/SettingsPage/Shipping/OpenSetup/Setup/SetupConfig';
// import SetupOpenConfig from 'src/pages/SettingsPage/Shipping/OpenSetup/SetupOpenConfig';
// import Config from 'src/pages/SettingsPage/Shipping/OpenSetup/Smsa/Config';
// import ShippingConfig from 'src/pages/SettingsPage/Shipping/ShippingConfig';
// import StoreConfig from 'src/pages/StorePage/_comp/StoreConfig';
// import StoreTabs from 'src/pages/StorePage/_comp/StoreTabs';
import BulkEdit from '../components/optimized/BulkEdit/BulkEdit';
import AttributesForm from 'src/pages/ProductsPage/tabs/Attributes/_comp/AttributesForm';
import AttributeFamilyForm from 'src/pages/ProductsPage/tabs/AttributeFamilies/_comp/AttributeFamilyForm';
// import { ProductFormProviderVariants } from '../context/VariantsContext';
import { FormStoreProvider } from '../context/ConfigurableContext ';
import UpdateVariant from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Pages/Configurable/_comp/UpdateVariant';
import BasicInfo from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Pages/Configurable/BasicInfo';

interface Route {
	path: string;
	element: React.ReactNode;
	children?: {
		path: string;
		element: React.ReactNode;
	}[];
}
export const PagesRoutes: Route[] = [
	//  home page
	{ path: '/home', element: <HomePage /> },
	// Choose Email template
	// { path: '/subscribeEmail', element: <EmailForm /> },
	// { path: '/subscribeEmail/package', element: <PackageSubscribe /> },

	// ///////////////////////////////////

	// reviews page
	// { path: '/reviews', element: <ReviewsPage /> },

	// // services Routes
	// { path: '/services', element: <ServicesPage /> },
	// { path: '/services/:config', element: <PurchaseConfig /> },
	// { path: '/services/:config/:config', element: <SuccessfullyPurchased /> },

	// // Customers Routes
	// {
	// 	path: '/customers',
	// 	element: <CustomersPage />,
	// },
	// {
	// 	path: '/customers/:id',
	// 	element: <CustomerInfo />,
	// },
	// {
	// 	path: '/customers/:id/addNewAddress',
	// 	element: <AddNewAddressCustomer />,
	// },
	// { path: '/customers/addCustomer', element: <AddCustomerPage /> },
	// { path: '/customers/addGroupCustomer', element: <AddCustomerGroup /> },
	// // Apps Routes
	// {
	// 	path: '/apps',
	// 	element: <AppsPage />,
	// 	children: [
	// 		{ path: ':tab', element: <AppsTabs /> },
	// 		{ path: 'app_store/:platform', element: <SocialAppDetails /> },
	// 	],
	// },

	// Pages Routes
	// {
	// 	path: '/pages',
	// 	element: <PagesPage />,
	// },
	// {
	// 	path: '/pages/:config',
	// 	element: <PagesConfig />,
	// },

	// // Orders Routes
	// {
	// 	path: '/orders',
	// 	element: <AllOrders />,

	// },
	// /orders/orderDetails/8965742
	// {
	// 	path: '/orders/orderDetails/:id',
	// 	element: <OrderDetails />,
	// },
	// {
	// 	path: '/order/addOrder',
	// 	element: <AddOrder />,
	// },

	// Products Routes
	{
		path: '/products',
		element: <ProductsPage />,
		children: [{ path: ':tab', element: <ProductsTabs /> }],
	},
	{ path: '/products/inventory/addInventory', element: <AddInventoryPage /> },
	// '/products/new/configurable'
	{
		path: '/products/new/configurable', element: <FormStoreProvider>

			<ConfigurableProductPage />

		</FormStoreProvider >
	},

	// {
	// 	path: '/products/new/basicInfo', element: <FormStoreProvider>

	// 		<BasicInfo />

	// 	</FormStoreProvider >
	// },
	// '/products/new/simple'
	{ path: '/products/new/updateVariant', element: <UpdateVariant /> },
	// '/products/new/virtual'
	{ path: '/products/new/virtual', element: <VirtualProductPage /> },
	// '/products/new/food'
	{ path: '/products/new/food', element: <FoodProductPage /> },
	// '/products/new/bundle'
	{ path: '/products/new/bundle', element: <BundleProductPage /> },

	// sub categories
	{
		path: '/products/categories/SubCategories',
		element: <SubCategories />,
	},

	// add attributes
	{
		path: '/products/attributes/add-attribute',
		element: <AttributesForm />,
	},
	// add family
	{
		path: '/products/attributeFamilies/add-family',
		element: <AttributeFamilyForm />,
	},
	// Settings Routes
	// {
	// 	path: '/settings',
	// 	element: <SettingsPage />,
	// },
	// {
	// 	path: '/settings/:config',
	// 	element: <SettingsConfig />,
	// },
	// {
	// 	path: '/settings/billing',
	// 	element: <BillingAndPlans />,
	// },
	// {
	// 	path: '/settings/:config/:nested_page',
	// 	element: <Nested_pages_SettingsConfig />,
	// },

	// {
	// 	path: '/settings/shipping/:config',
	// 	element: <ShippingConfig />,
	// },
	// {
	// 	path: '/settings/shipping/:config/:config',
	// 	element: <Config />,
	// },
	// {
	// 	path: '/settings/shipping/:config/:config/:setup',
	// 	element: <SetupOpenConfig />,
	// },
	// {
	// 	path: '/settings/shipping/:config/:config/:setup/:config',
	// 	element: <SetupConfig />,
	// },
	// Marketing Routes
	// {
	// 	path: '/marketing',
	// 	element: <MarketingPage />,
	// 	children: [
	// 		{ path: ':tab', element: <MarketingTabs /> },
	// 		{ path: ':tabName/:config', element: <MarketingConfig /> },
	// 		{ path: 'email-form', element: <ChooseEmail /> },
	// 	],
	// },

	// store Routes
	//
	// {
	// 	path: '/store',
	// 	element: <StorePage />,
	// 	children: [
	// 		{ path: ':tab', element: <StoreTabs /> },
	// 		{ path: ':tabName/:id', element: <StoreConfig /> },
	// 	],
	// },

	// // Analytics Routes
	// {
	// 	path: '/analytics',
	// 	element: <AnalyticsPage />,
	// 	children: [{ path: ':tab', element: <AnalyticsTabs /> }],
	// },
	// {
	// 	path: '/bulk-edit',
	// 	element: <BulkEdit />,
	// }
];
