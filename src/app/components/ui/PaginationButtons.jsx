import React, { useState, useEffect } from 'react';
import prevButton from '../../../../public/assets/icons/Previous-button.svg';
import nextButton from '../../../../public/assets/icons/Next-button.svg';
import Image from 'next/image';

export default function PaginationButtons({ currentPage, totalPages, onPageChange }) {

    const fetchData = async (page) => {
        try {
            const apiUrl = `http://localhost:8000/api/destinations?page=${page}`;
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000',
                },
            });
            const data = await response.json();

            setTotalPages(data.last_page);
            setCurrentPage(data.current_page);
            // Puedes manejar otros datos según sea necesario
        } catch (error) {
            console.error('Error fetching data:', error);
            // Manejo de errores
        }
    };

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
