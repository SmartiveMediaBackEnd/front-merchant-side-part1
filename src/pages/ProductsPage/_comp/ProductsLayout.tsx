import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const ProductsLayout = () => {
	const { t } = useTranslation();

	const tabs = [
		{
			name: t('All Products'),
			path: 'AllProducts',
		},
		// {
		// 	name: t('Categories'),
		// 	path: 'categories',
		// },
		// {
		// 	name: t('Brands'),
		// 	path: 'brands',
		// },
		// {
		// 	name: t('Inventory'),
		// 	path: 'inventory',
		// },
		// {
		// 	name: t('Attributes'),
		// 	path: 'attributes',
		// },
		// {
		// 	name: t('Attribute Families'),
		// 	path: 'attributeFamilies',
		// },
	];
	return (
		<div className='flex-col-global'>
			<div className='Sticky_header'>
				<HorizontalTabsLink tabs={tabs} path={'/products'} />
			</div>
			<Outlet />
		</div>
	);
};

export default ProductsLayout;
