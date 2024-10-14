import { useParams } from 'react-router-dom';
import AllProducts from '../tabs/AllProducts/AllProducts';
import Categories from '../tabs/Categories/Categories';
import Brands from '../tabs/Brands/Brands';
import Inventory from '../tabs/Inventory/Inventory';
import Attributes from '../tabs/Attributes/Attributes';
import AttributeFamilies from '../tabs/AttributeFamilies/AttributeFamilies';

const ProductsTabs = () => {
	//  hooks
	const { tab } = useParams();

	switch (tab) {
		case 'AllProducts':
			return <AllProducts />;
		// case 'categories':
		// 	return <Categories />;
		// case 'brands':
		// 	return <Brands />;
		// case 'inventory':
		// 	return <Inventory />;
		// case 'attributes':
		// 	return <Attributes />;
		// case 'attributeFamilies':
		// 	return <AttributeFamilies />;
		default:
			return <AllProducts />;
	}
};

export default ProductsTabs;
