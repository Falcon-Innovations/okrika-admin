/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import Image from "next/image";
import {CustomButton} from '@/components/shared/CustomButton';
import Link from 'next/link';
import {NavLink} from '../shared/NavLink';
import LaptopLady from '../../public/laptop-lady.png';
import {motion} from 'framer-motion';
import MobileNavbar from '../shared/MobileNavbar';
import CamsolLogo from '../shared/CamsolLogo';
import {NAVBAR_LINKS} from '@/lib/constants';
import {Carousel} from '../shared/carousel';
import {useNotificationStore} from 'contexts/notifications';


export const Hero = () => {
    const {addNotification} = useNotificationStore();

    return (
        <div>
            <div className="w-full flex sm:min-h-[90vh] min-h-fit">
                <div className="w-full px-4 sm:w-2/3 pt-6 sm:pl-16 lg:pl-24">
                    <nav className="hidden sm:flex capitalize items-start gap-8">
                        <CamsolLogo />
                        {
                            NAVBAR_LINKS.map((link) => (
                                <NavLink key={link.name} label={link.name} to={link.href} />
                            ))
                        }
                    </nav>
                    <MobileNavbar />
                    <motion.div
                        initial={{opacity: 0, x: -90}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.3}}
                        viewport={{once: true}}
                    >
                        <h1 className="capitalize mt-4 sm:mt-16 text-black font-bold text-4xl sm:text-5xl leading-10 sm:leading-[55px]">A new way to
                            <br /> connect, collaborate<br /> and excel in the <br />
                            <span className="text-deluge-500 capitalize">tech industry.</span>
                        </h1>
                        <p className="text-[#000000B2] my-6">
                            We empowering people through technology. here you <br />
                            learn, participate in screening tasks and get rewards.
                        </p>
                        <div className="flex items-center space-x-4">
                            {/* <Link
                                href="/getting-started"
                            > */}
                            <CustomButton
                                label="Get started ~ now"
                                onClick={() => {
                                    addNotification({
                                        type: 'error',
                                        title: 'User Deleted',
                                    });
                                }}
                            />
                            {/* </Link> */}
                            <Link href="https://www.youtube.com/watch?v=afJ3d2T3grw" target='_new'>
                                <CustomButton
                                    variant='secondary'
                                    label="watch video"
                                    iconBefore={
                                        <Image
                                            src="./play.svg"
                                            alt="play-icon"
                                            width={16}
                                            height={16}
                                        />
                                    }
                                />
                            </Link>
                        </div>
                        <div className="isolate flex -space-x-1 overflow-hidden my-8">
                            <img
                                className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="text-[#000000B2]">80 000+</p>
                            <span className="w-2 h-2 rounded-full bg-deluge-500"></span>
                            <p className="text-[#000000B2]">Active users across the globe</p>
                        </div>
                    </motion.div>
                </div>
                <div className="hidden sm:block w-1/3 relative bg-deluge-100 pt-6">
                    <div className="flex cursor-pointer  items-center justify-center">
                        <Link href="/getting-started">
                            <CustomButton
                                label="Sign up"
                            />
                        </Link>
                    </div>
                    <div className="absolute -left-40 top-1/5 hidden lg:block">
                        <motion.div className="relative"
                            initial={{opacity: 0, x: 90}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.3}}
                            viewport={{once: true}}
                        >
                            <Image
                                alt="lady-with-laptop"
                                src={LaptopLady}
                                placeholder="blur"
                                width={350}
                                height={150}
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                    </div>
                    <div className="flex items-center mt justify-center mt-20">
                        <Image
                            src="rocket.svg"
                            alt="play-icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className='mt-2 sm:-mt-12 space-y-2 w-full z-50'>
                <motion.p
                    className='text-center text-black/40 -mt-20 mb-8'
                // animate={{scale: [1, 1.2, 1]}} // Scale animation from 1 to 1.2 and back to 1
                // transition={{repeat: Infinity, duration: 1.5}} // Repeat the animation indefinitely with a duration of 1.5 seconds
                >
                    Trusted by
                </motion.p>
                <Carousel className='mx-auto w-4/5  z-50  text-lg sm:text-2xl sm:max-w-3xl bg-white ring-white ring-8 shadow-2xl px-8 py-2  rounded-2xl flex flex-row text-deluge-400 sm:w-full items-center justify-center'>
                    <Image
                        src="./whu1.svg"
                        alt="whu"
                        width={120}
                        height={80}
                    />
                    <div className="mr-12 pb-1">
                        <Image
                            src="./SFG2.svg"
                            alt="finanzegruppe-logo"
                            width={180}
                            height={108}
                            className='mr-12'
                        />
                    </div>
                    <Image
                        src="./Karla.svg"
                        alt="karla-logo"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="./whu2.svg"
                        alt="whu"
                        width={60}
                        height={40}
                    />
                    <Image
                        src="./repareo2.svg"
                        alt="repareo-logo"
                        width={120}
                        height={96}
                    />
                </Carousel>
            </motion.div>
        </div>
    )
}
