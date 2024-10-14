import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { AddInventoryInterface, UseAddInventory } from './_hook/UseAddInventory';
import { BasicInfo } from './_comp/BasicInfo';
import { useState, useMemo, useEffect } from 'react';
import { ContactInfo } from './_comp/ContactInfo';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { AvailableSection } from './_comp/AvailableSection';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	getInventoryInfo,
	PostAddInventoryRequest,
	getInventoryTable,
	PutUpdateInventoryRequest,
} from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import Address from 'src/pages/OrdersPage/AddOrder/Comp/AddOrderAddress/_comp/Address';

export default function AddInventoryPage() {
	//  hooks
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	//  selectors
	const { inventoryInfo, isLoadingAddOrUpdate } = useAppSelector((state) => state.inventory);
	const [selectedOption, setSelectedOption] = useState('Add manually');


	//  custom hook
	const { handelDefaultValue, AddInventoryPageSchema } = UseAddInventory(selectedOption);

	const handleSubmit = (values: AddInventoryInterface) => {
		console.log('inventory', values);
		id
			?
			dispatch(PutUpdateInventoryRequest({ data: values, id })).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			})
			:
			dispatch(PostAddInventoryRequest(values)).then((promiseResponse) => {
				if ((promiseResponse.payload.code === 200)) {
					navigate(-1);
				}
			});
	};


	const { formStore, onSubmit } = useForm({
		schema: AddInventoryPageSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useMemo(() => {
		if (id) {
			formStore.setValue('branch_id', inventoryInfo?.branch_id?.id.toString());
			formStore.setValue('name', inventoryInfo?.name);
			formStore.setValue('code', inventoryInfo?.code);
			formStore.setValue('description', inventoryInfo?.description);
			formStore.setValue('priority', inventoryInfo?.priority);
			formStore.setValue('contact_name', inventoryInfo?.contact_name);
			formStore.setValue('contact_email', inventoryInfo?.contact_email);
			formStore.setValue('contact_number', inventoryInfo?.contact_number.toString());
			formStore.setValue('contact_fax', Number(inventoryInfo?.contact_fax));
			formStore.setValue('country', inventoryInfo?.country);
			formStore.setValue('city', inventoryInfo?.city);
			formStore.setValue('building', inventoryInfo?.building);
			formStore.setValue('landmark', inventoryInfo?.landmark);
			formStore.setValue('street', inventoryInfo?.street);
			formStore.setValue('state', inventoryInfo?.state);
			formStore.setValue('postcode', inventoryInfo?.postcode);
			inventoryInfo?.status > 0 ? formStore.setValue('status', 1) : formStore.setValue('status', 0);
		}
	}, [id, inventoryInfo])

	useMemo(() => {
		if (id) {
			dispatch(getInventoryInfo(id));
		}
	}, [id]);


	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Add Inventory')}>
					<SubHeaderDefaultBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom-grid-parent gap-5  custom_container'>
					<div className='flex-col-global grid-left'>
						<BasicInfo formStore={formStore} />
						<ContactInfo formStore={formStore} />
						<section className='global-cards gap-[1.5rem]'>
							<h2 className='title'>{t('Location Info')}</h2>
							{/* <Address<AddInventoryInterface>
								useMapPicker
								formStore={formStore}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
							/> */}
							<div className='md:w-[49%] w-full'>
								<FormField
									formStore={formStore}
									name='postcode'
									label={t('Post Code')}
									render={(field) => <Input {...field} placeholder={''} />}
								/>
							</div>
						</section>
					</div>
					<div className='grid-right flex-col-global'>
						<AvailableSection formStore={formStore} />
						<SubHeaderMobileBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
					</div>
				</div>
			</form>
		</Form>
	);
}
