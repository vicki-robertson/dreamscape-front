import React from 'react';
import prevButton from '../../../../public/assets/icons/Previous-button.svg';
import nextButton from '../../../../public/assets/icons/Next-button.svg';
import Image from 'next/image';

export default function PaginationButtons({ currentPage, totalPages, onPageChange }) {

    const handlePrevPage = () => {
        console.log('Going to previous page');
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        console.log('Going to next page');
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='desktop:flex flex-row gap-6 items-center mb-4 mobile:hidden'>
            <a onClick={handlePrevPage} disabled={currentPage === 1}>
                <Image
                    src={prevButton}
                    alt="previous page"
                    height={40}
                    
                    width={60}
                />
            </a>
            <p className='text-m text-blue font-bold'>{currentPage}</p>
            <a onClick={handleNextPage} disabled={currentPage === totalPages}>
                <Image
                    src={nextButton}
                    alt="next page"
                    height={40}
                    width={60}
                />
            </a>
        </div>
    );
}