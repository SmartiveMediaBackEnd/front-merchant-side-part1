import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';

export default function Links({
	Icon,
	name,
	path,
	list,
	close,
}: {
	Icon: React.ReactNode;
	name: string;
	path: string;
	list?: boolean | undefined;
	close?: (() => void) | undefined;
}) {
	//  hooks
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const isActive = pathname === path || location.pathname.startsWith(`/${path}`);

	return (
		<NavLink to={path} className={`${isActive ? 'active' : ''} `} onClick={close}>
			<div
				className={`flex px-3 ${
					list
						? 'items-center gap-4 py-2 '
						: 'group  flex-col justify-center items-center  h-[60px] rounded-lg group-[.active]:bg-light-3  hover:bg-light-3'
				}`}
			>
				<Icon
					className={`size-[24px] ${list ? 'fill-pri-dark' : 'fill-hint group-hover:fill-primary'}`}
				/>
               
				<p
					className={`text-sm ${
						list
							? 'text-title'
							: 'text-subtitle group-hover:text-primary group-[.active]:font-semibold group-[.active]:text-primary'
					}`}
				>
					{t(name as any)}
				</p>
			</div>
		</NavLink>
	);
}
