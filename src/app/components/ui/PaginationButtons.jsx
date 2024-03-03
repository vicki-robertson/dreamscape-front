import React from 'react'
import prevButton from '../../../../public/assets/icons/Previous-button.svg';
import nextButton from '../../../../public/assets/icons/Next-button.svg';
import Image from 'next/image';

export default function PaginationButtons() {
  return (
    <div className='flex flex-row gap-6 items-center'>
        <a>
            <Image 
                src={prevButton}
                alt="previous page"
                height={40}
                width={60}
            />      
        </a>
        <p className='text-m text-blue font-bold'>1</p>
        <a>
            <Image 
                src={nextButton}
                alt="next page"
                height={40}
                width={60}
            />      
        </a>
    </div>
  )
}
