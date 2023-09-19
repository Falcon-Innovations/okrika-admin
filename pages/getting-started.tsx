import React, {useState} from 'react'
import Image from "next/image";
import {useForm} from "react-hook-form";
import {CustomButton} from '@/components/shared/CustomButton';
import cn from 'classnames';
import {CustomInput} from '@/components/shared/CustomInput';
import {CustomCheckbox} from '@/components/shared/CustomCheckbox';
import GuyWithLaptop from '../public/dude.png';
import GoogleLogo from '../public/google.png'
import {CustomSelect} from '@/components/shared/CustomSelect';
import {useRouter} from 'next/router';
import {useWaitlistContext} from 'contexts/waitlist';
import CamsolLogo from '@/components/shared/CamsolLogo';
import { authApis } from 'api/service/auth';


const COUNTRIES = [
  {
    label: 'Select your country',
    value: 'placeholder'
  },
  {
    label: 'Cameroon',
    value: 'Cameroon'
  },
  {
    label: 'Germany',
    value: 'Germany'
  },
  {
    label: 'Nigeria',
    value: 'Nigeria'
  },
  {
    label: 'Ghana',
    value: 'Ghana'
  },
  {
    label: 'Mexico',
    value: 'Mexico'
  },
  {
    label: 'Japan',
    value: 'Japan'
  },
  {
    label: 'Spain',
    value: 'Spain'
  },
  {
    label: 'Monaco',
    value: 'Monaco'
  },
  {
    label: 'Gibraltar',
    value: 'Gibraltar'
  }
]

type FormData = {
  firstName: string;
  lastName: string;
  email: string,
  privacyAccepted: boolean
};


const GettingStarted = () => {
  const router = useRouter()
  const {dispatch, firstName, lastName, email, country} = useWaitlistContext()
  const [selectedCountry, setSelectedCountry] = useState(country ?? COUNTRIES[0])
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      firstName,
      lastName,
      email,
      privacyAccepted: true
    }
  });
  const onSubmit = (data: FormData) => {
    authApis.signup(data).then(res => {
      console.log('Auth response', res.data);
    })
    dispatch({type: "update_first_name", payload: data.firstName})
    dispatch({type: "update_last_name", payload: data.lastName})
    dispatch({type: "update_email", payload: data.email})
    dispatch({type: "update_country", payload: selectedCountry})
    router.push('/onboarding')
  }

  return (
    <div className="w-full flex">
      <div className="w-full sm:w-2/3 pt-6 px-4 sm:pl-16 lg:pl-24">
        <nav className="flex capitalize items-baseline space-x-8">
          <CamsolLogo />
        </nav>
        <h1 className="capitalize mt-16 text-black font-bold text-3xl lg:text-4xl leading-9">Empowering people through
          <br />    <span className="text-deluge-500 capitalize">technology</span>
        </h1>
        <p className="text-black/60 mt-4 mb-16">
          Please provide the necessary information <br /> to get started!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[65%]">
          <div className="w-full flex flex-col gap-4 items-center justify-between">
            <div className="w-full flex space-x-2">
              <CustomInput
                placeholder='First Name'
                error={errors?.firstName}
                autoFocus
                registration={register("firstName", {required: "This is a required field", maxLength: 20})} />
              <CustomInput
                placeholder='Last Name'
                error={errors['lastName']}
                registration={register("lastName", {required: "This is a required field", maxLength: 20})} />
            </div>
            <CustomInput
              placeholder="Email"
              registration={register("email", {required: "This is a required field"})}
              type="email"
              error={errors.email}
            />
            <CustomSelect
              name="Country"
              selected={selectedCountry}
              setSelected={setSelectedCountry}
              options={COUNTRIES}
            />
            <CustomButton label="Get started"
              classNames='w-full'
              type="submit"
            />
            <CustomButton label="continue with google"
              variant='secondary'
              classNames='w-full hidden'
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
          <div className="flex items-center space-x-4 mt-4">
            <CustomCheckbox registration={register("privacyAccepted", {required: true})} />
            <p>I agree to the Camsol&lsquo;s <span className='text-deluge-500 cursor-pointer underline'>terms & conditions </span>
              and their <span className="text-deluge-500 cursor-pointer underline">
                privacy policy
              </span>
            </p>
          </div>
        </form>
      </div>
      <div className="hidden sm:block sm:w-1/3 h-screen relative bg-deluge-100 -z-20 pt-6">
        <div className="flex cursor-pointer space-x-2 items-center justify-center">
          {
            Array.from({length: 4}, (v, idx) => (
              <span key={idx} className={cn("h-4 rounded-full",
                idx === 0 ? 'w-8 bg-deluge-500' : 'w-4 bg-deluge-200'
              )} />
            ))
          }
        </div>
        <div className="absolute -left-52 top-[22%] hidden lg:block">
          <div className="relative">
            <Image
              alt="guy-with-laptop"
              src={GuyWithLaptop}
              placeholder="blur"
              width={500}
              height={150}
              quality={100}
              style={{
                objectFit: 'cover',
              }}
            />
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

export default GettingStarted