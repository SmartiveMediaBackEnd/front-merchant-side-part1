import { useTranslation } from 'react-i18next';
import { GlobalDialog } from '../../shared';

export default function PopupDelete({
	title = 'Are you sure of deleting this?',
	subTitle = 'You cannot undo this action',
	onClose,
	onDelete,
	open,
}: {
	title?: string;
	subTitle?: string;
	onClose: (() => void);
	onDelete: (() => void);
	open: boolean;
}) {
	//  hooks
	const { t } = useTranslation();

	const style = {
		width: { md: '40rem', xs: '22rem' },
	};
	return (
		<GlobalDialog openDialog={open} handleClose={onClose} style={style}>
			<div className=' flex-col-global'>
				<div className='flex-col-global gap-1'>
					<h3 className='title'>{title}</h3>
					<p className='text-sm text-title'>{subTitle}</p>
				</div>

				<div className='flex items-center justify-end gap-2'>
					<button className='btn-delete' onClick={onDelete}>
						{t('Delete')}
					</button>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={onClose}>
						{t('Cancel')}
					</button>
				</div>
			</div>
		</GlobalDialog>
	);
}

/*
const handleDelete = () => {
	// Implement your logic for deleting the item
	console.log('Item deleted');
};

const handleClose = () => {
	// Implement your logic for closing the popup
	console.log('Popup closed');
};

<div className='App'>
	<PopupDelete
		title='Delete Item'
		subTitle='Are you sure you want to delete this item? This action cannot be undone.'
		onClose={handleClose}
		onDelete={handleDelete}
	/>
</div>
*/
