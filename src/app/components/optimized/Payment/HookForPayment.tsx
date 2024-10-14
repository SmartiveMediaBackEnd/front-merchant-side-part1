// import { useTranslation } from 'react-i18next';
// import { z } from 'zod';
// export interface IPaymentCardInterface {
// 	// debit card
// 	debitNumber: number;
// 	debitExpiryDate: string;
// 	debitCvv: number;
// 	// apple pay
// 	appleNumber: number;
// 	appleExpiryDate: string;
// 	appleCvv: number;
// 	// stc pay
// 	stcNumber: number;
// 	stcExpiryDate: string;
// 	stcCvv: number;

// 	agreeToTerms: boolean;
// 	hours?: number;
// }

// export default function useCustomHookPayment() {
// 	const { t } = useTranslation();
// 	const handelDefaultValue = () => ({
// 		// debit card
// 		debitNumber: 0,
// 		debitExpiryDate: '',
// 		debitCvv: 0,
// 		// apple pay
// 		appleNumber: 0,
// 		appleExpiryDate: '',
// 		appleCvv: 0,
// 		// stc pay
// 		stcNumber: 0,
// 		stcExpiryDate: '',
// 		stcCvv: 0,

// 		agreeToTerms: false,
// 		hours: 0,
// 	});

// 	const paymentSchema = {
// 		// debit card
// 		debitNumber: z.coerce
// 			.number()
// 			.positive()
// 			.min(14, { message: t('Account number must be at least 14 numbers') })
// 			.refine((val) => /^\d{14}$/.test(val.toString())),
// 		debitExpiryDate: z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
// 			message: t('Date must be in the format MM/YYYY'),
// 		}),
// 		debitCvv: z.coerce
// 			.number()
// 			.positive()
// 			.refine((val) => /^\d{3}$/.test(val.toString()), {
// 				message: t('CVV must be 3 digits'),
// 			}),

// 		// apple pay
// 		appleNumber: z.coerce
// 			.number()
// 			.positive()
// 			.min(14, { message: t('Account number must be at least 14 numbers') })
// 			.refine((val) => /^\d{14}$/.test(val.toString())),
// 		appleExpiryDate: z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
// 			message: t('Date must be in the format MM/YYYY'),
// 		}),
// 		appleCvv: z.coerce
// 			.number()
// 			.positive()
// 			.refine((val) => /^\d{3}$/.test(val.toString()), {
// 				message: t('CVV must be 3 digits'),
// 			}),

// 		// stc pay
// 		stcNumber: z.coerce
// 			.number()
// 			.positive()
// 			.min(14, { message: t('Account number must be at least 14 numbers') })
// 			.refine((val) => /^\d{14}$/.test(val.toString())),
// 		stcExpiryDate: z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
// 			message: t('Date must be in the format MM/YYYY'),
// 		}),
// 		stcCvv: z.coerce
// 			.number()
// 			.positive()
// 			.refine((val) => /^\d{3}$/.test(val.toString()), {
// 				message: t('CVV must be 3 digits'),
// 			}),

// 		agreeToTerms: z.boolean().default(false),
// 		hours: z.optional(z.coerce.number().positive().min(1)),
// 	};

// 	return {
// 		handelDefaultValue,
// 		paymentSchema,
// 	};
// }

import { useTranslation } from 'react-i18next';
import { z } from 'zod';

type NumberField = 'debitNumber' | 'appleNumber' | 'stcNumber';

export interface IPaymentCardInterface {
	// debit card
	debitNumber: number;
	debitExpiryDate: string;
	debitCvv: number;
	// apple pay
	appleNumber: number;
	appleExpiryDate: string;
	appleCvv: number;
	// stc pay
	stcNumber: number;
	stcExpiryDate: string;
	stcCvv: number;

	agreeToTerms: boolean;
	hours?: number;
}

export default function useCustomHookPayment() {
	const { t } = useTranslation();
	const handelDefaultValue = () => ({
		// debit card
		debitNumber: 0,
		debitExpiryDate: '',
		debitCvv: 0,
		// apple pay
		appleNumber: 0,
		appleExpiryDate: '',
		appleCvv: 0,
		// stc pay
		stcNumber: 0,
		stcExpiryDate: '',
		stcCvv: 0,

		agreeToTerms: false,
		hours: 0,
	});

	const paymentSchema = () => {
		const numberValidation = z.coerce
			.number()
			.positive()
			.min(14, { message: t('Account number must be at least 14 numbers') })
			.refine((val) => /^\d{14}$/.test(val.toString()));

		const expiryDateValidation = z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
			message: t('Date must be in the format MM/YYYY'),
		});

		const stcCvvValidation = z.coerce
			.number()
			.positive()
			.refine((val) => /^\d{3}$/.test(val.toString()), {
				message: t('CVV must be 3 digits'),
			});

		return {
			// debit card
			debitNumber: numberValidation,
			debitExpiryDate: expiryDateValidation,
			debitCvv: stcCvvValidation,

			// apple pay
			appleNumber: numberValidation,
			appleExpiryDate: expiryDateValidation,
			appleCvv: stcCvvValidation,

			// stc pay
			stcNumber: numberValidation,
			stcExpiryDate: expiryDateValidation,
			stcCvv: stcCvvValidation,

			agreeToTerms: z.boolean().default(false),
			hours: z.optional(z.coerce.number().positive().min(1)),
		};
	};

	const numberFields: { number: NumberField }[] = [
		{ number: 'debitNumber' },
		{ number: 'appleNumber' },
		{ number: 'stcNumber' },
	];

	return {
		handelDefaultValue,
		paymentSchema,
		numberFields,
	};
}
