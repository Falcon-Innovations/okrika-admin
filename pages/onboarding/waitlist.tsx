import React from "react";
import Image from "next/image";
import {CustomButton} from "@/components/shared/CustomButton";
import cn from "classnames";
import Link from "next/link";
import LadyWithKaba from "../../public/lady-with-kaba.png";
import CamsolLogo from "@/components/shared/CamsolLogo";

const WaitList = () => {
  return (
    <div className="flex w-full">
      <div className="w-full sm:w-2/3 pt-6 px-4 lg:pl-24">
        <nav className="flex items-baseline space-x-8 capitalize">
          <CamsolLogo />
        </nav>
        <h1 className="mt-16 text-4xl font-bold capitalize leading-[50px] text-black lg:leading-[35px]">
          Congratulations ✨
        </h1>
        <h2 className="my-6 text-xl font-medium  capitalize text-black">
          You have just taken the leap to propel <br />
          your career further!
        </h2>
        <p className="text-black/60 mb-4 text-[18px]">
          You are on the waiting list to our closed beta now. We will get back
          to <br /> you as soon as possible
        </p>
        <div className="w-[65%] lg:w-[100%]">
          <div className="mt-40 flex w-full flex-col items-center justify-between gap-4">
            <Link href="/" className="d-block w-full">
              <CustomButton
                label="Go back home"
                classNames="w-full lg:w-[65%]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden sm:block -z-20 h-screen sm:w-1/3 bg-deluge-100 pt-6">
        <div className="flex cursor-pointer items-center justify-center space-x-2">
          {Array.from({length: 4}, (v, idx) => (
            <span
              key={idx}
              className={cn(
                "h-4 rounded-full",
                idx === 3 ? "w-8 bg-deluge-500" : "w-4 bg-deluge-200",
              )}
            />
          ))}
        </div>
        <div className="absolute -left-56 top-[20%] hidden lg:block">
          <div className="relative">
            <Image
              alt="lady-with-laptop"
              src={LadyWithKaba}
              placeholder="blur"
              width={500}
              height={500}
              quality={100}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="mt mt-20 flex items-center justify-center">
          <Image src="/rocket.svg" alt="play-icon" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default WaitList;
