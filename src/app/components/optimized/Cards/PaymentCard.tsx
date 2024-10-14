import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { getImageUrl } from 'src/app/utils';
import FormField from '../../ui/form/field';
import PaymentInputs from '../Payment/PaymentInputs';
import PaymentAccordion from '../../ui/accordion/PaymentAccordion';
import { PaymentIcon } from 'src/app/utils/icons';
import { Button, CheckBox } from '..';
import useCustomHookPayment, { IPaymentCardInterface } from '../Payment/HookForPayment';

export default function PaymentCard({ removeHours }: { removeHours: boolean }) {
	// hook
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
	const { t } = useTranslation();
	const navigate = useNavigate();

	// custom hook
	const { handelDefaultValue, paymentSchema } = useCustomHookPayment();

	const handleSubmit = (values: IPaymentCardInterface) => {
		// console.log(values);
		navigate('successfullyPurchased');
	};

	const { formStore, onSubmit } = useForm({
		schema: paymentSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	// handle changes
	const isButtonDisabled = !agreeToTerms || !selectedPaymentMethod;
	const handlePaymentMethodChange = (method: string) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
	};
	const handleTermsCheckbox = () => {
		setAgreeToTerms(!agreeToTerms);
	};

	// data methods accordion
	const paymentMethods = [
		{
			id: 1,
			icon: <PaymentIcon />,
			title: t('Credit/Debit Card'),
			name: 'credit',
			contain: [{ number: 'debitNumber', expiryDate: 'debitExpiryDate', cvv: 'debitCvv' }],
		},
		{
			id: 2,
			icon: <img src={getImageUrl('companies/apple.svg')} className='w-5 h-4' alt='Apple Pay' />,
			title: t('Apple Pay'),
			name: 'applePay',
			contain: [{ number: 'appleNumber', expiryDate: 'appleExpiryDate', cvv: 'appleCvv' }],
		},
		{
			id: 3,
			icon: <img src={getImageUrl('companies/stcPay.svg')} className='w-5 h-4' alt='STC Pay' />,
			title: t('STC Pay'),
			name: 'stcPay',
			contain: [{ number: 'stcNumber', expiryDate: 'stcExpiryDate', cvv: 'stcCvv' }],
		},
	];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='global-cards'>
				<h2 className='title'>{t('Select payment method')}</h2>

				<div className='flex-col-global'>
					{paymentMethods.map((item) => (
						<PaymentAccordion
							key={item.id}
							isOpen={selectedPaymentMethod === item.name}
							icon={item.icon}
							title={item.title}
							onToggle={() => handlePaymentMethodChange(item.name)}
						>
							{item.contain.map((paymentItem) => (
								<PaymentInputs formStore={formStore} key={paymentItem.number} {...paymentItem} />
							))}
						</PaymentAccordion>
					))}
				</div>

				<div className='flex-col-global gap-4'>
					<CheckBox
						checked={agreeToTerms}
						handleOnChange={handleTermsCheckbox}
						label={
							<div className='flex flex-wrap items-center text-sm text-subtitle gap-1'>
								<span className='text-title'>{t('I agree to')}</span>
								<p className='text-primary cursor-pointer'>
									{t('Terms and Conditions, Privacy Policy')}
									<span className='text-title px-[.2rem]'>{t('and')} </span>
									{t('Selling policy')}
								</p>
							</div>
						}
					/>

					{agreeToTerms && !removeHours && (
						<div className='md:w-[50%]'>
							<FormField
								formStore={formStore}
								name='hours'
								label={t('Number of hours')}
								render={(field) => <Input type='number' {...field} placeholder={t('Hours')} />}
							/>
						</div>
					)}
					<div className='flex justify-end'>
						{agreeToTerms ? (
							<Button variant='primary' onClick={onSubmit}>
								{t('Confirm Purchase')} ({t('SAR')} 50)
							</Button>
						) : (
							<Button disabled={isButtonDisabled}>
								{t('Confirm Purchase')} ({t('SAR')} 50)
							</Button>
						)}
					</div>
				</div>
			</form>
		</Form>
	);
}
