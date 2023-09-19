import React from 'react'
import {UseFormRegisterReturn} from 'react-hook-form';


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: JSX.Element;
    classNames?: string;
    error?: any;
    registration?: Partial<UseFormRegisterReturn>;
}

type CustomCheckboxProps = Omit<CheckboxProps, 'className'>


export const CustomCheckbox = ({label, classNames, error, registration, ...props}: CustomCheckboxProps) => {
    return (
        <div className="relative flex items-start">
            <div className="flex h-5 items-center">
                <input
                    type="checkbox"
                    className="h-5 w-5 border-[#858C94] text-deluge-500 focus:ring-deluge-600"
                    {...registration}
                    {...props}
                />
            </div>
            {
                label ? (
                    <div className="ml-3 text-sm">
                        <label htmlFor="comments" className="font-medium text-gray-700">
                            {label}
                        </label>
                    </div>
                ) : null
            }
        </div>
    )
}
