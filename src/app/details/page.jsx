"use client";

import DetailsCard from "../components/ui/DetailsCard";
import Header from "../components/Header/Header"; 
import { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../services/index"; 

export default function DetailsPage() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        console.log('Fetching data for page:', page);
        const response = await axios.get(`${API_ENDPOINT}/api/`);
        setDestinations(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data'); 
      }
    };

  
    fetchData();
    return () => {
      
    };
  }, []); 
  return (
    <>
      <Header /> 
      <DetailsCard data={destination} />
    </>
  );
}

