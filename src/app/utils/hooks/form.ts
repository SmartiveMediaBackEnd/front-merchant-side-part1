/** Hook for zod validation */
import { ZodRawShape, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm as useRHForm } from 'react-hook-form';

export type InferredZodSchema<T extends ZodRawShape> = T extends ZodRawShape
	? z.infer<z.ZodObject<T>>
	: never;

export function useForm<TZodRawShape extends ZodRawShape>(params: {
	schema: TZodRawShape;
	defaultValues: UseFormProps<InferredZodSchema<TZodRawShape>>['defaultValues'];
	handleSubmit: (validatedData: InferredZodSchema<TZodRawShape>) => void;
}) {
	const formStore = useRHForm<InferredZodSchema<TZodRawShape>>({
		resolver: zodResolver(z.object(params.schema)),
		defaultValues: params.defaultValues,
		mode: 'onChange',
	});

	return {
		formStore,
		onSubmit: formStore.handleSubmit(params.handleSubmit),
	};
}
