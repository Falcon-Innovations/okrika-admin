import React from 'react'
import cn from 'classnames'
interface CustomTextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    classNames?: string
}

export const CustomTextArea = ({classNames, ...props}: CustomTextAreaProps) => {
    return (
        <textarea
            className={cn('rounded-lg focus:ring-deluge-600 focus:border-deluge-600 border-none w-full outline-none block p-2 bg-[#f6f6f6] text-black', classNames)}
            {...props}
        />
    )
}
