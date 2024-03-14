"use client";

import Header from "./components/Header/Header";
import PhotoCard from "./components/ui/PhotoCard";
import { useState, useEffect } from "react";
import PaginationButtons from "./components/ui/PaginationButtons";
import { destinationService } from "./services/destinationService";
import Spinner from "./components/ui/Spinner";


export default function Page() {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userDestinations, setUserDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true); 
        const data = await destinationService.getDestinationsByPage(page);
        setDestinations(data.data);
        setTotalPages(data.last_page);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const token = localStorage.getItem("auth_token"); 
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchUserDestinations = async () => {
      try {
        const userToken = localStorage.getItem("auth_token");
        const response = await destinationService.getUserDestinations(userToken);
        setUserDestinations(response.data);
      } catch (error) {
        console.error('Error fetching user destinations:', error);
      }
    };

    if (isLoggedIn) {
      fetchUserDestinations();
    }
  }, [isLoggedIn]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = async (searchTerm) => {
    setSearchInput(searchTerm);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      try {
        const response = await destinationService.searchDestinations(searchTerm);
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
        {loading ? (
          <Spinner /> 
        ) : (
          <>
            <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
              {searchInput !== "" && searchResults.length === 0 ? (
                <p className="text-blue">{error}</p>
              ) : (
                (searchInput === "" ? destinations : searchResults).map(
                  (destination, index) => (
                    <div key={index} className="flex justify-center">
                      <PhotoCard
                        data={destination}
                        isLoggedIn={isLoggedIn}
                        userDestinations={userDestinations}
                      />
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
          </>
        )}
      </article>
    </>
  );
}