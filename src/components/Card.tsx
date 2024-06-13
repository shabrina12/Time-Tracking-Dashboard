import React from 'react'
import Image from 'next/image'
import ellipsis from '../../public/images/icon-ellipsis.svg'

type CardProps = {
    title: string;
    hours: string;
    subtitle: string;
    bgColor: string;
    icon: string;
}

const Card = ({title, hours, subtitle, bgColor, icon} : CardProps) => {
    return (
        <div className={`${bgColor} relative xs:mb-40 md:mb-0 container text-white h-full w-[400px] rounded-t-3xl`}>
            <div className='rounded-t-lg flex justify-end pr-4'>
                <Image src={icon} alt='icon work' className="h-[70px]" />
            </div>
            <div className='absolute top-12 bg-Dark-blue w-full px-10 py-12 rounded-3xl'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-xl'>{title}</h1>
                    <Image src={ellipsis} alt='icon' className="w-[35px] h-[10px]" />
                </div>
                <div className='flex xs:flex-row xs:justify-between xs:items-center md:items-start md:flex-col gap-4'>
                    <h1 className='text-5xl'>{hours}</h1>
                    <p className='text-Pale-Blue'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
  }
  

export default Card