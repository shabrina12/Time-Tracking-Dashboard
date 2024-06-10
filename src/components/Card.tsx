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
        <div className={`${bgColor} relative container text-white h-full w-[400px] rounded-3xl`}>
            <div className='h-1/5 rounded-t-lg flex justify-end pr-4'>
                <Image src={icon} alt='icon work' />
            </div>
            <div className='absolute top-12 bg-Very-dark-blue w-full p-8 rounded-3xl'>
                <div className='flex justify-between mb-8'>
                    <h1 className='text-xl'>{title}</h1>
                    <Image src={ellipsis} alt='icon' height={5} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl'>{hours}</h1>
                    <p className='text-Pale-Blue'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
  }
  

export default Card