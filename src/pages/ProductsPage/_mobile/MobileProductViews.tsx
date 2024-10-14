
import { useTranslation } from 'react-i18next';

import { Product } from '../_comp/data';
import useLanguage from 'src/app/utils/hooks/useLanguage';

interface ProductViewsProps {
	product: Product;

	setEdit_product: (e: Product) => void;
	setOpenDialog: (e: boolean) => void;
	children: React.ReactNode;
	handelId: (e: string) => void;
}
export default function MobileProductViews({
	product,

	setEdit_product,
	setOpenDialog,
	children,
	handelId,
}: ProductViewsProps) {
	const { t } = useTranslation();
	const { language } = useLanguage();

	const handelEdit = (e: Product) => {
		if (e.type === 'simple') {
			setOpenDialog(true);
			setEdit_product(e);
		}
	};
	return (
		<div className='flex justify-between bg-white'>
			<div className='flex gap-1 items-center'>
				<div className='box-photo size-12'>
					{product?.images?.length > 0 && product?.images[0]?.original_image_url && (
						<img
							onClick={() => handelEdit(product)}
							src={product?.images[0]?.original_image_url}
							className='w-full h-full cursor-pointer'
							alt={product?.en?.name ? product?.en?.name : ''}
						/>
					)}
				</div>
				<div className='flex flex-col justify-around '>
					<h2 className='title'>{language === 'ar' ? product?.ar?.name : product?.en?.name}</h2>

					{product?.category && <p className='subtitle'>{product?.category}</p>}

					<p className={product?.qty === 0 ? 'paragraph text-error' : ' paragraph text-black'}>
						{t('Qty')} : {product?.qty > 0 ? product?.qty : t('Out of stock')}
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<div onClick={() => handelId(product?.id)}>{children}</div>
				<p className='paragraph'>SAR {product?.price}</p>
			</div>
		</div>
	);
}
