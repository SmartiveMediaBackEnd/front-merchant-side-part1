

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export interface IdentifierFormProps {
    setStep: (step: number) => void;
    onIdentifierChange: (Identifier: string) => void;
    setEmail: (e: string) => void;
}

const schemas = {
    emailOrPhone: z.string().min(1, { message: 'Input is required' }),
};

const checkEmail = async (emailOrPhone: string) => {
    try {
        const response = await fetch(`https://my.dookan.net/api/v1/merchant/get-domain?email=${emailOrPhone}`);
        if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data);

            if (data.status === 'success' && data.data.length > 0) {
                // Log the data in case of success
                console.log('Data:', data.data);

                // Extract the first domain from the array
                const domain = data.data[0];

                // Store the domain in localStorage as a plain string
                localStorage.setItem('domain', domain);

                return true;
            } else {
                console.log('Email does not exist');
                return false;
            }
        } else {
            console.error('Error in response:', response.status, response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
};

export default function useIdentifierForm({
    setStep,
    onIdentifierChange,
    setEmail,
}: IdentifierFormProps) {
    const navigate = useNavigate(); // Hook for navigation

    const { formStore, onSubmit } = useForm({
        schema: schemas,
        handleSubmit: async (values: { emailOrPhone: string }) => {
            const emailExists = await checkEmail(values.emailOrPhone);
            console.log('emailExists', emailExists);
            if (emailExists) {
                setStep(2);
                setEmail(values.emailOrPhone);
            } else {
                // Redirect to /register on failure
                navigate('/register');
            }
        },
        defaultValues: { emailOrPhone: '' },
    });

    useEffect(() => {
        const subscription = formStore.watch((value) => {
            const emailOrPhoneValue = value.emailOrPhone ?? '';
            onIdentifierChange(emailOrPhoneValue);
        });
        return () => subscription.unsubscribe();
    }, [formStore.watch('emailOrPhone'), onIdentifierChange]);

    return { formStore, onSubmit };
}


