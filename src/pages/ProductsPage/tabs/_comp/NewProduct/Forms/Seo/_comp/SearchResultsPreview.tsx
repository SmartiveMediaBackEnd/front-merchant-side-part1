import { UseFormReturn, useWatch } from 'react-hook-form';
import { Card, CardContent } from 'src/app/components/ui/card';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';


export default function SearchResultsPreview({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) {
	const title = useWatch({
		control: formStore.control,
		name: 'page_title',
	});
	const metaDescription = useWatch({
		control: formStore.control,
		name: 'meta_description',
	});
	const link = useWatch({
		control: formStore.control,
		name: 'link',
	});

	return (
		<Card className='shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden'>
			<CardContent className='p-4 md:p-6'>
				<div className='space-y-1'>
					<h3 className='text-lg font-medium'>
						<a
							className='hover:underline pointer-events-none text-[#1B0DAB] title'
							href='#'
							aria-disabled
							target='_blank'
							rel='noopener noreferrer'
						>
							{title !== '' ? title : 'T-Shirt'}
						</a>
					</h3>
					<a
						className='text-sec-pressed hover:underline pointer-events-none '
						href='#'
						aria-disabled
						target='_blank'
						rel='noopener noreferrer'
					>
						{link !== '' ? link : 'https://artisan.dookan.net/t-shirt'}
					</a>
					<p className='text-gray-500 dark:text-gray-400 opacity-80'>{metaDescription !== '' ? metaDescription : 'meta description'}

					</p>
				</div>
			</CardContent>
		</Card>
	);

	// return (
	// 	<Card>
	// 		<CardHeader>
	// 			<CardTitle>{t('Search Results Preview')}</CardTitle>
	// 		</CardHeader>
	// 		<CardContent>
	// 			<div className='flex flex-col gap-2'>
	// 				<div className='text-lg font-semibold'>{title}</div>
	// 				<div className='text-sm text-gray-400'>{metaDescription}</div>
	// 			</div>
	// 		</CardContent>
	// 	</Card>
	// );
}
