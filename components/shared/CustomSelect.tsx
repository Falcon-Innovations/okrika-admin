import {Dispatch, Fragment, SetStateAction} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import classNames from 'classnames'
import {ChevronUp, ChevronDown, Check} from 'lucide-react';


type SelectOption = {
    label: string,
    value: string
}

type CustomSelectProps = {
    selected: SelectOption,
    setSelected: Dispatch<SetStateAction<SelectOption>>,
    options: Array<SelectOption>,
    disabled?: boolean,
    defaultValue?: SelectOption,
    isMulti?: boolean,
    placeholder?: string,
    name?: string
}


export const CustomSelect = ({options, name, isMulti = false, disabled = false, selected, setSelected}: CustomSelectProps) => {

    return (
        <Listbox
            multiple={isMulti}
            value={selected}
            onChange={setSelected}
            disabled={disabled}
            name={name}
        >
            {({open}) => (
                <div className="relative w-full mt-1">
                    <Listbox.Button
                        placeholder='Country'
                        className={classNames("relative w-full bg-[#F6F6F6] cursor-default rounded-md  py-2 pl-3 pr-10 text-left shadow-sm focus:border-deluge-600 focus:outline-none focus:ring-1 focus:ring-deluge-600 sm:text-sm",
                            open && 'border border-deluge-600'
                        )}>
                        <span className="block truncate font-normal text-base">{selected?.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            {
                                open ? (
                                    <ChevronUp className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                )
                                    : (
                                        <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    )
                            }
                        </span>
                    </Listbox.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            placeholder='Country'
                            className="absolute z-10 mt-0 max-h-60 custom-scrollbar rounded-b-2xl w-full overflow-auto  border border-deluge-600 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option, index) => (
                                <Listbox.Option
                                    key={option?.value}
                                    className={({active}) =>
                                        classNames(
                                            index === 0 && 'hidden',
                                            active && 'bg-[#e3d4f3]/20',
                                            'relative cursor-default select-none py-2 pl-3 pr-9 text-black'
                                        )
                                    }
                                    value={option}
                                >
                                    {({selected, active}) => (
                                        <>
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {option?.label}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-deluge-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <Check className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    )
}
