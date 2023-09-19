import React from 'react'
import Image from "next/image";
import cn from 'classnames';
import Link from 'next/link';
import {CustomButton} from '@/components/shared/CustomButton';
import {CustomInput} from '@/components/shared/CustomInput';
import {CustomLink} from '@/components/shared/CustomLink';
import {CustomCheckbox} from '@/components/shared/CustomCheckbox';
import LadyWithLaptop from '../public/lady-with-laptop.png';
import GoogleLogo from '../public/google.png'




const Login = () => {
    return (
        <div className="w-full flex">
            <div className="w-2/3 pt-6 pl-24">
                <nav className="flex capitalize items-baseline space-x-8">
                    <Link href="/" className="cursor-pointer flex items-baseline space-x-1 font-extrabold text-xl list-none text-black">
                        <Image
                            src="camsol-logo.svg"
                            alt="camsol-logo"
                            width={35}
                            height={35}
                        />
                        <p className="relative">
                            Camsol
                            <span className="text-deluge-400 text-xs absolute -right-6 -bottom-2">Beta</span>
                        </p>
                    </Link>
                </nav>
                <h1 className="capitalize mt-8 text-black font-bold text-4xl leading-[50px]">Empowering people through
                    <br />    <span className="text-deluge-600 capitalize">technology</span>
                </h1>
                <p className="text-black/8 mt-2 mb-4">
                    Dont have an account yet? <CustomLink to="/getting-started">Register</CustomLink>
                </p>
                <div className="w-[65%]">
                    <div className="w-full flex flex-col gap-4 items-center justify-between">
                        <CustomInput placeholder="Email" type="email" autoFocus />
                        <CustomInput placeholder="Password" />
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <CustomCheckbox
                                    name="remember-me"
                                    id="remember-me"
                                />
                                <p>Remember me</p>
                            </div>
                            <CustomLink to="#">
                                Forgot password?
                            </CustomLink>
                        </div>
                        <CustomButton label="Login"
                            classNames='w-full'
                        />
                        <CustomButton label="continue with google"
                            variant='secondary'
                            classNames='w-full'
                            iconBefore={
                                <Image
                                    alt="google-logo"
                                    src={GoogleLogo}
                                    placeholder="blur"
                                    width={20}
                                    height={20}
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className='mr-4'
                                />
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <CustomCheckbox
                        name="privacy-policy"
                        id="privacy-policy"
                    />
                    <p>I agree to the Camsol&lsquo;s <span className='text-deluge-400 cursor-pointer underline'>terms & conditions </span>
                        and their <span className="text-deluge-400 cursor-pointer underline">
                            privacy policy
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-1/3 h-screen relative bg-deluge-100 -z-20 pt-6">
                <div className="flex cursor-pointer invisible space-x-2 items-center justify-center">
                    {
                        Array.from({length: 4}, (v, idx) => (
                            <span key={idx} className={cn("h-4 rounded-full",
                                idx === 0 ? 'w-8 bg-deluge-600' : 'w-4 bg-deluge-200'
                            )} />
                        ))
                    }
                </div>
                <div className="absolute -left-28 top-1/5">
                    <div className="relative">
                        <Image
                            alt="lady-with-laptop"
                            src={LadyWithLaptop}
                            placeholder="blur"
                            width={300}
                            height={150}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                        <div className="w-72 h-72 absolute top-1/2 -left-16 -z-10 rounded-full bg-deluge-300"></div>
                    </div>
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
    )
}

export default Login