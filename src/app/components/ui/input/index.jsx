import { forwardRef } from 'react';
import { cn } from 'src/app/utils';

/** @typedef {import("react").InputHTMLAttributes<HTMLInputElement>} InputProps */

const Input = forwardRef(
	/**
	 * @param {InputProps} props
	 * @param {import('react').LegacyRef<HTMLInputElement>} ref
	 */
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-10 max-h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = 'Input';

export { Input };
