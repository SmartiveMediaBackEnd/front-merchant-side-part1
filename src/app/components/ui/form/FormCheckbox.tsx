
import { CheckIcon } from 'src/app/utils/icons';
import { UseFormReturn, Path, FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface CheckBoxXProps<T extends FieldValues> {
    variant?: "minus";
    label?: import("react").ReactNode;
    handleOnChange: (isChecked: boolean) => void;
    checked?: boolean;
    classes?: string;
    formStore: UseFormReturn<T>;
    name: Path<T>;
    fieldLabel?: string;
}

export default function FormCheckbox<T extends FieldValues>({
    variant,
    label,
    handleOnChange,
    classes,
    formStore,
    name,
    fieldLabel,
    ...props
}: CheckBoxXProps<T>) {
    const { t } = useTranslation();
    const { register } = formStore;

    function renderCheckboxIcon() {
        if (variant === 'minus' && props.checked) {
            return <p className='flex items-center justify-center w-full h-full text-white'>-</p>;
        }
        return <CheckIcon className='w-full h-full fill-white' />;
    }

    return (
        <div className='flex-col-global'>
            <label className={`flex gap-2 items-center cursor-pointer ${classes}`}>
                <input
                    {...register(name)}
                    {...props}
                    type='checkbox'
                    checked={props.checked}
                    onChange={(event) => handleOnChange(event.target.checked)}
                    className='hidden'
                />
                <div
                    className={`hover:bg-sec-light w-5 h-5 border rounded ${
                        props.checked ? 'bg-success hover:bg-sec-pressed' : ''
                    }`}
                >
                    {renderCheckboxIcon()}
                </div>
                {label && <span className='text-sm text-title'>{label}</span>}
            </label>
        </div>
    );
}
