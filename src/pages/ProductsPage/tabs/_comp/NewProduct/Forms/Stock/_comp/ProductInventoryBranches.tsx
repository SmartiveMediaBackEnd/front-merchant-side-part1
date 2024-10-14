
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { AiFillQuestionCircle } from "react-icons/ai";
import { useQuery } from 'react-query';
import { BranchesApi } from 'src/app/React-Query/BranchesApi';
import AddBranchManager from './AddBranchManager';
import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';

export default function ProductInventoryBranches({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) {
	const { t } = useTranslation();
	const { data, isLoading, refetch } = useQuery(['branchesData'], () => BranchesApi.branches());
	let branchesData = data?.data?.data;
	// console.log('branchesData', branchesData);
	return (
		<>
			<div className='flex-row-global gap-2 mt-2'>
				<h3 className='title '>{t('Inventory branches')}</h3>
				<AiFillQuestionCircle size={20} color='#55C397' />
			</div>

			<div className='flex-row-global justify-between'>
				<h3 className='subtitle'>{t('NAME')}</h3>
				<h3 className='subtitle'>{t('QUANTITY')}</h3>
			</div>
			<hr />
			<div>
				{branchesData?.map((branch, i) => {
					if (!branch.id) return null;
					const idInv: number = branch.id;
					return (
						<div className='flex items-center justify-between' key={i}>
							<p className='title mb-2'>{branch.name}</p>
							<div className='mb-2'>
								<FormField
									formStore={formStore}
									name='qty'
									render={(field) => (
										<Input
											{...field}
											type="number"
										// onChange={(e) => {
										// 	field.onChange(e);
										// 	handleQuantityChange(i, e.target.value, idInv);
										// }}
										/>
									)}
								/>
							</div>


							{/* <div className='hidden'>
								<FormField
									formStore={formStore}
									name={`variants.${index}.inventories.${i}.id`}
									render={(field) => (
										<Input
											{...field} value={field.value || idInventory} disabled />
									)}
								/>
							</div> */}
						</div>
					);
				})}
				<hr />
			</div >

			<AddBranchManager formStore={formStore} />
		</>
	);
}