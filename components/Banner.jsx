import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src="https://links.papareact.com/0fm"
                className=''
                alt="banner"
                layout='fill'
                objectFit='cover' />
            <div className='absolute top-1/2 text-center w-full'>
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                <button className='bg-white px-10 
                py-4 shadow-md text-purple-500 my-3 font-bold
                rounded-full hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner