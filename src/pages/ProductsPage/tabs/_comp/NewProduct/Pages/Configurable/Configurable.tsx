import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';
import { useEffect, useMemo, useState } from 'react';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import useResponsive from 'src/app/utils/hooks/useResponsive';

import { useTranslation } from 'react-i18next';
import {
	FAQsForm,
	ProductFormBasicInfoSection,
	ProductFormDescriptionAndSpecificationsSection,
	ProductFormMediaSection,
	ProductFormOptionsAndVariationsSection,
	ProductFormPricingSection,
	ProductFormShippingSection,
	ProductFormStockSection,
	SeoFormFaqsSection,
} from '../../..';

import { useAppSelector } from 'src/app/store';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { Form } from 'src/app/components/ui/form';
import { useFormStore } from '../../../../../../../app/context/ConfigurableContext ';
import { useDispatch } from 'react-redux';
import { AddProductSchemaSchemaValues } from './utils';

import QuickActionForm from '../_comp/QuickActionForm';

const productsSections = [
	{
		Elem: ProductFormMediaSection,
		id: 'MediaSection',
		title: 'Media',
	},
	{
		Elem: ProductFormBasicInfoSection,
		id: 'BasicInfoSection',
		title: 'General info',
	},
	{
		Elem: ProductFormDescriptionAndSpecificationsSection,
		id: 'DescriptionAndSection',
		title: 'Description',
	},
	{
		Elem: ProductFormPricingSection,
		id: 'PricingSection',
		title: 'pricing',
	},
	{
		Elem: ProductFormStockSection,
		id: 'StockSection',
		title: 'stock',
	},
	{
		Elem: ProductFormShippingSection,
		id: 'ShippingSection',
		title: 'shipping',
	},
	{
		Elem: ProductFormOptionsAndVariationsSection,
		id: 'OptionsAndVariationsSection',
		title: 'options & variations',
	},
	{
		Elem: SeoFormFaqsSection,
		id: 'SeoSection',
		title: 'seo',
	},
	{
		Elem: FAQsForm,
		id: 'FAQsForm',
		title: 'FAQsForm',
	},
];

const Configurable = () => {
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { xs } = useResponsive();
	const [title, setTitle] = useState('');
	const { pathname } = useLocation();
	const { isLoadingAddOrUpdate, product } = useAppSelector((state) => state.allProducts);

	const context = useFormStore();

	if (!context) {
		throw new Error('Error: FormStoreContext');
	}
	const { formStore, onSubmit } = context;

	useEffect(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

	useEffect(() => {
		const pathSegments = pathname.split('/');
		const lastSegment = pathSegments[pathSegments.length - 1];
		setTitle(lastSegment);
	}, [pathname]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<header className='flex flex-col gap-3 bg-white sticky top-20 left-0 capitalize pt-4 pb-2 text-lg font-medium px-4 z-10 -translate-y-4'>
					<SubHeader
						title={
							title !== 'configurable' && title !== 'simple'
								? `Add ${title}`
								: 'Add Configurable Product'
						}
					>
						<SubHeaderDefaultBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
					</SubHeader>
					{!xs && (
						<ScrollArea className='w-full pb-2'>
							<div className='flex gap-4 capitalize text-lg font-medium'>
								{productsSections.map(({ id, title }) => {
									return (
										title && (
											<Link
												key={id}
												to={`/products/new/configurable#${id}`}
												className='text-gray'
												onClick={() => {
													const elem = document.getElementById(id);
													if (elem) {
														elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
													}
												}}
											>
												{title}
											</Link>
										)
									);
								})}
							</div>
							<ScrollBar orientation='horizontal' />
						</ScrollArea>
					)}
				</header>

				<section className='custom-grid-parent gap-5 py-4  custom_container'>
					<div className='flex-col-global grid-left gap-4'>
						{productsSections.map(({ Elem, id }) => {
							return <Elem key={id} id={id} formStore={formStore} />;
						})}
					</div>

					<div className='grid-right'>
						<QuickActionForm formStore={formStore} />
					</div>
				</section>
			</form>
		</Form>
	);
};

export default Configurable;
