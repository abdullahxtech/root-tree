"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
    const [openHamburger, setopenHamburger] = useState(false)

    return (
        <header>
            <nav className='md:w-[95vw] w-[90vw] z-30 md:h-19 h-17 bg-white fixed top-10 right-[5vw] md:right-[2vw] px-7 py-5 rounded-full flex items-center justify-between'>
                {/* logo and navigation */}
                <div className="flex gap-15 items-center">
                    <Link href={"/"} className='hidden md:flex'>
                        <img className='h-6' src="/logo.svg" alt="logo" />
                    </Link>

                    <Link href={"/"} className='md:hidden flex'>
                        <img className='md:h-9 h-7' src="/logo_symbol.svg" alt="logo" />
                    </Link>

                    <div className='md:flex hidden gap-4 items-center justify-center text-sm font-semibold text-[#1E2330]'>
                        <Link href={"/"} className='hover:bg-slate-100 p-2 rounded-xl'>Products</Link>
                        <Link href={"/"} className='hover:bg-slate-100 p-2 rounded-xl'>Templates</Link>
                        <Link href={"/"} className='hover:bg-slate-100 p-2 rounded-xl'>Marketplace</Link>
                        <Link href={"/"} className='hover:bg-slate-100 p-2 rounded-xl'>Learn</Link>
                        <Link href={"/"} className='hover:bg-slate-100 p-2 rounded-xl'>Pricing</Link>
                    </div>
                </div>

                <div className='flex gap-3 items-center w-fit h-fit'>
                    {/* Login and Signup Link */}
                    <SignedOut>
                        <SignInButton>
                            <button className='text-sm bg-slate-200 font-bold md:px-4 px-1 py-3 rounded-md'>Log in</button>
                        </SignInButton>
                        <SignUpButton>
                            <button className='text-sm bg-black text-white font-bold md:px-4 px-1 py-3 rounded-md'>Sign up free</button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    {/* Hamburger for mobile */}
                    <button className='text-3xl md:hidden' onClick={() => { setopenHamburger(!openHamburger) }}>{openHamburger ? <IoCloseSharp className='bg-[#d2e823] rounded-full'/> : <GiHamburgerMenu />}</button>
                </div>
            </nav>

            {/* mobile navigation links to pages */}
            <div className={`md:hidden h-screen z-20 w-full flex bg-white flex-col gap-8 items-center justify-center text-[17px] font-semibold fixed top-0 right-0 transition-transform duration-300 ease-in-out ${openHamburger ? "" : "translate-x-full"}`}>
                <Link href={"/"} onClick={() => setopenHamburger(false)} className='hover:bg-slate-100 p-2 rounded-xl'>Products</Link>
                <Link href={"/"} onClick={() => setopenHamburger(false)} className='hover:bg-slate-100 p-2 rounded-xl'>Templates</Link>
                <Link href={"/"} onClick={() => setopenHamburger(false)} className='hover:bg-slate-100 p-2 rounded-xl'>Marketplace</Link>
                <Link href={"/"} onClick={() => setopenHamburger(false)} className='hover:bg-slate-100 p-2 rounded-xl'>Learn</Link>
                <Link href={"/"} onClick={() => setopenHamburger(false)} className='hover:bg-slate-100 p-2 rounded-xl'>Pricing</Link>
            </div>
        </header>
    )
}

export default Navbar
