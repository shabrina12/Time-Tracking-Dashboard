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
        <div className={`${bgColor} relative xs:w-[90vw] md:w-[320px] xs:h-[200px] sm:h-[220px] md:h-[280px] text-white w-screen rounded-3xl`}>
            <div className='flex justify-end pr-4'>
                <Image src={icon} alt='icon work' className="h-[70px]" />
            </div>
            <div className='absolute xs:top-10 sm:top-12 bg-Dark-blue xs:h-[160px] sm:h-[180px] md:h-[240px] xs:w-[90vw] md:w-full xs:px-6 sm:px-10 xs:pt-8 rounded-3xl'>
                <div className='flex justify-between items-center xs:mb-4 sm:mb-8'>
                    <h1 className='font-medium text-xl'>{title}</h1>
                    <Image src={ellipsis} alt='icon' className="w-[35px] h-[10px]" />
                </div>
                <div className='flex xs:flex-row xs:justify-between xs:items-center md:items-start md:flex-col gap-4'>
                    <h1 className='font-light xs:text-4xl sm:text-5xl md:text-6xl'>{hours}</h1>
                    <p className='text-Pale-Blue'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
  }
  

export default Card