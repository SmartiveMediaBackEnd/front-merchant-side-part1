import { UseFormReturn } from 'react-hook-form';
import { AddInventoryInterface } from '../_hook/UseAddInventory';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { StarIcon } from 'src/app/utils/icons';
export const AvailableSection = ({
	formStore,
}: {
	formStore: UseFormReturn<AddInventoryInterface>;
}) => {
	//  hooks
	const { t } = useTranslation();
	useMemo(() => {
		formStore.setValue('status', formStore.watch('status') ? 1 : 0);
	}, [formStore.watch('status')]);
	return (
		<div className='global-cards gap-[1.5rem]'>
			<h2 className='title'>{t('Quick actions')}</h2>
			<div className='flex-col-global gap-[1rem]'>
				<div className='flex-row-global gap-4'>
					<FormSwitchField<AddInventoryInterface> formStore={formStore} name='status' enable />
					<p>{t('Available on store')}</p>
				</div>

				<div className='flex-row-global gap-4 md:px-4'>
					<StarIcon className='fill-hint' />
					<p>{t('Feature on the front of page')}</p>
				</div>
			</div>
		</div>
	);
};
