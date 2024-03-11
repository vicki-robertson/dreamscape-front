"use client";

import Header from "./components/Header/Header";
import PhotoCard from "./components/ui/PhotoCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationButtons from './components/ui/PaginationButtons';
import useSWRInfinite from 'swr/infinite';

export default function Page() {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const isMobile = window.innerWidth <= 1000;

  const getKey = (pageIndex, previousPageData) => {
    return isMobile ? `http://localhost:8000/api/?page=${pageIndex + 1}` : null;
  };

  const { data, error: swrError, size, setSize } = useSWRInfinite(getKey);

  useEffect(() => {
    if (!isMobile) {
      setSize(1);
    }
  }, [isMobile, setSize]);

  const fetchData = async (page) => {
    try {
      console.log('Fetching data for page:', page);
      const response = await axios.get(`http://localhost:8000/api/?page=${page}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadMoreData = async () => {
      const newDestinations = await fetchData(size);
      setDestinations((prevDestinations) => [...prevDestinations, ...newDestinations]);
    };

    if (isMobile && size > 1) {
      loadMoreData();
    } else {
      setDestinations([]);
      loadMoreData();
    }
  }, [size, isMobile]);

  useEffect(() => {
    const initialData = async () => {
      const newDestinations = await fetchData(currentPage);
      setDestinations(newDestinations);
      const response = await axios.get(`http://localhost:8000/api/?page=${currentPage}`);
      setTotalPages(response.data.last_page);
    };

    initialData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    console.log('Changing to page:', page);
    setCurrentPage(page);
  };

  const swrErrorMessage = swrError ? swrError.message : "";

  const handleSearch = async (searchTerm) => {
    setSearchInput(searchTerm);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      try {
        const response = await axios.get(`http://localhost:8000/api/search?search=${searchTerm}`);
        setSearchResults(response.data);
        setError("");
      } catch (error) {
        setSearchResults([]);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} showSearchBar={true} />
      <article className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
          {searchInput !== "" && searchResults.length === 0 ? (
            <p className="text-blue">{error || swrErrorMessage}</p>
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
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </article>
    </>
  );
}
