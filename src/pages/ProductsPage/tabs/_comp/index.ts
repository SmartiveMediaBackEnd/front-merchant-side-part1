// Section Forms
export { default as ProductFormMediaSection } from './NewProduct/Forms/Media';
export { default as ProductFormPricingSection } from './NewProduct/Forms/Pricing/Pricing.js';
export { default as SeoFormFaqsSection } from './NewProduct/Forms/Seo/Seo.js';
export { default as ProductFormStockSection } from './NewProduct/Forms/Stock';
export { default as ProductFormShippingSection } from './NewProduct/Forms/Shipping/Shipping.js';
export { default as FAQsForm } from './NewProduct/Forms/Faqs/_comp/FAQsForm.js';
export { default as ProductFormOptionsAndVariationsSection } from './NewProduct/Forms/OptionsAndVariations/Variations.js';
export { default as ProductFormDescriptionAndSpecificationsSection } from './NewProduct/Forms/DescriptionAndSpecifications/Description.js';
export { default as ProductFormQuickActionsSection } from './NewProduct/Forms/QuickActions';
export { default as ProductFormBundleSection } from './NewProduct/Forms/Bundle';
export { default as ProductFormBasicInfoSection } from './NewProduct/Forms/BasicInfo/BasicInfo.js';

// Pages
export { default as VirtualProductPage } from './NewProduct/Pages/Virtual';
export { default as ConfigurableProductPage } from './NewProduct/Pages/Configurable/Configurable.js';
// export { default as SimpleProductForm } from './NewProduct/Pages/SimpleSimpleProductForm.js';
export { default as FoodProductPage } from './NewProduct/Pages/Food';
export { default as BundleProductPage } from './NewProduct/Pages/Bundle';

// utils
export {
	productDimensionUnitMap,
	productShippingMethodMap,
	productShippingRateMap,
	productShippingTypeMap,
	productWeightUnitMap,
} from './NewProduct/Forms/Shipping/utils';

// config
export { productTypeCollection, productTypeMap } from './NewProduct/config';

// Other
export { default as ProductFormContainer } from './NewProduct/Forms/_comp/FormContainer';
export { default as SimpleProductForm } from './NewProduct/Pages/Simple/SimpleProductForm.js';
