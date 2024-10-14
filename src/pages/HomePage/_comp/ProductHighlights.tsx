import { useTranslation } from 'react-i18next';
import { MobileProductViews } from 'src/app/components/optimized';
import SlideCardTabs from 'src/app/components/optimized/Cards/SlideCardTabs';

import { LiaTrashAlt } from 'react-icons/lia';
import { Product } from 'src/pages/ProductsPage/_comp/data';

interface ProductProps {
	data: {
		topSellingProducts: Product[];
		topSearchProducts: Product[];
		topReviewsProducts: Product[];
	};
}

export default function ProductHighlights({ data }: ProductProps) {
	const { t } = useTranslation();
	const settingMenus = [
		{
			id: '1',
			text: 'Delete product',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	const renderProducts = (products: Product[]) => (
		<div className='grid gap-2'>
			{products.slice(0, 3).map((product) => (
				<MobileProductViews settingMenus={settingMenus} key={product.name} {...product} />
			))}
		</div>
	);

	const slides = [
		{ title: t('Top selling'), content: renderProducts(data.topSellingProducts), id: '1' },
		{ title: t('Top search'), content: renderProducts(data.topSearchProducts), id: '2' },
		{ title: t('Top reviews'), content: renderProducts(data.topReviewsProducts), id: '3' },
	];

	return <SlideCardTabs slides={slides} title={t('Products')} />;
}
