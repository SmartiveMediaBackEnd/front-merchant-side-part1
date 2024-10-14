import ThreeDotsButton from "src/app/components/optimized/Buttons/ThreeDotsButton";
import AttributesFamilyHeader from "./_comp/AttributesFamilyHeader"
import AttributeFamiliesTable from "./_comp/AttributeFamiliesTable"
import { UseDeleteItem } from "src/app/utils/hooks/CustomDelete";
import { EditIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PopupDelete from "src/app/components/optimized/Popups/PopupDelete";
import { useTranslation } from "react-i18next";
import { deleteAttributeFamilies, getAttributesFamilies } from "src/app/store/slices/Attributes/AttributeFamilies/attributeFamiliesAsyncThunks";

const AttributeFamilies = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { attributesFamilies, isLoading } = useAppSelector((state) => state.attributesFamilies);

	useEffect(() => {
		dispatch(getAttributesFamilies());
	}, [dispatch]);

	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();


	const options = [
		{
			id: '1',
			text: 'edit',
			icon: <EditIcon className='fill-title' />,
		},
		{
			id: '2',
			text: 'delete',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();

	const handelDeleteAttributeFamily = () => {
		dispatch(deleteAttributeFamilies(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getAttributesFamilies());
			}
		});
	};

	useMemo(() => {
		switch (selectedOption) {
			case 'delete':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'edit':
				setSelectedOption('');
				custom_Id && navigate(`add-family?id=${custom_Id}`);
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='flex-col-global gap-2 px-5'>
			<AttributesFamilyHeader />
			<hr />
			<AttributeFamiliesTable handelId={handelId} data={attributesFamilies} isLoading={isLoading}>
				<ThreeDotsButton
					sortMenus={options}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</AttributeFamiliesTable>

			{/* openDeleteDialog */}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteAttributeFamily}
				/>
			)}
		</div>
	)
}

export default AttributeFamilies;
