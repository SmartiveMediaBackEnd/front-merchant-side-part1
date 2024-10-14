import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import { TableCell } from '@mui/material';

import { Switch } from 'src/app/components/ui/switch';

import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import { useAppDispatch } from 'src/app/store';
import {
	getBrandInfo,
	getBrandsTable,
	PutUpdateBrandRequest,
} from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';
import { actionsButtonStyle } from '../../AllProducts/_comp/AllProductsTable';
import { MoveIcon } from 'src/app/utils/icons';
export default function BrandsTable({
	children,
	brands,
	isLoading,
	handelId,
	setOpenAddOrUpdateDialog,
	setEdit_id,
	Edit_id,
}: {
	children: React.ReactNode;
	handelId: (e: string) => void;
	brands: BrandsInterface[];
	isLoading: boolean;
	setOpenAddOrUpdateDialog: (e: boolean) => void;
	setEdit_id: (e: string) => void;
	Edit_id: string;
}) {
	//  hooks
	const dispatch = useAppDispatch();
	const { language } = useLanguage();
	const { t } = useTranslation();
	const classData = actionsButtonStyle();
	//  headers

	const brandsHeaders = [
		{ title: t('Name & Description') },
		{ title: t('Products No.') },
		{ title: t('Availability') },
		{ title: t('actions') },
	];

	// //////////////////////
	// /////////////////////

	const handelGetBrandInfo = (e: string) => {
		setEdit_id(e);
		setOpenAddOrUpdateDialog(true);
		dispatch(getBrandInfo(e));
	};

	const handelUpdateStatus = (e: BrandsInterface) => {
		let formData = new FormData();
		formData.append('name_en', e.name_en);
		formData.append('name_ar', e.name_ar);
		formData.append('description_ar', e.description_ar);
		formData.append('description_en', e.description_en);
		formData.append('slug', e.slug);
		formData.append('status', e.status ? '0' : '1');
		formData.append('locale', 'all');

		dispatch(
			PutUpdateBrandRequest({
				data: formData,
				path: `merchant/catalog/brands/update/${e?.id}`,
			}),
		).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				dispatch(getBrandsTable());
			}
		});
	};

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={brandsHeaders.map((h) => h)}
			rows={brands?.map((e: BrandsInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className='flex items-center gap-2'>
								<MoveIcon />
								<div className='box-photo'>
									<img
										src={e?.image_url}
										className='w-full h-full'
										alt={e?.name_en}
										loading='lazy'
									/>
								</div>

								<div>
									{language === 'ar' ? e?.name_ar : e?.name_en}
									<p className='subtitle text-sm'>
										{language === 'ar' ? e?.description_ar : e?.description_en}
									</p>
								</div>
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>{e?.products?.length}</GlobalTableCell>,

						<GlobalTableCell>
							<div onClick={() => handelUpdateStatus(e)}>
								<Switch checked={e.status > 0 ? true : false} />
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>
							<div className={classData}>
								<div onClick={() => handelId(e?.id)}>{children}</div>

								<div
									onClick={() => {
										handelGetBrandInfo(e?.id);
									}}
								>
									<ArrowTables />
								</div>
							</div>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
}
