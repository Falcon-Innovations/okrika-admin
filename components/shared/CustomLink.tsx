import React from 'react'
import Link from 'next/link'

type CustomLinkProps = {
    to: string,
    children: React.ReactNode
}

export const CustomLink = ({to, children}: CustomLinkProps) => {
    return (
        <Link href={to}>
            <span className="text-deluge-400 cursor-pointer underline">
                {children}
            </span>
        </Link>
    )
}
