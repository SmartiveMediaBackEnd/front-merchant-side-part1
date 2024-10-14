import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface TabsLinkProps {
	tabs: { name: string; path: string }[];
	path?: string;
}

export default function HorizontalTabsLink({ tabs, path }: TabsLinkProps) {
	const { tab: tabName } = useParams<{ tab: string }>();
	const { t } = useTranslation();

	return (
		<div>
			<div className='bg-white border-b border-borders-lines  overflow-x-auto 	 '>
				<ul className='flex  flex-nowrap	 sm:flex-wrap font-medium text-center  ms-[18px]'>
					{tabs.map((tab) => (
						<li key={tab.path} className='mr-2'>
							<Link
								className={`inline-block p-2 rounded-t-lg  ${
									tabName === tab.path
										? 'text-primary md:font-semibold font-[500] md:border-b-2 border-b-[.08rem] md:text-[1rem] text-[.55rem] border-primary'
										: 'text-hint md:paragraph text-[.5rem] hover:text-primary'
								}`}
								to={`${path}/${tab.path}`}
							>
								{t(tab.name as any)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
