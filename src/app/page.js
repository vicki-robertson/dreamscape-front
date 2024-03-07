"use client";

import Header from "./components/Header/Header";
import PhotoCard from "./components/ui/PhotoCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/");
      setDestinations(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (searchTerm) => {
    setSearchInput(searchTerm);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      try {
        const response = await axios.get(`http://localhost:8000/api/search?search=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching:', error);
        setSearchResults([]);
      }
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} showSearchBar={true}/>
      <article className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
          {searchInput !== "" && searchResults.length === 0 ? (
            <p>No hay destinos relacionados</p>
          ) : (
            (searchInput === "" ? destinations : searchResults).map(
              (destination, index) => (
                <div key={index} className="flex justify-center">
                  <PhotoCard data={destination} />
                </div>
              )
            )
          )}
        </div>
      </article>
    </>
  );
}
