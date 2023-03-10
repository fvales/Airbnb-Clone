import Image from 'next/image'
import React from 'react'

const LargeCard = ({ title, description, img, buttonText }) => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} alt={title} objectFit="cover" layout='fill' className='rounded-2xl' />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl w-64 mb-3'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard