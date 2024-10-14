// import { configureStore } from '@reduxjs/toolkit';

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { rootReducer } from './Root-Reducer';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
// 	key: 'design System',
// 	storage: storage,
// 	blacklist: [''],
// 	wishListSlice: [''],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
// 	reducer: persistedReducer,
// 	devTools: process.env.NODE_ENV === 'development',
// });
// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './Root-Reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// تحقق من وجود token و domain في localStorage
const hasTokenAndDomain = Boolean(localStorage.getItem('token') && localStorage.getItem('domain'));

// تكوين persistConfig بناءً على وجود token و domain
const persistConfig = hasTokenAndDomain
	? {
		key: 'design System',
		storage: storage,
		whitelist:[
			// Auth
			'subdomains',
		
			// ATTRIBUTES
			'attributesProducts',
			'attributesFamilies',
		
			// MARKETING
			'couponPage',
			'cartRule',
			'catalogRules',
		
			// analytics page
			'productsAnalytics',
			'ordersAnalytics',
			'customersAnalytics',
		
			// customers page
			'allCustomer',
			'AddressesCustomer',
			'customersGroup',
		
			// pages page
			'pages',
			'blog',
		
			// products page
			'allProducts',
			'brands',
			'inventory',
			'categoriesTable',
			'subCategories',
			'bulkEdit',
		
			// orders page
			'allOrders',
			'addOrder',
		
			// settings page
			'shippingSettings',
			'taxCategorySettings',
			'taxRateSettings',
			'usersSettings',
			'rolesSettings',
			'merchantPaymentSettings',
			'paymentMethods',
			'helpSettings',
			'emailNotificationSettings',
			'configurations',
			'branchSettings',
			'attributes'
		  ]
		  
	}
	: {
		key: 'design System',
		storage: storage,
		blacklist: [
			// Auth
			'subdomains',
		
			// ATTRIBUTES
			'attributesProducts',
			'attributesFamilies',
		
			// MARKETING
			'couponPage',
			'cartRule',
			'catalogRules',
		
			// analytics page
			'productsAnalytics',
			'ordersAnalytics',
			'customersAnalytics',
		
			// customers page
			'allCustomer',
			'AddressesCustomer',
			'customersGroup',
		
			// pages page
			'pages',
			'blog',
		
			// products page
			'allProducts',
			'brands',
			'inventory',
			'categoriesTable',
			'subCategories',
			'bulkEdit',
		
			// orders page
			'allOrders',
			'addOrder',
		
			// settings page
			'shippingSettings',
			'taxCategorySettings',
			'taxRateSettings',
			'usersSettings',
			'rolesSettings',
			'merchantPaymentSettings',
			'paymentMethods',
			'helpSettings',
			'emailNotificationSettings',
			'configurations',
			'branchSettings',
			'attributes'
		  ]
	};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

