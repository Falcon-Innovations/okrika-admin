import React, {Fragment, useState} from 'react'
import Link from 'next/link';
import {Menu, Transition} from '@headlessui/react'
import Image from "next/image";
import classNames from 'classnames';
import {Menu as MenuIcon, XIcon, ChevronDown, Rocket, Code, Heart, MessageSquare, Newspaper} from 'lucide-react';
import {NAVBAR_LINKS} from '@/lib/constants';

const COMPANY_SUBLINKS = [
    {
        title: 'Camsol innovation',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Rocket,
        link: '/'
    },
    {
        title: 'Camsol Technology',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Code,
        link: '/'
    },
    {
        title: 'Camsol Foundation',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Heart,
        link: '/'
    },
    {
        title: 'Camsol Platform',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: MessageSquare,
        link: '/'
    },
    {
        title: 'Camsol Learning',
        label: 'Consolidation of analysis, consulting, implementation & maintenance.',
        icon: Newspaper,
        link: '/'
    }
]

const SubMenu = ({label}: {label: string}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex items-center justify-between py-2 text-sm text-neutral-900'
            >
                {label}
                <ChevronDown
                    aria-hidden="true"
                    className={classNames("-mr-1 h-5 w-5 text-neutral-700",
                        open && 'rotate-180'
                    )}
                />
            </div>
            {
                open ? (
                    <div className='w-full bg-white shadow-lg py-1 rounded-2xl'>
                        {
                            COMPANY_SUBLINKS.map((sublink) => (
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
                ) : null
            }
        </>
    )
}



const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Menu as="div" className="flex w-full sm:hidden relative">
            <div className='w-full'>
                <Menu.Button className="flex w-full rounded-full text-sm">
                    {({open}) => (
                        <>
                            {
                                open ? (
                                    <div className='w-full flex items-center justify-between'>
                                        <Image
                                            src="./camsol-logo.svg"
                                            alt="camsol-logo"
                                            width={35}
                                            height={35}
                                        />
                                        <XIcon className="h-8 w-8 text-neutral-600" />
                                    </div>
                                ) : (
                                    <div className='w-full flex items-center justify-between'>
                                        <Image
                                            src="./camsol-logo.svg"
                                            alt="camsol-logo"
                                            width={35}
                                            height={35}
                                        />
                                        <MenuIcon className="h-8 w-8 text-neutral-600" />
                                    </div>
                                )
                            }
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
                <Menu.Items className="absolute inset-0 z-10 mt-12 w-full min-h-screen origin-top-right bg-white py-1">
                    {
                        NAVBAR_LINKS.map((link) => (
                            <Menu.Item key={link.name}>
                                {({active}) => (
                                    <Link
                                        href={link.href}
                                        className={classNames(active ? 'bg-gray-100' : '', 'block py-2 text-sm text-neutral-900')}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))
                    }
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MobileNavbar