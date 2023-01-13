import Image from 'next/image'
import React from 'react'
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon
} from "@heroicons/react/24/outline"

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10'>
            <div className='relative flex items-center cursor-pointer h-10 my-auto'>
                <Image src="https://links.papareact.com/qd3"
                    alt="logo"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left' />
            </div>

            <div className='flex items-center rounded-full md:border-2 py-2 md:shadow-sm'>
                {/* <label htmlFor="search" className='visi'></label> */}
                <input id="search"
                    type='text'
                    placeholder='Start your search'
                    className='pl-5 outline-none bg-transparent flex-grow text-gray-600 placeholder-gray-400' />
                <MagnifyingGlassIcon
                    className='hidden md:inline-flex h-8 bg-red-400
                     text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex border-2 rounded-full p-2 space-x-2 items-center' >
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header