import React from 'react'
import Image from 'next/image'
import types from '../../assets/images/planetypes.png'
import { useTranslations } from 'next-intl'

function Airplanes() {

  const t= useTranslations('aircraft.types')

  return (
    <div className=''>
        <div className='container mx-auto py-10 px-3 sm:px-1 sm:py-14 '>
            <p className='uppercase text-sm font-bold text-left text-[#0129A4] py-3'>{t(`badge`)}</p>
            <p className='text-xl sm:text-3xl text-gray-700 text-left max-w-lg font-bold'>{t(`title`)}</p>
            <p className='text-sm text-gray-500 text-left py-3 max-w-lg'>{t(`sub`)}</p>

            <div className="flex items-center justify-center mt-10">
                <Image src={types} alt="" className="w-[100%] h-[80%]" />
            </div>
        </div>
    </div>
  )
}

export default Airplanes