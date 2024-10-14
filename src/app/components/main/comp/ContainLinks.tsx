import { useTranslation } from 'react-i18next';
import { sidebarLinksMob, sidebarLinksMobDrawer } from 'src/app/utils/constants';
import { ChatIcon, FaqIcon, NavIcon } from 'src/app/utils/icons';
import Links from './Links';

export default function ContainLinks({
	openMore,
	list,
	close,
	openChat,
	openHelpCenter,
}: {
	openMore?: () => void;
	list?: boolean;
	close?: () => void;
	openChat?: () => void;
	openHelpCenter?: () => void;
}) {
	const { t } = useTranslation();

	const style =
		'group flex flex-col justify-center items-center px-3 h-[60px] rounded-lg group-[.click]:bg-light-3  hover:bg-light-3 cursor-pointer';
	const title =
		'text-subtitle text-sm group-hover:text-primary group-[.click]:font-semibold group-[.click]:text-primary';
	return (
		<>
			<ul className={`bg-white px-1  ${list ? '' : 'h-[65px] flex items-center justify-between'}`}>
				{list ? (
					<div
						className='flex items-center gap-4 py-2 px-3 cursor-pointer'
						onClick={openHelpCenter}
					>
						<FaqIcon className='fill-pri-dark size-[24px] group-hover:fill-primary' />
						<p className='text-title text-sm'>{t('Help center')}</p>
					</div>
				) : (
					<>
						{sidebarLinksMob.map((link) => (
							<li key={link.id}>
								<Links {...link} />
							</li>
						))}
					</>
				)}

				{list ? (
					<>
						{sidebarLinksMobDrawer.map((link) => (
							<li key={link.id}>
								<hr />
								<Links {...link} list={true} close={close} />
							</li>
						))}
					</>
				) : (
					<>
						<li onClick={openChat} className={style}>
							<ChatIcon className='fill-hint size-[24px] group-hover:fill-primary' />
							<p className={title}>{t('Chat')}</p>
						</li>
						<li>
							<div onClick={openMore} className={style}>
								<NavIcon className='fill-hint size-[24px] group-hover:fill-primary' />
								<p className={title}>{t('More')}</p>
							</div>
						</li>
					</>
				)}
			</ul>
		</>
	);
}
