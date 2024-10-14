import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { useQuery } from 'react-query';
import { AddInventoryInterface } from '../_hook/UseAddInventory';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { Textarea } from 'src/app/components/ui/textarea';
import { BranchesApi } from 'src/app/React-Query/BranchesApi';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { BranchInterface } from 'src/app/interface/BranchInterface';
export const BasicInfo = ({ formStore }: { formStore: UseFormReturn<AddInventoryInterface> }) => {
	//     hooks
	const { t } = useTranslation();
	const { data } = useQuery([`branchesData`], () => BranchesApi.branches());
	let branchesData = data?.data?.data;
	console.log('branchesData', branchesData)
	return (
		<div className='global-cards gap-[1.5rem]'>
			<h2 className='title'>{t('Basic info')}</h2>
			<div className='flex-col-global gap-[1rem]'>
				<div className='md:flex-row-global flex-col-global md:gap-0 gap-[1rem] justify-between'>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='name'
							label={t('INVENTORY NAME')}
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>
					<div className='md:w-[48%] w-full'>
						{branchesData?.length > 0 && (
							<SelectFormField
								name='branch_id'
								label={t('Branch name')}
								formStore={formStore}
								options={branchesData?.map((e: BranchInterface) => {
									return {
										label: e?.name,
										value: e?.id?.toString(),
									};
								})}
								placeholder={t('Select branch')}
							/>
						)}
					</div>
				</div>

				<div className='md:flex-row-global flex-col-global md:gap-0 gap-[1rem] justify-between'>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='code'
							label={t('SKU Code')}
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='priority'
							label={t('PRIORITY')}
							render={(field) => <Input type='number' {...field} placeholder={''} />}
						/>
					</div>
				</div>

				<FormField
					formStore={formStore}
					name='description'
					label={t('Description')}
					render={(field) => <Textarea {...field} placeholder={''} />}
				/>
			</div>
		</div>
	);
};
