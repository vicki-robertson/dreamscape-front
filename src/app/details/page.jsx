"use client";


import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import DetailsCard from "../components/ui/DetailsCard";

export default function DetailsPage() {
  const [destinations, setDestinations] = useState([]);


  useEffect(() => {
    const fetchData = async (page) => {
      try {
        console.log('Fetching data for page:', page);
        const response = await axios.get(`http://localhost:8000/api/?page=${page}`);
        setDestinations(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <DetailsCard />
      </>
  );
}

