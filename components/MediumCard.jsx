import Image from 'next/image'
import React from 'react'

const MediumCard = ({ img, title }) => {
    return (
        <div className='cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-500  ease-out'>
            <div className='relative w-80 h-80'>
                <Image src={img} alt={title} objectFit='contain' layout='fill' className='rounded-xl' />
            </div>
            <h3 className='text-xl mt-3'>{title}</h3>
        </div >
    )
}

export default MediumCard