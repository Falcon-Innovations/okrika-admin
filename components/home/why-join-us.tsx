import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import {ChevronRight} from 'lucide-react';
import {CustomButton} from '../shared/CustomButton';
import CamsolSport from '../../public/sport.png'
import GroupSocials from '../../public/group-socials.png'
import GroupPicture from '../../public/group-picture.png'
import {motion} from 'framer-motion';

const WhyJoinUsMobile = () => {
    return (
        <section className='w-full sm:hidden flex px-2 sm:px-24 mt-10'>
            <div className='w-full'>
                <h3 className="text-2xl mb-4 font-bold capitalize">
                    Why{" "}
                    <span className="text-deluge-500">join</span>
                    {" "} us
                </h3>
                <ol className="relative border-l ml-2 border-black/20 px-1">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-500 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">
                            With Camsol social everyone is welcome to join and create an account.
                            You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                            you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                            and tasks, which can earn you points on the camsol leadership board
                        </h3>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-500 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">
                            With Camsol social everyone is welcome to join and create an account.
                            You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                            you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                            and tasks, which can earn you points on the camsol leadership board
                        </h3>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-deluge-500 rounded-full mt-1.5 -left-1.5"></div>
                        <h3 className="text-black">And for those who excel in their screening projects and tasks, we have a special reward in store: job offers
                            from Camsol. That &lsquo;s right, the top performers on the
                            leadership board will have the chance to join the
                            Camsol team and take their careers to the next level.</h3>
                    </li>
                </ol>
                <Link
                    href="/getting-started"
                >
                    <CustomButton
                        label='Register now'
                        iconAfter={<ChevronRight color="white" size={20} />}
                        classNames='my-8'
                    />
                </Link>
            </div>
        </section>
    )
}


export const WhyJoinUs = () => {

    return (
        <>
            <WhyJoinUsMobile />
            <section className='w-full sm:block hidden px-2 sm:px-24 mt-10'>
                <div className="w-full flex justify-end px-12">
                    <h3 className="text-2xl font-bold capitalize">
                        Why{" "}
                        <span className="text-deluge-500">join</span>
                        {" "} us
                    </h3>
                </div>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-4 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%]"></div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12 px-6">
                                <Image
                                    alt="Camsol sport"
                                    src={CamsolSport}
                                    placeholder="blur"
                                    width={390}
                                    height={200}
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="z-20 flex items-center order-1 bg-deluge-500 p-1 w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-white">1</h1>
                            </div>
                            <div className="order-1 relative  w-5/12 px-6">
                                <motion.div
                                    initial={{opacity: 0, scale: 0.5}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    viewport={{once: true}}
                                    className="w-full absolute -top-20 left-1/2 flex"
                                >
                                    <div className="h-16 w-16  rounded-full bg-deluge-300 relative">
                                    </div>
                                </motion.div>
                                <p className="text-black/60">
                                    With Camsol social everyone is welcome to join and create an account.
                                    You will be able to chat and post with your peers, as well access exclusive bootcamp resources to help
                                    you sharpen your skills. Plus you will have the opportunity to Participate in screening projects
                                    and tasks, which can earn you points on the camsol leadership board
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12">
                                <Image
                                    alt="Camsol social pictures"
                                    src={GroupSocials}
                                    placeholder="blur"
                                    width={450}
                                    height={200}
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="z-20 flex items-center order-1 bg-deluge-500 p-1  w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold">2</h1>
                            </div>
                            <div className="order-1 w-5/12 px-6">
                                <p className="text-black/60">
                                    But it &lsquo;s not just about individual achievement.
                                    At Camsol, we value collaboration and teamwork. That &lsquo;s why we&lsquo;ve implemented an employee recommendation system, where you can earn points on the leadership board by receiving recommendations from your colleagues.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full right-timeline">
                            <div className="order-1 relative w-5/12">
                                <motion.div
                                    initial={{opacity: 0, scale: 0.5}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    viewport={{once: true}}
                                    className="w-full absolute -top-20 left-[95%] flex"
                                >
                                    <div className="h-16 w-16  rounded-full bg-deluge-300 relative">
                                        <div className="h-24 w-24 rounded-full bg-deluge-100 opacity-50 absolute  top-1/3 -left-16"></div>
                                    </div>
                                </motion.div>
                                <Image
                                    alt="camsol group picture"
                                    src={GroupPicture}
                                    placeholder="blur"
                                    width={450}
                                    height={200}
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="z-20 flex items-center order-1 bg-deluge-500 p-1 w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-white">3</h1>
                            </div>
                            <div className="order-1 w-5/12 px-6">
                                <p className="text-black/60">
                                    And for those who excel in their screening projects and tasks, we have a special reward in store: job offers
                                    from Camsol. That &lsquo;s right, the top performers on the
                                    leadership board will have the chance to join the
                                    Camsol team and take their careers to the next level.
                                </p>
                                <Link
                                    href="/getting-started"
                                >
                                    <CustomButton
                                        label='Register now'
                                        classNames='mt-16 mb-8'
                                        iconAfter={<ChevronRight color="white" size={20} />}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
