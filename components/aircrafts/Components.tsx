import React from 'react'
import air from '../../assets/images/aircomponents.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function Components() {
  const t=useTranslations("aircraft.components")
  return (
    <div className=''>
        <div className='container mx-auto py-10 sm:py-14 '>
            <p className='uppercase text-sm font-bold text-center text-[#0129A4] py-3'>{t('title')}</p>
            <p className='text-xl sm:text-3xl text-gray-700 text-center font-bold'>{t('sub')}</p>
            <p className='text-sm text-gray-500 text-center py-3'>{t('desc')}</p>

            <div className="flex items-center justify-center mt-10">
                <Image src={air} alt="" className="w-[80%] h-[80%]" />
            </div>
        </div>
    </div>
  )
}

export default Components