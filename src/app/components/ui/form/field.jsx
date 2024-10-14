import { isValidElement, useId } from 'react';
import {
	FormControl,
	FormDescription,
	FormFieldController,
	FormItem,
	FormLabel,
	FormMessage,
} from '.';
import { cn } from 'src/app/utils';

/**
 * @typedef {'inline' | 'inline-reversed'} FormFieldLayout
 */

/**
 * @param {FormFieldLayout | undefined} layout
 * @param {import('react').HTMLAttributes<HTMLDivElement> | undefined} containerProps
 * @param {*} hasError
 * @param {*} hasDescription
 */
function getContainerProps(layout, containerProps, hasError, hasDescription) {
	const newContainerProps = {
		...containerProps,
	};

	switch (layout) {
		case 'inline':
		case 'inline-reversed': {
			newContainerProps.className = cn(newContainerProps.className, 'grid justify-start');
			hasError;
			const gridTemplateColumns = 'auto auto';
			let gridTemplateAreas = layout === 'inline' ? '"label input"' : '"input label"';
			if (hasDescription) {
				gridTemplateAreas += '\n"description description"';
			}
			if (hasError) {
				gridTemplateAreas += '\n"error error"';
			}
			newContainerProps.style = {
				...newContainerProps.style,
				gridTemplateColumns,
				gridTemplateAreas,
			};
			break;
		}

		default: {
			newContainerProps.className = cn(newContainerProps.className, 'flex flex-col');
		}
	}

	return newContainerProps;
}

/**
 * @template {import("react-hook-form").FieldValues} Values
 * @template {import("react-hook-form").FieldPath<Values> } [Key=import("react-hook-form").FieldPath<Values>]
 *
 * @typedef {{
 *  formStore: import("react-hook-form").UseFormReturn<Values>;
 *  name: Key;
 *  label?: import("react").ReactNode | import('.').FormLabelProps;
 *  description?: string;
 *  render: (
 *  	field: import("react-hook-form").ControllerRenderProps<Values, Key> & {
 *  		id: string;
 *  		required?: boolean;
 *  	},
 *  ) => import("react").ReactNode;
 *  controlId?: string;
 *  required?: boolean;
 *  hideError?: boolean;
 *  container?: import("react").HTMLAttributes<HTMLDivElement>;
 *  layout?: FormFieldLayout
 * }} FormFieldProps
 */

/**
 * @template {import("react-hook-form").FieldValues} Values
 * @template {import("react-hook-form").FieldPath<Values> } [Key=import("react-hook-form").FieldPath<Values>]
 * @param {FormFieldProps<Values, Key>} props
 *
 * @example
 *
 * ```jsx
 *	<FormField
 *		formStore={formStore}
 *		name='nameEn'
 *		label='Name (En)'
 *		render={(field) => <Input {...field} />}
 *	/>
 * ```
 *
 */
function FormField(props) {
	const reactId = useId();
	const controlId = `${props.controlId ?? props.name}-${reactId}`;

	const labelProps =
		(props.label && isValidElement(props.label)) ||
		typeof props.label === 'string' ||
		typeof props.label === 'number' ||
		typeof props.label === 'boolean'
			? { children: props.label }
			: props.label;

	return (
		<FormFieldController
			control={props.formStore.control}
			name={props.name}
			render={({ field, fieldState }) => {
				const containerProps = getContainerProps(
					props.layout,
					props.container,
					fieldState.error,
					props.description,
				);

				return (
					<FormItem {...containerProps}>
						{props.label && (
							<FormLabel
								htmlFor={controlId}
								className='text-sm capitalize text-zinc-700'
								style={{ gridArea: 'label' }}
								{...labelProps}
							/>
						)}
						<FormControl>
							{props.render({
								...field,
								id: controlId,
								required: props.required,
							})}
						</FormControl>
						{props.description && (
							<FormDescription style={{ gridArea: 'description' }}>
								{props.description}
							</FormDescription>
						)}
						{!props.hideError && <FormMessage style={{ gridArea: 'error' }} />}
					</FormItem>
				);
			}}
		/>
	);
}

export default FormField;
