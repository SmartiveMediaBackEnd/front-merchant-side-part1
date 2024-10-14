import { combineReducers } from '@reduxjs/toolkit';
import attributesProducts from './slices/Attributes/Attribute/attributeSlice';
import attributesFamilies from './slices/Attributes/AttributeFamilies/attributeFamiliesSlice';
import couponPage from './slices/marketingPage/coupon/couponSlice';
import cartRule from './slices/marketingPage/cartRule/cartRuleSlice';
import catalogRules from './slices/marketingPage/catalogRule/catalogRuleSlice';

import productsAnalytics from './slices/analyticsPage/ProductsAnalytics/productsAnalyticsTableSlice';
import ordersAnalytics from './slices/analyticsPage/OrderAnalytics/orderAnalyticsTableSlice';
import customersAnalytics from './slices/analyticsPage/CustomerAnalytics/customersAnalyticsTableSlice';
import allCustomer from './slices/customersPage/AllCustomers/customersTableSlice';
import customersGroup from './slices/customersPage/CustomersGroup/customersGroupTableSlice';
import pages from './slices/pagesPage/pages/pagesTableSlice';
import blog from './slices/pagesPage/blog/blogTableSlice';
import allProducts from './slices/productsPage/allProducts/allProductsTableSlice';
import brands from './slices/productsPage/brands/brandsTableSlice';
import bulkEdit from './slices/productsPage/bulkPrices/bulkPricesSlice';
import inventory from './slices/productsPage/inventory/inventoryTableSlice';
import categoriesTable from './slices/productsPage/categories/categoriesTable/categoriesTableSlice';
import subCategories from './slices/productsPage/categories/subCategoriesTable/subCategoriesSlice';
import allOrders from './slices/ordersPage/allOrders/allOrdersSlice';

import AddOrderSlice from './slices/AddOrderPage/AddOrderSlice';
import AddresseCustomersSlice from './slices/customersPage/AddresseCustomer/AddresseCustomersSlice';

// imports settings page
import shippingSettings from './slices/settingsPage/shipping/shippingSlice';
import usersSettings from './slices/settingsPage/users/usersSlice';
import rolesSettings from './slices/settingsPage/roles/rolesSlice';
import helpSettings from './slices/settingsPage/help/helpSlice';
import emailNotificationSettings from './slices/settingsPage/emailNotification/emailNotificationSlice';
import merchantPaymentSettings from './slices/settingsPage/payment/merchantPaymentMethods/merchantPaymentSlice';
import paymentMethods from './slices/settingsPage/payment/paymentMethods/paymentMethodsSlice';
import configurations from './slices/settingsPage/configurations/configurationsSlice';
import taxCategorySettings from './slices/settingsPage/tax/taxCategories/taxCategoriesSlice';
import taxRateSettings from './slices/settingsPage/tax/taxRates/taxRateSlice';
import branchSettings from './slices/settingsPage/branches/branchesSlice';
import attributesSlice from "./slices/Attributes/AttributeTableSlice";

import subdomains from "./slices/subdomains/subdomainSlice";
import faqs from "./slices/faqs/FaqsSlice";
import specifications from "./slices/specifications/SpecificationsSlice";

export const rootReducer = combineReducers({

	// Auth
	subdomains:subdomains,
	// ATTRIBUTES
	attributesProducts:attributesProducts,
	attributesFamilies:attributesFamilies,

	// MARKETING
	couponPage:couponPage,
	cartRule:cartRule,
	catalogRules:catalogRules,

	// analytics page
	productsAnalytics: productsAnalytics,
	ordersAnalytics: ordersAnalytics,
	customersAnalytics: customersAnalytics,
	// customers page
	allCustomer: allCustomer,
	AddressesCustomer: AddresseCustomersSlice,
	customersGroup: customersGroup,
	// pages page
	pages: pages,
	blog: blog,
	// products page
	allProducts: allProducts,
	brands: brands,
	inventory: inventory,
	categoriesTable: categoriesTable,
	subCategories: subCategories,
	bulkEdit: bulkEdit,
	// orders page
	allOrders: allOrders,
	addOrder: AddOrderSlice,
	// settings page
	shippingSettings: shippingSettings,
	taxCategorySettings:taxCategorySettings,
	taxRateSettings:taxRateSettings,
	usersSettings: usersSettings,
	rolesSettings: rolesSettings,
	merchantPaymentSettings: merchantPaymentSettings,
	paymentMethods: paymentMethods,
	helpSettings: helpSettings,
	emailNotificationSettings: emailNotificationSettings,
	configurations: configurations,
	branchSettings:branchSettings,
	attributes:attributesSlice,

	// faqs
	faqs:faqs,
	specifications:specifications,
});
