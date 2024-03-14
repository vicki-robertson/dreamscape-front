// "use client";

import DetailsCard from "../components/ui/DetailsCard";
import Header from "../components/Header/Header"; 
import { destinationService, getDestinationById } from "../services/destinationService";

export default async function DetailsPage({params: {id}}) {

  
  try {
    console.log('Fetching data for detail:');
    const response = await destinationService.getDestinationById(id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  console.log(id,"id");
  const destination = await getDestinationById(id)
  console.log(destination,"detailcard");

  return (
    <>
      <Header /> 
      {destination && <DetailsCard data={destination} />}
    </>
  );
}

