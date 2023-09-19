import React from 'react'
import CamsolLogo from './CamsolLogo'
import Link from 'next/link'
import {Rocket, Heart, Plane, GraduationCap} from 'lucide-react';


const MENUS = [
    {
        name: 'Services',
        icon: Plane,
        links: ['UX/UI Design', 'Full stack development', 'Cyber security', 'Data science']
    },
    {
        name: 'Startups',
        icon: Rocket,
        links: ['Company building', 'Design sprint', 'Prototyp entwickln']
    },
    {
        name: 'Platform',
        icon: GraduationCap,
        links: ['Camsol platform', 'Jobs']
    }, {
        name: 'About us',
        icon: Heart,
        links: ['Our story', 'Camsol platform', 'Teams']
    }
]

export const Footer = () => {
    const today: Date | string = new Date()
    const year = today.getFullYear()

    return (
        <footer className='w-full px-4 sm:px-24 py-12'>
            <nav className='flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between w-full items-start'>
                {
                    MENUS.map((item) => (
                        <ul key={item.name} className='flex flex-col gap-3'>
                            <h3 className='text-black text-lg font-bold uppercase flex items-center gap-2'>
                                <item.icon className="h-8 w-8 text-deluge-500" aria-hidden="true" />
                                {item.name}
                            </h3>
                            {item.links.map((link) => (
                                <Link href='https://camsol.io/service#full-stack-development' key={link} className='hover:text-deluge-500 text-[#000000B2] text-base'>{link}</Link>
                            ))}
                        </ul>
                    ))
                }
            </nav>
            <div className="mt-12 mb-8 flex text-[#000000B2] gap-4 capitalize">
                <p className='hover:text-deluge-500 text-[#000000B2] text-base cursor-pointer'>impressum</p>
                <p className='hover:text-deluge-500 text-[#000000B2] text-base cursor-pointer'>datenschutz</p>
                <p className='hover:text-deluge-500 text-[#000000B2] text-base cursor-pointer'>AGB</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-16" />
            <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                <CamsolLogo />
                <p className='text-neutral-800 text-center sm:text-start mt-4 sm:mt-0'>
                    &copy; {year} Camsol Innovations GmbH. All rights reserved
                </p>
            </div>
        </footer>
    )
}
