import Image from 'next/image'
import React from 'react'

const SmallCard = ({ image, location, distance }) => {
    return (
        <div className='flex items-center space-x-4 m-2 mt-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-500  ease-out'>
            <div className='relative h-16 w-16'>
                <Image src={image} alt={location} width='' layout='fill' className='rounded-lg' />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard