/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, {useCallback, useEffect, useState} from 'react'
import Lowe from '../../public/Lowe.png'
import broThree from '../../public/bro-three.png'
import Simon from '../../public/Simon.png'
import carine from '../../public/Carine.png'
import classNames from 'classnames'
import bro from '../../public/bro.png'
import broTwo from '../../public/bro-two.png'
import sisThree from "../../public/sis-three.png"
import sis from '../../public/sis.png'
import Alice from '../../public/alice.png'
import broFour from '../../public/bro-four.png'
import Acha from '../../public/acha.png'
import {motion} from 'framer-motion';


const FEATURED_TALENTS = [
    {
        name: 'Lowe',
        text: 'Here, you feel at home, very friendly environment, I was able to learn new skills, while participating in amazing projects, even had several job offers from being one of the top performers',
        imgPath: '/Lowe.png'
    },
    {
        name: 'Yuyun Francis',
        text: 'Here, you feel at work, very friendly environment, I was able to learn new skills, while participating in amazing projects, even had several job offers from being one of the top performers',
        imgPath: '/francis.jpeg'
    },

    {
        name: 'Jume Brice',
        text: 'Here, you feel at work, wonderful environment, while participating in amazing projects, even had several job offers from being one of the top performers',
        imgPath: '/jume.png'
    },
    {
        name: 'Leonardo',
        text: 'Here, you feel at work, wonderful environment, while participating in amazing projects, even had several job offers from being one of the top performers',
        imgPath: '/leo.jpeg'
    },
    {
        name: 'Imelda',
        text: 'Here, you feel at work, wonderful environment, while participating in amazing projects, even had several job offers from being one of the top performers',
        imgPath: '/imelda.jpeg'
    },
]

const SLIDER_DELAY = 4000


const FloatingTalentsSection = () => {
    return (
        <div className='w-full hidden lg:flex items-center justify-between pb-12 pt-0'>
            <div className='flex -space-x-12 items-center -mb-28'>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className='w-32 h-32 bg-deluge-400 rounded-full z-20'
                >
                    <Image
                        alt="camsol-talent"
                        src={broFour}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-500 rounded-full mb-32 z-10'>
                    <Image
                        alt="camsol-talent"
                        src={sisThree}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </div>
            <div className='flex items-center'>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-400 rounded-full' >
                    <Image
                        alt="camsol-talent"
                        src={broThree}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-500 rounded-full mt-24'>
                    <Image
                        alt="camsol-talent"
                        src={Alice}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </div>
            <div className='flex -space-x-10 items-center'>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-400 rounded-full' >
                    <Image
                        alt="camsol-talent"
                        src={broTwo}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-500 rounded-full mt-24'>
                    <Image
                        alt="camsol-talent"
                        src={sis}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </div>
            <div className='flex items-center'>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}} className='w-32 h-32 bg-deluge-400 rounded-full' >
                    <Image
                        alt="camsol-talent"
                        src={bro}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className='w-32 h-32 bg-deluge-500 rounded-full mt-32'>
                    <Image
                        alt="camsol-talent"
                        src={Acha}
                        placeholder="blur"
                        width={400}
                        height={150}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </div>
        </div>)
}

export const WhatTalentsSay = () => {
    const [slideIdx, setslideIdx] = useState(0)
    const [featuredTalent, setFeaturedTalent] = useState(FEATURED_TALENTS[slideIdx])
    const goToNextTalent = useCallback(() => {
        if (slideIdx + 1 >= FEATURED_TALENTS.length) {
            setslideIdx(0)
        } else {
            setslideIdx(slideIdx + 1)
        }
        setFeaturedTalent(FEATURED_TALENTS[slideIdx])
    }, [slideIdx])


    useEffect(() => {
        const intervalId = setInterval(goToNextTalent, SLIDER_DELAY)
        return () => clearInterval(intervalId)
    }, [goToNextTalent])

    return (
        <section className='hidden sm:block pb-24 mt-6'>
            <FloatingTalentsSection />
            <div className='px-24 bg-white relative'>
                <h3 className="font-bold text-center relative text-3xl capitalize">what our happy{" "}
                    <span className="text-deluge-500 capitalize">talents say</span>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="w-full absolute inset-y-0 -left-4 flex items-end justify-end"
                    >
                        <div className="h-16 w-16  rounded-full bg-deluge-300 relative">
                            <div className="h-24 w-24 rounded-full bg-deluge-100 opacity-50 absolute  top-1/3 -left-16"></div>
                        </div>
                    </motion.div>
                </h3>
                <p className='text-center text-[#00000099]'>
                    Several selected Talents, who already believe in our service.
                </p>
                <div className='flex flex-row py-6 items-center justify-between'>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className='w-60  rounded-b-full mt-8'
                    >
                        <img
                            alt={featuredTalent?.name}
                            src={featuredTalent?.imgPath}
                            placeholder="blur"
                            className='w-full h-full z-50 rounded-b-full'
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="w-full flex items-end justify-end"
                        >
                            <div className="h-16 w-16  rounded-full bg-deluge-300 relative">
                                <div className="h-24 w-24 rounded-full bg-deluge-100 opacity-50 absolute  top-1/3 -left-16"></div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className='w-1/3'>
                        <h3 className="text-black mb-2 font-semibold">{featuredTalent?.name}</h3>
                        <p className='text-[#00000099] min-w-[360px] min-h-[24px]'>
                            {featuredTalent?.text}
                        </p>
                        <div className='w-full flex space-x-2 mt-4 items-center'>
                            {
                                Array.from({length: 5}, (v, idx) => (
                                    <span
                                        key={idx}
                                        className={classNames("h-4 rounded-full bg-deluge-500",
                                            idx === slideIdx ? 'w-8' : 'w-4'
                                        )} />
                                ))
                            }
                        </div>
                    </div>

                    <div className='hidden w-1/3 lg:flex items-center justify-center'>
                        <div
                            style={{
                                backgroundImage: `url(${carine.src})`,
                                backgroundRepeat: 'no-repeat'
                            }}
                            className="w-32 h-32  rounded-full relative">
                            <div className="w-16 h-16 absolute bg-green-400 rounded-full -top-24 right-1/6">
                                <Image
                                    alt="first"
                                    src={Simon}
                                    placeholder="blur"
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="w-12 h-12 absolute bg-yellow-400 rounded-full top-1/4 -right-3/4">
                                <img
                                    src="Nogran.png"
                                    className="z-30"
                                    alt=""
                                />
                            </div>
                            <div className="w-16 h-16 absolute bg-orange-100 rounded-full -top-1/2 -right-1/2">
                                <Image
                                    alt="third"
                                    src={broThree}
                                    placeholder="blur"
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="w-16 h-16 absolute bg-blue-400 rounded-full -bottom-12 -right-16">
                                <img
                                    src="person-three.png"
                                    className="z-30"
                                    alt=""
                                />
                            </div>
                            <div className="w-24 h-24 absolute bg-purple-400 rounded-full -bottom-28 -right-1/6">
                                <img
                                    src="Lucien.png"
                                    className="z-30"
                                    alt=""
                                />
                            </div>
                            <div className="w-16 h-16 absolute bg-red-200 rounded-full -bottom-8 -left-3/4">
                                <img
                                    src="person-one.png"
                                    alt=""
                                />
                            </div>
                            <div className="w-24 h-24 absolute bg-black rounded-full -top-8 -left-[85%]">
                                <img
                                    src="Person-four.png"
                                    className="z-30"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src="patterns.svg"
                    alt="background-svg-pattern"
                    width={200}
                    height={150}
                    className='absolute -bottom-32 left-3/4'
                />
                <Image
                    src="patterns.svg"
                    alt="background-svg-pattern"
                    width={200}
                    height={150}
                    className='absolute top-0 right-3/4'
                />
            </div>
        </section>

    )
}
