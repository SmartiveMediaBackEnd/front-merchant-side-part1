import { useTranslation } from 'react-i18next';
import { Switch } from 'src/app/components/ui/switch';

import useLanguage from 'src/app/utils/hooks/useLanguage';
import { MoveIcon } from 'src/app/utils/icons';

import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import { useAppDispatch } from 'src/app/store';
import {
	getCategoriesTable,
	PutUpdateCategoryRequest,
} from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import { actionsButtonStyle } from '../../AllProducts/_comp/AllProductsTable';

export const CategoryTable = ({
	children,
	categoryData,
	handelId,
	isLoading,
}: {
	categoryData: CategoryInterface[];
	children: React.ReactNode;
	handelId: (e: string) => void;
	isLoading: boolean;
}) => {
	//  hooks
	const { language } = useLanguage();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const classData = actionsButtonStyle();
	//  headers

	const headers = [
		{ title: t('name & description') },
		{ title: t('products No.') },
		{ title: t('subcategories') },
		{ title: t('availability') },
		{ title: t('actions') },
	];

	const handelUpdateStatus = (e: CategoryInterface) => {
		let formData = new FormData();
		formData.append('en[name]', e.en.name);
		formData.append('ar[name]', e.ar.name);
		formData.append('ar[description]', e.ar.description);
		formData.append('en[description]', e.en.description);
		formData.append('slug', e.slug);
		formData.append('status', e.status ? "0" : "1");
		// formData.append('locale', 'all');
		formData.append('_method', 'put');

		dispatch(
			PutUpdateCategoryRequest({
				data: formData,
				id: e.id,
			}),
		).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				dispatch(getCategoriesTable());
			}
		});
	};
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={headers.map((h) => h)}
			rows={categoryData?.map((e: CategoryInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell
							sx={{
								fontWeight: 600,
							}}
						>
							<div className='flex items-center gap-2'>
								<MoveIcon />
								<div className='box-photo'>
									<img src={e?.image_url} className='w-full h-full' loading='lazy' />
								</div>

								<div>
									{language === 'ar' ? e?.ar?.name : e?.en?.name}
									<p className='subtitle text-sm'>
										{language === 'ar' ? e?.ar?.description : e?.en?.description}
									</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>{e.products?.length}</GlobalTableCell>,
						<GlobalTableCell>{e.subcategories}</GlobalTableCell>,

						<GlobalTableCell>
							<div onClick={() => handelUpdateStatus(e)}>
								<Switch checked={e.status > 0 ? true : false} />
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>
							<div className={classData}>
								<div onClick={() => handelId(e?.id)}>{children}</div>

								<ArrowTables path='/products/categories/SubCategories' />
							</div>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
};
