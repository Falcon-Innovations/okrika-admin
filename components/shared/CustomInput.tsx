import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showIcon?: JSX.Element;
    classNames?: string;
    error?: any;
    registration?: Partial<UseFormRegisterReturn>;
}


type CustomInputProps = Omit<InputProps, 'className'>

export const CustomInput = ({type = "text", classNames = "", registration, error, ...rest}: CustomInputProps) => {
    return (
        <div className='w-full flex flex-col'>
            <input
                type={type}
                className={cn('focus:ring-deluge-600  focus:border-deluge-600 rounded-md border-none w-full outline-none block p-[12px] sm:p-2 bg-[#f6f6f6] text-black',
                    error && 'focus:ring-error  focus:border-error border-2 border-error',
                    classNames)}
                {...registration}
                {...rest}
            />
            <div role="alert" aria-label={error?.message} className='text-xs text-error'>
                {error?.message}
            </div>
        </div>
    )
}

CustomInput.displayName = 'CustomInput'

