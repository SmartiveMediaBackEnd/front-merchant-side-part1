import { useTranslation } from 'react-i18next';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { InventoryInterface } from 'src/app/interface/InventoryInterface';
import { Switch } from 'src/app/components/ui/switch';

export default function InventoryTable({
	inventory,
	isLoading,
	children,
	handelId,
}: {
	inventory: InventoryInterface[];
	isLoading: boolean;
	children: React.ReactNode;
	handelId: (e: string) => void;
}) {
	//  hooks
	const { language } = useLanguage();
	const { t } = useTranslation();

	//  headers

	const inventoryHeaders = [
		{
			title: t('inventory name'),
		},
		{ title: t('SKU') },
		{ title: t('Location') },
		{ title: t('Branch name') },
		{ title: t('Status') },
		{ title: t('PRIORITY') },
		{ title: t('actions') },
	];



	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={inventoryHeaders.map((h) => h)}
			rows={inventory?.map((e: InventoryInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<p className='title text-sm'>{e.name}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-title'>{e.code}</p>
						</GlobalTableCell>,

						<GlobalTableCell>
							<p>
								{e.country}
								{/* {countryList.find((country) => country.id?.toString() === e.country?.toString())?.name || 'No Name'} */}
							</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p>{e.branch_id?.name || 'No Branch Name'}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<div>
								<Switch checked={e.status > 0 ? true : false} />
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p>{e.priority}</p>
						</GlobalTableCell>,

						<GlobalTableCell>
							<div onClick={() => handelId(e?.id)}>{children}</div>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
}
