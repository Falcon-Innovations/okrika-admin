import React from 'react'
import cn from 'classnames'
import {twMerge} from "tailwind-merge";

interface CustomButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    label: string | JSX.Element,
    variant?: 'primary' | 'secondary',
    loading?: boolean,
    iconBefore?: JSX.Element,
    iconAfter?: JSX.Element,
    classNames?: string
}

const baseClasses = 'rounded-md whitespace-nowrap text-center min-w-[140px] flex justify-center items-center space-x-4 px-6 py-4 capitalize'
const primaryClasses = 'hover:bg-deluge-500  hover:text-white/75  bg-deluge-600 text-white disabled:bg-neutral-100 disabled:text-neutral-300'



export const CustomButton = ({label, variant = 'primary', loading, iconAfter, iconBefore, classNames, ...props}: CustomButtonProps) => {

    return (
        <button
            className={twMerge
                ("rounded-md transition duration-700 ease-in whitespace-nowrap text-center min-w-[130px] flex text-base justify-center items-center gap-3 px-5 py-3 capitalize disabled:bg-[#F2EEF6] disabled:text-[#DCDEE0] disabled:cursor-not-allowed",
                    variant === 'primary' ?
                        "hover:bg-deluge-600  bg-deluge-500 text-white disabled:bg-neutral-100 disabled:text-neutral-300" :
                        "bg-white text-black border border-[#ADADAD] hover:text-deluge-600 hover:border-deluge-600",
                    classNames
                )}
            {...props}
        >
            {iconBefore && iconBefore}
            {loading ? 'Loading...' : label}
            {iconAfter && iconAfter}
        </button>
    )
}
