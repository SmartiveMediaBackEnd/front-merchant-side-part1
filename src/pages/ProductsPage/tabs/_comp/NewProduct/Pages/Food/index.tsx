import {
	ProductFormBasicInfoSection,
	ProductFormContainer,
	ProductFormDescriptionAndSpecificationsSection,
	// ProductFormFaqsSection,
	ProductFormMediaSection,
	ProductFormOptionsAndVariationsSection,
	ProductFormPricingSection,
	ProductFormQuickActionsSection,
	ProductFormShippingSection,
	ProductFormStockSection,
	SeoFormFaqsSection,
} from '../../..';

import { ProductDefaultValues, ProductSchema } from './utils';

import { useForm } from 'src/app/utils/hooks/form';

const productsSections = [
	{
		Elem: ProductFormMediaSection,
		id: 'ProductFormMediaSection',
		title: 'General info',
	},
	{
		Elem: ProductFormBasicInfoSection,
		id: 'ProductFormBasicInfoSection',
		title: '',
	},
	{
		Elem: ProductFormDescriptionAndSpecificationsSection,
		id: 'ProductFormDescriptionAndSpecificationsSection',
		title: '',
	},
	{
		Elem: ProductFormPricingSection,
		id: 'ProductFormPricingSection',
		title: 'pricing',
	},
	{
		Elem: ProductFormStockSection,
		id: 'ProductFormStockSection',
		title: '',
	},
	{
		Elem: ProductFormShippingSection,
		id: 'ProductFormShippingSection',
		title: 'shipping',
	},
	{
		Elem: ProductFormOptionsAndVariationsSection,
		id: 'ProductFormOptionsAndVariationsSection',
		title: 'options & variations',
	},
	{
		Elem: SeoFormFaqsSection,
		id: 'SeoFormFaqsSection',
		title: 'seo',
	},
	// {
	// 	Elem: ProductFormFaqsSection,
	// 	id: 'ProductFormFaqsSection',
	// 	title: '',
	// },
];

export default function FoodProductPage() {
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			console.log(values);
		},
		defaultValues: ProductDefaultValues,
	});

	return (
		<ProductFormContainer formStore={formStore} onSubmit={onSubmit} sections={productsSections}>
			<section onSubmit={onSubmit} className='flex-grow flex flex-col gap-4 relative p-4'>
				<div className='flex gap-6 flex-col-reverse md:flex-row'>
					<div className='flex flex-col gap-4'>
						{productsSections.map(({ Elem, id }) => (
							<Elem key={id} formStore={formStore} id={id} />
						))}
					</div>
					<div className='flex-shrink-0 hidden xl:block'>
						<ProductFormQuickActionsSection formStore={formStore} />
					</div>
				</div>
			</section>
		</ProductFormContainer>
	);
}
