// "use client";

import DetailsCard from "../components/ui/DetailsCard";
import Header from "../components/Header/Header"; 
 
import { getDestinationById } from "../services/destinations";

export default async function DetailsPage({params: {id}}) {
  console.log(id,"id");
  const destination = await getDestinationById(id)
  console.log(destination,"detailcard");

  return (
    <>
      <Header /> 
      <DetailsCard destination={destination} />
    </>
  );
}

