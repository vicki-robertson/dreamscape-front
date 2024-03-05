"use client"
import Header from './components/Header/Header';
import PhotoCard from './components/ui/PhotoCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/');
        setDestinos(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <article className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
          {destinos.map((destino, index) => (
            <div key={index} className="flex justify-center">
              <PhotoCard data={destino} />
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
 
