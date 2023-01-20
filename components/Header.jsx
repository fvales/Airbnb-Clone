import Image from 'next/image'
import React, { useState } from 'react'
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon
} from "@heroicons/react/24/outline"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Header = () => {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuests, setNumOfGuests] = useState(1)

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

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
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
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

            {
                searchInput && <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>
                            Number of Guests
                        </h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={numOfGuests}
                            onChange={(event) => setNumOfGuests(event.target.value)}
                            min={1}
                            type="number"
                            className='w-12 pl-2 text-lg outline-none text-red-400' />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500' onClick={resetInput}>Cancel</button>
                        <button className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header