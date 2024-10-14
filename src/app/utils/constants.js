import { nanoid } from 'nanoid';
import { getImageUrl } from '.';
// IMPORT ICONS FROM icons.jsx
import {
	DashboardIcon,
	ProductsIcon,
	OrdersIcon,
	CustomersIcon,
	AnalyticsIcon,
	ReviewsIcon,
	PagesIcon,
	AdsIcon,
	AppsIcon,
	ServicesIcon,
	SettingsIcon,
	StoresIcon,
	CopyIcon,
	ExportIcon,
	RemoveIcon,
	ShippingIcon,
	ChatIcon,
	NavIcon,
} from './icons';

//  SIDEBAR
export const sidebarLinks = [
	{ id: nanoid(), path: '/home', name: 'Home', Icon: DashboardIcon },
	{ id: nanoid(), path: '/products/AllProducts', name: 'Products', Icon: ProductsIcon },
	// { id: nanoid(), path: '/orders', name: 'Orders', Icon: OrdersIcon },
	// { id: nanoid(), path: '/customers', name: 'Customers', Icon: CustomersIcon },
	// { id: nanoid(), path: '/analytics/overview', name: 'Analytics', Icon: AnalyticsIcon },
	// { id: nanoid(), path: '/reviews', name: 'Reviews', Icon: ReviewsIcon },
	// { id: nanoid(), path: '/pages', name: 'Pages', Icon: PagesIcon },
	// { id: nanoid(), path: '/marketing/apps', name: 'Marketing', Icon: AdsIcon },
	// { id: nanoid(), path: '/apps/app_store', name: 'Apps', Icon: AppsIcon },
	// { id: nanoid(), path: '/services', name: 'Services', Icon: ServicesIcon },
	// { id: nanoid(), path: '/settings', name: 'Settings', Icon: SettingsIcon },
	// { id: nanoid(), path: '/store/themes', name: 'Store', Icon: StoresIcon },
];

// 	sidebar mobile
export const sidebarLinksMob = [
	{ id: nanoid(), path: '/home', name: 'Home', Icon: DashboardIcon },
	{ id: nanoid(), path: '/products/AllProducts', name: 'Products', Icon: ProductsIcon },
	// { id: nanoid(), path: '/orders', name: 'Orders', Icon: OrdersIcon },
];

export const sidebarLinksMobDrawer = [
	// { id: nanoid(), path: '/customers', name: 'Customers', Icon: CustomersIcon },
	// { id: nanoid(), path: '/analytics/overview', name: 'Analytics', Icon: AnalyticsIcon },
	// { id: nanoid(), path: '/reviews', name: 'Reviews', Icon: ReviewsIcon },
	// { id: nanoid(), path: '/pages', name: 'Pages', Icon: PagesIcon },
	// { id: nanoid(), path: '/marketing/apps', name: 'Marketing', Icon: AdsIcon },
	// { id: nanoid(), path: '/apps/app_store', name: 'Apps', Icon: AppsIcon },
	// { id: nanoid(), path: '/services', name: 'Services', Icon: ServicesIcon },
	// { id: nanoid(), path: '/settings', name: 'Settings', Icon: SettingsIcon },
	// { id: nanoid(), path: '/store/themes', name: 'Store', Icon: StoresIcon },
];

// Icons Social media
export const socialLinks = [
	{ id: nanoid(), img: getImageUrl('social/facebook.svg'), url: '/' },
	{ id: nanoid(), img: getImageUrl('social/google.svg'), url: '/' },
	{ id: nanoid(), img: getImageUrl('social/gmail.svg'), url: '/' },
	{ id: nanoid(), img: getImageUrl('social/tiktok.svg'), url: '/' },
];

// Most popular Apps

export const mostPopularApps = [
	{
		id: nanoid(),
		image: getImageUrl('social/google.svg'),
		name: 'Google',
		url: '/apps/app_store/google',
		status: 'free',
		description:
			'The Google channel makes it easy for you to reach the millions of shoppers that use Google to find the products they need.',
	},
	{
		id: nanoid(),
		image: getImageUrl('social/twitter-X.svg'),
		name: 'Twitter',
		url: '/apps/app_store/twitter',
		status: 'available',
		tatus: 'free',
		description:
			'Connect with Twitter to launch an ad campaign to show your products in front of potential customers.',
	},
	{
		id: nanoid(),
		image: getImageUrl('social/facebook.svg'),
		name: 'Facebook & Instagram',
		url: '/apps/app_store/facebook',
		status: 'installed',
		description:
			'Connect with Facebook, Instagram Shop and launch an ad campaign to show your products in front of potential customers.',
	},
];

// Social media Accounts
export const socialApps = [
	{
		id: nanoid(),
		name: 'Facebook',
		description: 'Connect with Facebook to get to millions of customers',
		imageUrl: getImageUrl('social/facebook.svg'),
		status: 'installed',
		url: '/apps/app_store/facebook',
	},
	{
		id: nanoid(),
		name: 'Google',
		description: 'Connect with Google to get to millions of customers',
		imageUrl: getImageUrl('social/google.svg'),
		status: 'free',
		url: '/apps/app_store/google',
	},
	{
		id: nanoid(),
		name: 'Gmail',
		description: 'Connect with Gmail to get to millions of customers',
		imageUrl: getImageUrl('social/gmail.svg'),
		status: 'installed',
		url: '/apps/app_store/gmail',
	},
	{
		id: nanoid(),
		name: 'TikTok',
		description: 'Connect with TikTok to get to millions of customers',
		imageUrl: getImageUrl('social/tiktok.svg'),
		status: 'free',
		url: '/apps/app_store/tiktok',
	},
	{
		id: nanoid(),
		name: 'Snapchat',
		description: 'Connect with Snapchat to get to millions of customers',
		imageUrl: getImageUrl('social/snapchat.svg'),
		status: 'installed',
		url: '/apps/app_store/snapchat',
	},
	{
		id: nanoid(),
		name: 'WhatsApp',
		description: 'Connect with WhatsApp to get to millions of customers',
		imageUrl: getImageUrl('social/whatsapp.svg'),
		status: 'free',
		url: '/apps/app_store/whatsapp',
	},
	{
		id: nanoid(),
		name: 'Telegram',
		description: 'Connect with Telegram to get to millions of customers',
		imageUrl: getImageUrl('social/telegram.svg'),
		status: 'installed',
		url: '/apps/app_store/telegram',
	},
	{
		id: nanoid(),
		name: 'Twitter',
		description: 'Connect with Twitter to get to millions of customers',
		imageUrl: getImageUrl('social/twitter-X.svg'),
		status: 'free',
		url: '/apps/app_store/twitter',
	},
	{
		id: nanoid(),
		name: 'Mailchimp',
		description: 'Connect with Mailchimp to get to millions of customers',
		imageUrl: getImageUrl('social/mailchimp.svg'),
		status: 'free',
		url: '/apps/app_store/mailchimp',
	},
	{
		id: nanoid(),
		name: 'Sendgrid',
		description: 'Connect with Sendgrid to get to millions of customers',
		imageUrl: getImageUrl('social/sendgrid.svg'),
		status: 'free',
		url: '/apps/app_store/sendgrid',
	},
];

// social Media Platforms
export const socialMediaContent = {
	twitter: {
		name: 'Twitter',
		image: getImageUrl('social/twitter-X.svg'),
		description:
			'Twitter is a social media platform for creating, sharing, and discovering short posts.',
		videoUrl: 'https://www.youtube.com/embed/TzFvB35n8To',
		features: [
			{
				title: 'Grow your reach',
				description:
					'Advertise and sell your products directly through your Facebook page and reach billions of potential customers.',
			},
			{
				title: 'Increase your revenue',
				description:
					'Merchants see an average increase of 15% in revenue when selling on Facebook.',
			},
			{
				title: 'Easy checkout',
				description:
					'With Facebook Shop, your customers will be able to easily browse products on mobile and checkout on any device.',
			},
		],
		status: 'installed',
		backgroundColor: ['#1DA1F2', '#14171A'],
		posters: {
			poster_1: getImageUrl('posters/Designer_3.jpeg'),
			poster_2: getImageUrl('posters/Designer_4.jpeg'),
		},

		mostPopular: true,
	},
	facebook: {
		name: 'Facebook',
		image: getImageUrl('social/facebook.svg'),
		description:
			'Facebook is a social networking platform that allows users to connect with friends and family, share photos, and engage in various activities.',
		videoUrl: 'https://www.youtube.com/embed/YjRKXw7u0tM',
		features: [
			{
				title: 'Grow your reach',
				description:
					'Advertise and sell your products directly through your Facebook page and reach billions of potential customers.',
			},
			{
				title: 'Increase your revenue',
				description:
					'Merchants see an average increase of 15% in revenue when selling on Facebook.',
			},
			{
				title: 'Easy checkout',
				description:
					'With Facebook Shop, your customers will be able to easily browse products on mobile and checkout on any device.',
			},
		],
		status: 'free',
		backgroundColor: ['#0D53FC', '#55C397'],
		posters: {
			poster_1: getImageUrl('posters/Designer_1.jpeg'),
			poster_2: getImageUrl('posters/Designer_2.jpeg'),
		},
		mostPopular: true,
	},
	mailchimp: {
		name: 'Mailchimp',
		image: getImageUrl('social/facebook.svg'),
		description:
			'Mailchimp is an all-in-one marketing platform that helps businesses manage their email campaigns, build landing pages, and analyze their marketing efforts.',
		videoUrl: 'https://www.youtube.com/embed/JlxFXN3POZw',
		features: [
			{
				title: 'Grow and Measure Sales',
				description:
					'Measure the impact of your ads, build retargeting audiences, and optimize campaigns to drive purchases with the Snap Pixel.',
			},
			{
				title: 'Showcase Your Products',
				description:
					'Easily sync your Shopify products to your Snapchat Catalog to create engaging, made-for-commerce product ads.',
			},
			{
				title: 'Personalize Campaigns',
				description:
					"Reach the right customers at the right time with Dynamic Ads; get set up from either Snapchat's Ads Manager or Shopify's Marketing tab.",
			},
		],
		status: 'free',
		backgroundColor: ['#FFE01B', '#FF4C4C'],
	},
	mostPopular: false,
};

// 1. Sorting
export const sortMenus = [
	{ id: nanoid(), text: 'Name A to Z' },
	{ id: nanoid(), text: 'Name Z to A' },
	{ id: nanoid(), text: 'SKU Ascending' },
	{ id: nanoid(), text: 'SKU Descending' },
	{ id: nanoid(), text: 'Price Low in first' },
	{ id: nanoid(), text: 'Price High in first' },
	{ id: nanoid(), text: 'Date Added' },
	{ id: nanoid(), text: 'Date modified' },
];

// 2. Control Products Menus
export const controlProductsMenus = [
	{ id: nanoid(), Icon: CopyIcon, text: 'Copy product link' },
	{ id: nanoid(), Icon: AnalyticsIcon, text: 'Product report' },
	{ id: nanoid(), Icon: OrdersIcon, text: 'Product orders' },
	{ id: nanoid(), Icon: ExportIcon, text: 'Export product orders XLS' },
	{ id: nanoid(), Icon: RemoveIcon, text: 'Delete product' },
];

// 3. Product Status
export const productStatus = [
	{
		id: nanoid(),
		Icon: ShippingIcon,
		text: 'Simple Product',
		description: "You don't need advanced options to fill",
		detailed: true,
	},
	{
		id: nanoid(),
		Icon: ShippingIcon,
		text: 'Configurable product',
		description: 'You need all options available',
		detailed: false,
	},
	{
		id: nanoid(),
		Icon: ShippingIcon,
		text: 'Virtual Product',
		description: 'Services, ebooks, Downloadable',
		detailed: true,
	},
	{
		id: nanoid(),
		Icon: ShippingIcon,
		text: 'Food',
		description: 'Food & Drinks have special way shipping',
		detailed: false,
	},
	{
		id: nanoid(),
		Icon: ShippingIcon,
		text: 'Bundle',
		description: 'Collection of related products',
		detailed: false,
	},
];

// 1. CheckBox
/**
 * @type {{
 *  id: string;
 *  text: string;
 *  checked?: boolean;
 * }[]}
 */
export const check = [
	{ id: nanoid(), text: 'Place your text' },
	{ id: nanoid(), text: 'Place your text' },
	{ id: nanoid(), text: 'Place your text' },
	{ id: nanoid(), text: 'Place your text' },
	{ id: nanoid(), text: 'Place your text' },
];

// Comparison Menus
export const comparisonMenus = [
	{ text: 'Today' },
	{ text: 'Last week' },
	{ text: 'Last month' },
	{ text: 'Specify date' },
];
