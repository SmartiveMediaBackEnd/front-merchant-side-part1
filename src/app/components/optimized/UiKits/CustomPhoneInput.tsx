import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';

interface customPhoneInput {
	value: string | undefined;
	onHandleChange: (e: string) => void;

	touched?: boolean | undefined;
	errors?: string | undefined;
	isLoading?: boolean;
}
const CustomPhoneInput = ({
	value,
	onHandleChange,
	touched,
	errors,
	isLoading,
}: customPhoneInput) => {
	//  hooks

	const [focus, setFocus] = useState<boolean>(false);

	//   on change function
	const changeHandler = (e: string) => {
		onHandleChange(e);
	};

	return (
		<div className='flex-col-global gap-[.2rem]' dir='ltr'>
			<PhoneInput
				autoFormat={false}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder={'85484854545'}
				value={value}
				disabled={isLoading}
				enableSearch
				onChange={changeHandler}
				inputProps={{
					required: true,
					autoFocus: false,
				}}
				// specialLabel={t('Phone')}
				country={'sa'}
				// disableCountryCode
				countryCodeEditable={false}
				disableSearchIcon
				// disableCountryGuess
				autocompleteSearch={false}
				onlyCountries={['sa', 'eg']}
				searchStyle={{ margin: '0', width: '95%', height: '50px' }}
				inputStyle={{
					width: '100%',
					height: '2.5rem',
					border: '1px solid #e2e8f0',
					
				}}
				// containerClass={classes.borderClass}
				dropdownStyle={{ height: '300px', width: '267px' }}
				//  disableDropdown="false"
			/>

			{/* {errors &&  <p className='global_error'>{errors}</p>} */}
		</div>
	);
};
export default CustomPhoneInput;
