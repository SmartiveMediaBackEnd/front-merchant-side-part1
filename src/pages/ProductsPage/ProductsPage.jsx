import ProductsLayout from "./_comp/ProductsLayout";
import ProductsPageGuard from "./_comp/ProductsPageGuard";
import { FormStoreProvider } from "../../app/context/ConfigurableContext ";
// import { ProductFormProviderVariants } from "src/app/context/VariantsContext";


const ProductsPage = () => {
	return (
		<FormStoreProvider>
			{/* <ProductFormProviderVariants> */}
				<ProductsPageGuard>
					<ProductsLayout />
				</ProductsPageGuard>
			{/* </ProductFormProviderVariants> */}
		</FormStoreProvider>
	);
};

export default ProductsPage;
