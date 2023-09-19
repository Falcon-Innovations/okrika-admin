import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import classNames from 'classnames'
import {ChevronDown, Rocket} from 'lucide-react'
import Link from 'next/link'


const COMPANY_SUBLINKS = [
    {
        title: 'Camsol innovation',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Rocket,
        link: '/'
    }
]


type CollapsibleNavLinkProps = {
    label: string,
    sublinks: typeof COMPANY_SUBLINKS
}


export function CollapsibleNavLink({label, sublinks}: CollapsibleNavLinkProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="cursor-pointer list-none flex flex-col group">
                    {({open}) => (
                        <>
                            <div className='flex items-center text-lg text-neutral-700 space-x-2 w-full'>
                                <p>
                                    {label}
                                </p>
                                <ChevronDown
                                    aria-hidden="true"
                                    className={classNames("h-5 w-5 text-neutral-700",
                                        open && 'rotate-180'
                                    )}
                                />
                            </div>
                            <div className='group-hover:visible group-hover:transition group-hover:ease-in group-hover:delay-300 duration-300 invisible w-1/2 h-1 bg-deluge-600 rounded-md self-end' />
                        </>
                    )}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 rounded-2xl mt-2 w-64 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            sublinks.map((sublink) => (
                                <Menu.Item key={sublink.title}>
                                    {({active}) => (
                                        <Link
                                            href={sublink.link}
                                            className={classNames(
                                                active ? 'bg-deluge-50 text-gray-900' : 'text-gray-700',
                                                'group flex gap-2 items-start px-4 py-2 text-sm'
                                            )}
                                        >
                                            <div>
                                                <sublink.icon className="h-5 w-5 text-deluge-500" aria-hidden="true" />
                                            </div>
                                            <div className='-mt-1'>
                                                <h4 className='text-[#000E14] text-base mb-1'>
                                                    {sublink.title}
                                                </h4>
                                                <p className='text-neutral-700 text-xs font-normal'>
                                                    {sublink.label}
                                                </p>
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
