import { Avatars, CheckBox, ClientBox } from '..';

/**
 * @param {{
 *   id: string | number;
 *   title?: string;
 *   subTitle: string;
 *   img: string;
 *   fName?: string;
 *   lName?: string;
 *   count?: number;
 *   isChecked: boolean;
 *   handleOnCheckChange: (isChecked: boolean, item: { id: string | number; title: string }) => void;
 *   variant?: "customers" | "groups";
 * }} props
 */
export default function SelectItem(props) {
	function handleCheckBoxClick() {
		const newValue = !props.isChecked;
		props.handleOnCheckChange(newValue, { id: props.id, title: props.title ?? '' });
	}

	const title = props.title ?? `${props.fName} ${props.lName ?? ''}`;

	switch (props.variant) {
		case 'customers':
			return (
				<label
					className={`w-full h-[3.5rem] flex items-center justify-between px-[1rem] hover:bg-sec-light cursor-pointer ${
						props.isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox
						title={title}
						details={props.subTitle}
						avatar={<Avatars src={props.img} fName={props.fName} lName={props.lName} />}
					/>
					<CheckBox checked={props.isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);

		case 'groups':
			return (
				<label
					className={`w-full h-[3.5rem] flex items-center justify-between px-[1rem] hover:bg-sec-light cursor-pointer${
						props.isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox
						title={title}
						details={props.subTitle}
						avatar={<Avatars variant='countAvatar' count={props.count} />}
					/>
					<CheckBox checked={props.isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);

		default:
			return (
				<label
					className={`w-full h-[56px] flex items-center justify-between px-[1rem] hover:bg-sec-light cursor-pointer${
						props.isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<div className='flex items-center gap-[1rem]'>
						<div className='w-[46px] h-[46px] rounded overflow-hidden'>
							<img src={props.img} alt='' className='w-full h-full' />
						</div>

						<div>
							<h4 className='text-sm font-semibold capitalize text-title'>{props.title}</h4>
							<p className='text-sm text-subtitle'>{props.subTitle}</p>
						</div>
					</div>
					<CheckBox checked={props.isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);
	}
}
