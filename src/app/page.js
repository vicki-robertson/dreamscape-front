"use client"

import Header from '../app/components/Header/Header';
import PaginationButtons from './components/ui/PaginationButtons';
import PhotoCard from './components/ui/PhotoCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
const [destinations, setDestinations] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        console.log('Fetching data for page:', page);
        const response = await axios.get(`http://localhost:8000/api/?page=${page}`);
        setDestinations(response.data.data);
        setTotalPages(response.data.last_page);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    console.log('Changing to page:', page);
    setCurrentPage(page);
  };
  console.log('Destinations:', destinations);

  return (
    <>
      <Header/>
      <article className="flex justify-center items-center flex-col h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
          {destinations.map((destination, index) => (
            <div key={index} className="flex justify-center">
              <PhotoCard data={destination} />
            </div>
          ))}
        </div>
        <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </article>
    </>
  )
}
 
