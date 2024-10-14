import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/app/components/ui/tabs';
/**
 * @template {unknown} [ElemProps=undefined]
 *
 * @typedef {{
 *  title: string;
 *  Elem: (props: ElemProps) => JSX.Element;
 *  isInProgress?: boolean;
 * }} TabsBuilderItem
 */

/**
 * @template {unknown} [ElemProps=undefined]
 *
 * @param {{
 *  items: TabsBuilderItem<ElemProps>[]
 *  sharedProps?: ElemProps;
 * }} props
 */
export default function TabsBuilder(props) {
	const sharedProps = props.sharedProps;
	const { t } = useTranslation();

	return (
		<Tabs defaultValue={props.items[0].title} className='space-y-4'>
			<TabsList className='justify-start w-full h-auto max-w-full gap-6 p-0 overflow-auto bg-transparent border-b rounded-none border-inactive'>
				{props.items.map((tab) => (
					<TabsTrigger
						key={tab.title}
						value={tab.title}
						className='p-0 pb-2 shadow-none rounded-none data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary'
					>
						{/* @ts-ignore */}
						{t(tab.title)}{' '}
						{tab.isInProgress && <p className='text-sec-pressed'>&nbsp;({t('In Progress')})</p>}
					</TabsTrigger>
				))}
			</TabsList>
			{props.items.map((tab) => (
				<TabsContent key={tab.title} value={tab.title}>
					{/* @ts-ignore */}
					<tab.Elem {...sharedProps} />
				</TabsContent>
			))}
		</Tabs>
	);
}

// Complete Example

// import { useTranslation } from 'react-i18next';
// import { Card, CardContent } from 'src/app/components/ui/card';
// import TabsBuilder, { TabsBuilderItem } from './TabsBuilder';

// const tabsItems: TabsBuilderItem[] = [
// 	{
// 		title: 'Details',
// 		Elem: (props) => {
// 			const { t } = useTranslation();
// 			return (
// 				<div>
// 					<h2>{t('Details')}</h2>
// 					<p>{t('Enter the details of the product here.')}</p>
// 					{/* Your form fields for details go here */}
// 				</div>
// 			);
// 		},
// 	},
// 	{
// 		title: 'Settings',
// 		Elem: (props) => {
// 			const { t } = useTranslation();
// 			return (
// 				<div>
// 					<h2>{t('Settings')}</h2>
// 					<p>{t('Adjust the product settings here.')}</p>
// 					{/* Your form fields for settings go here */}
// 				</div>
// 			);
// 		},
// 	},
// 	{
// 		title: 'Preview',
// 		Elem: (props) => {
// 			const { t } = useTranslation();
// 			return (
// 				<div>
// 					<h2>{t('Preview')}</h2>
// 					<p>{t('Preview the product here.')}</p>
// 					{/* Your preview component goes here */}
// 				</div>
// 			);
// 		},
// 	},
// ];

// export default function ProductForm() {
// 	return (
// 		<Card>
// 			<CardContent>
// 				<TabsBuilder items={tabsItems} />
// 			</CardContent>
// 		</Card>
// 	);
// }
