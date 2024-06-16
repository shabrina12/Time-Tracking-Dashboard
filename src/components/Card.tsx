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
        <div className={`${bgColor} relative container h-[280px] text-white xs:w-[300px] sm:w-[570px] md:w-[320px] rounded-3xl`}>
            <div className='flex justify-end pr-4'>
                <Image src={icon} alt='icon work' className="h-[70px]" />
            </div>
            <div className='absolute top-12 bg-Dark-blue h-[240px] xs:w-[300px] sm:w-[570px] md:w-full px-10 pt-12 rounded-3xl'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='font-medium text-xl'>{title}</h1>
                    <Image src={ellipsis} alt='icon' className="w-[35px] h-[10px]" />
                </div>
                <div className='flex xs:flex-row xs:justify-between xs:items-center md:items-start md:flex-col gap-4'>
                    <h1 className='font-light xs:text-5xl md:text-6xl'>{hours}</h1>
                    <p className='text-Pale-Blue'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
  }
  

export default Card