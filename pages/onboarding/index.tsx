import React, {useState} from "react";
import Image from "next/image";
import {CustomButton} from "@/components/shared/CustomButton";
import cn from "classnames";
import Link from "next/link";
import {CustomInput} from "@/components/shared/CustomInput";
import LadyHavingAnIdea from "../../public/Lady-having-an-idea.png";
import {useRouter} from "next/router";
import {useWaitlistContext} from "contexts/waitlist";
import {useForm, useFieldArray} from "react-hook-form";
import {CustomSelect} from "@/components/shared/CustomSelect";
import CamsolLogo from "@/components/shared/CamsolLogo";


type FormData = {
  yearsOfExperience: string,
  language: string,
  primarySkill: string
};

const LANGUAGES = [
  {
    label: 'Preffered language',
    value: 'placeholder'
  },
  {
    label: 'English',
    value: 'English'
  },
  {
    label: 'German',
    value: 'German'
  },
  {
    label: 'French',
    value: 'French'
  },
]


const SKILLS = [
  {
    label: 'Main skill',
    value: 'placeholder'
  },
  {
    label: 'Frontend',
    value: 'Frontend'
  },
  {
    label: 'Backend',
    value: 'Backend'
  },
  {
    label: 'Data science',
    value: 'Data science'
  },
  {
    label: 'Artificial intelligence',
    value: 'Artificial intelligence'
  },
  {
    label: 'Full-stack',
    value: 'Full-stack'
  },
  {
    label: 'Devops',
    value: 'Devops'
  },
  {
    label: 'UI/UX',
    value: 'UI/UX'
  },
  {
    label: 'Product management',
    value: 'Product management'
  },
]


const Index = () => {
  const router = useRouter()
  const {dispatch, yearsOfExperience, language, primarySkill} = useWaitlistContext()
  const [selectedLang, setSelectedLang] = useState(language ?? LANGUAGES[0])
  const [selectedSkill, setSelectedSkill] = useState(primarySkill ?? SKILLS[0])
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      yearsOfExperience,
    }
  });

  const onSubmit = (data: FormData) => {
    dispatch({type: "update_years_of_exp", payload: data.yearsOfExperience})
    dispatch({type: "update_language", payload: selectedLang})
    dispatch({type: "update_primary_skill", payload: selectedSkill})
    router.push('/onboarding/connect')
  }
  return (
    <div className="w-full flex">
      <div className="w-full sm:w-2/3 pt-6 px-4 sm:pl-16 lg:pl-24">
        <nav className="flex capitalize items-baseline space-x-8">
          <CamsolLogo />
        </nav>
        <h1 className="capitalize mt-16 text-black font-bold text-4xl leading-9">Access our platform anywhere
          <br />    <span className="text-deluge-500 capitalize">anywhere</span>
        </h1>
        <p className="text-black/60 mt-4 mb-16">
          Please provide the necessary information <br /> to setup your profile!
        </p>
        <div className="w-full lg:w-[65%]">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 items-center justify-between">
            <CustomSelect
              name="skill"
              selected={selectedSkill}
              setSelected={setSelectedSkill}
              options={SKILLS}
            />
            <CustomInput
              registration={register("yearsOfExperience", {required: 'This is a required field', max: 30, min: 0})}
              type="number"
              placeholder="years of experience"
              error={errors.yearsOfExperience}
              classNames="w-1/2"
            />
            <CustomSelect
              name="language"
              selected={selectedLang}
              setSelected={setSelectedLang}
              options={LANGUAGES}
            />
            <div className="w-full flex space-x-2">
              <Link href="/getting-started" className='d-block w-full'>
                <CustomButton label="Back"
                  classNames='w-full'
                  variant='secondary'
                />
              </Link>
              <CustomButton
                type="submit"
                label="Next"
                classNames='w-full'
              />
            </div>
          </form>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 h-screen relative bg-deluge-100 -z-20 pt-6">
        <div className="flex cursor-pointer space-x-2 items-center justify-center">
          {
            Array.from({length: 4}, (v, idx) => (
              <span key={idx} className={cn("h-4 rounded-full",
                idx === 1 ? 'w-8 bg-deluge-500' : 'w-4 bg-deluge-200'
              )} />
            ))
          }
        </div>
        <div className="absolute -left-36 top-[20%] hidden lg:block">
          <div className="relative">
            <Image
              alt="lady-with-laptop"
              src={LadyHavingAnIdea}
              placeholder="blur"
              width={400}
              height={500}
              quality={100}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div className="flex items-center ml-4 justify-center mt-20">
          <Image
            src="rocket.svg"
            alt="play-icon"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
