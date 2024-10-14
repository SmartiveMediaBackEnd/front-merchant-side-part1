import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';

export default function MenuOptions({
	options,
	btn,
}: {
	options: any;
	btn: React.ReactNode;
}) {


	return (
		<Dropdown>
			<MenuButton>{btn}</MenuButton>

			<Menu slots={{ listbox: AnimatedListbox }}>
				{options.map((item: any) => {
					return (
						<MenuItem
							key={item.id}
							onClick={() => item.click()}
							className='flex items-center gap-2'
						>
							{item.icon} {item.text}
						</MenuItem>
					);
				})}
			</Menu>
		</Dropdown>
	);
}

const Listbox = styled('ul')(
	() => `
  box-sizing: border-box;
  padding: 6px;
  margin: 12px;
  min-width: 200px;
 text-transform: capitalize;
  overflow: auto;
  outline: 0px;
  background: #fff;
  border: 1px solid #E8EBF2;
  color: #002042;
  box-shadow: 0px 5px 15px 0px #7C82B90D;
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }

  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(
	props: MenuListboxSlotProps,
	ref: React.ForwardedRef<HTMLUListElement>,
) {
	const { ownerState, ...other } = props;
	const popupContext = React.useContext(PopupContext);

	if (popupContext == null) {
		throw new Error(
			'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
		);
	}

	const verticalPlacement = popupContext.placement.split('-')[0];

	return (
		<CssTransition
			className={`placement-${verticalPlacement}`}
			enterClassName='open'
			exitClassName='closed'
		>
			<Listbox {...other} ref={ref} />
		</CssTransition>
	);
});

const MenuItem = styled(BaseMenuItem)(
	() => `
  list-style: none;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid  #002042;
    background-color: #EEF9F5;
    color:  #002042;
  }

  &.${menuItemClasses.disabled} {
    color:  #002042;
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: #EEF9F5;
    color:  #002042;
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
	() => `
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  `,
);




	// const createHandleMenuClick = (menuItem: string) => {
	// 	return () => {
	// 		console.log(`Clicked on ${menuItem}`);
	// 		handle();
	// 	};
	// };