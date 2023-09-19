/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';


const CamsolLogo = () => {
    return (
        <Link href='/' className="cursor-pointer flex items-center space-x-1 font-extrabold text-xl list-none text-black">
            <img
                src="/camsol-logo.svg"
                alt="camsol-logo"
                width={48}
                height={48}
            />
            <div>
                <h1 className="font-extrabold text-2xl">
                    Camsol
                </h1>
                <p className="text-deluge-700 text-xs">
                    Platform
                </p>
            </div>
        </Link>
    )
}

export default CamsolLogo