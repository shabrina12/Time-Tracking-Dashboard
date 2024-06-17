import React from 'react'
import Image from 'next/image'
import profile from '../../public/images/image-jeremy.png'

const Profile = () => {
  return (
    <div className='rounded-3xl bg-Dark-blue h-full text-white xs:w-[90vw] md:w-[700px] lg:w-[300px]'>
        <div className='bg-Blue xs:h-fit lg:h-[420px] px-10 xs:py-8 lg:py-0 lg:pt-12 rounded-3xl flex xs:flex-row xs:items-center lg:items-start lg:flex-col gap-8'>
            <div className='rounded-full bg-white p-1 w-fit h-fit'>
                <Image src={profile} alt='profile' width={100} />
            </div>        
            <div className='h-full'>
                <p className='text-Pale-Blue'>Report for</p>
                <h1 className='xs:text-2xl sm:text-4xl md:text-5xl font-light md:leading-snug'>Jeremy Robson</h1>
            </div>
        </div>
        <div className='xs:h-fit lg:h-[200px] p-10'>
            <ul className='flex xs:flex-row justify-between lg:flex-col gap-4 text-Pale-Blue'>
                <li className='text-lg hover:cursor-pointer hover:text-white'>Daily</li>
                <li className='text-lg hover:cursor-pointer hover:text-white'>Weekly</li>
                <li className='text-lg hover:cursor-pointer hover:text-white'>Monthly</li>
            </ul>
        </div>
    </div>
  )
}

export default Profile