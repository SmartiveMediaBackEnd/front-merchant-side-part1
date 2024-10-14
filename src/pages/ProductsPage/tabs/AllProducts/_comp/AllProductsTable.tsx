
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffSharp } from 'react-icons/io5';

import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { CameraIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import { Product } from 'src/pages/ProductsPage/_comp/data';

import CustomTableHeaderCheckbox from 'src/app/components/optimized/UiKits/CustomTableHeaderCheckbox';
import CustomTableBodyCheckbox from 'src/app/components/optimized/UiKits/CustomTableBodyCheckbox';
import { useAppDispatch } from 'src/app/store';
import {
	getAllProductsTable,
	PostUpdateQuickProduct,
} from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { useNavigate } from 'react-router-dom';
import UpdateVariant from '../../_comp/NewProduct/Pages/Configurable/_comp/UpdateVariant';

interface AllProductsTableProps {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;
	isLoading: boolean;
	setOpenDialog: (e: boolean) => void;
	setEdit_product: (e: Product) => void;
	children: React.ReactNode;
	handelId: (e: string) => void;
}

export const actionsButtonStyle = () => {
	const { language } = useLanguage();
	let classData = '';
	language === 'ar'
		? (classData = 'justify-end flex items-center gap-4 cursor-pointer text-[1.2rem]')
		: (classData = 'justify-start flex items-center gap-4 cursor-pointer text-[1.2rem]');

	return classData;
};

export default function AllProductsTable({
	products,
	array,
	setArray,
	isLoading,
	setOpenDialog,
	setEdit_product,
	children,
	handelId,
}: AllProductsTableProps) {
	// hooks
	const navigate = useNavigate();
	const { language } = useLanguage();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const [favorites, setFavorites] = useState<string[]>([]);
	const [openVariant, setOpenVariant] = useState<boolean>(false);
	// const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	// const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
	// const { formStore } = useProductFormContext();
	const classData = actionsButtonStyle();




	console.log('products', products)
	//  handel favorite_icon
	const toggleFavorite = (id: string) => {
		setFavorites((prevFavorites) =>
			prevFavorites.includes(id)
				? prevFavorites.filter((favId) => favId !== id)
				: [...prevFavorites, id],
		);
	};

	// headers
	const productsHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={Array.isArray(products) ? products.map((e) => e.id) : []}
				/>
			),
			title: t('Product & Category'),
		},
		{ title: t('SKU') },
		{ title: t('QTY') },
		{ title: t('Price') },
		{ title: t('actions') },
	];
	const hasParentId = (product: any): product is Product & { parent_id: string } => {
		return 'parent_id' in product;
	};


	const handelEdit = (e: Product, index: number) => {
		// console.log('Product:', e);
		if (e.parent_id !== null && e.type === 'simple') {// variant
			navigate(`/products/new/configurable?id=${e?.parent_id}`);

			console.log('Has parent id', e.variants, typeof e.variants);
			// console.log('Has parent id', e);
			// setOpenVariant(true);
			// console.log('openVariant set to true:', e.variants);
			// setEdit_product(e);
			// navigate(`/products/new/updateVariant?id=${e?.parent_id}`);
			// console.log('Has parent idgdgfrf', e);
		} else if (e.type === 'simple') {// simple product
			console.log('Simple product');
			setOpenDialog(true);
			setEdit_product(e);
		} else {
			console.log('Configurable product');
			navigate(`/products/new/configurable?id=${e?.id}`);
		}
	};



	//  handel status
	const handelStatus = (product: Product) => {
		let formData = new FormData();
		formData.append('status', product?.status > 0 ? '0' : '1');
		dispatch(PostUpdateQuickProduct({ id: product?.id, data: formData })).then(
			(promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					dispatch(getAllProductsTable());
				}
			},
		);
	};
	//  table rows
	const rows = Array.isArray(products) && products.map((product) => {
		const isFavorite = favorites.includes(product.id);
		return {
			item: product,
			elements: [
				<GlobalTableCell key={`product-${product.id}`}>
					<div className='flex items-center gap-[.4rem]'>
						<div className='flex-col-global gap-[.4rem] items-center'>
							<CustomTableBodyCheckbox array={array} setArray={setArray} id={product.id} />
							<button onClick={() => toggleFavorite(product.id)}>
								{isFavorite ? (
									<StarActiveIcon className='fill-neutral-1' />
								) : (
									<StarIcon className='fill-hint' />
								)}
							</button>


						</div>

						{
							product.images && (
								<div className='relative box-photo w-[4.18rem] h-[4.18rem]'>
									<img
										src={product.images}
										className='w-full h-full object-cover'
										loading='lazy'
										alt={`Product image for ${product.id}`}
									/>
									<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
								</div>
							)
						}




						{/* <div className='flex-col-top-section-pages gap-2'>
							<p className='title text-sm'>
								{language === 'ar' ? product.ar.name : product.en.name}
							</p>
							{product.category && <p className='subtitle'>{product.category}</p>}
							{product.option && (
								<p className='subtitle'>
									{product.option} {t('Options')}
								</p>
							)}
						</div> */}
					</div>
				</GlobalTableCell>,
				<GlobalTableCell key={`sku-${product.id}`}>
					<p className='text-title'>{product.sku}</p>
				</GlobalTableCell>,
				<GlobalTableCell key={`qty-${product.id}`}>
					{product?.type === 'simple' ? (
						<p className={product?.qty === 0 ? 'text-error' : 'text-black'}>
							{product?.qty > 0 ? product?.qty : t('Out of stock')}
						</p>
					) : (
						<p className={product?.base_qty === 0 ? 'text-error' : 'text-black'}>
							{product?.base_qty > 0 ? product?.base_qty : t('Out of stock')}
						</p>
					)}
				</GlobalTableCell>,
				<GlobalTableCell key={`price-${product.id}`}>
					<span className='text-primary'>SAR</span> {product.price}
				</GlobalTableCell>,
				<GlobalTableCell key={`actions-${product.id}`}>
					<div className={classData}>
						{product?.status > 0 ? (
							<IoEyeOutline onClick={() => handelStatus(product)} className='text-subtitle' />
						) : (
							<IoEyeOffSharp onClick={() => handelStatus(product)} className='text-subtitle' />
						)}
						<FaRegEdit className='text-subtitle' onClick={() => handelEdit(product)} />

						<div onClick={() => handelId(product?.id)}>{children}</div>
					</div>
				</GlobalTableCell>,
			],
		};
	});

	return (
		<>
			{/* {openVariant && <div>Advanced Fields Open!</div>} */}

			<BaseTable
				isLoading={isLoading}
				language={language}
				color='#55607A'
				headers={productsHeaders}
				rows={rows}
			/>,


			{/* {openVariant && <UpdateVariant openDialog={openVariant} handleClose={() => setOpenVariant(false)} />} */}
		</>
	);
}
