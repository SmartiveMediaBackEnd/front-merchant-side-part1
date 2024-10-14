import { useSearchParams } from 'react-router-dom';

export const UseGetIdParams = () => {
	const [searchParams] = useSearchParams();

	const id = searchParams.get('id');
	const customer_id = searchParams.get('customer_id');
	const address_id = searchParams.get('address_id');

	return { id, address_id, customer_id };
};
