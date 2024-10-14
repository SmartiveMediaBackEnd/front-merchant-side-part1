import { ProductCard } from 'src/app/components/optimized';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';
import { Product } from 'src/pages/ProductsPage/_comp/data';

export default function AllProductsVertical({
	products,
	array,
	setArray,

	setOpenDialog,
	setEdit_product,
	children,
	handelId,
}: {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;

	setOpenDialog: (e: boolean) => void;
	setEdit_product: (e: Product) => void;
	children: React.ReactNode;
	handelId: (e: string) => void;
}) {
	return (
		<div className='grid gap-[1.2rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]'>
			{products?.map((e) => (
				<ProductCard
					handelId={handelId}
					key={e?.id}
					product={e}
					setOpenDialog={setOpenDialog}
					setEdit_product={setEdit_product}

					array={array}
					setArray={setArray}
				>
					{children}
				</ProductCard>
			))}
		</div>
	);
}
