"use client";

import { useEffect, useState } from 'react';
import DetailsCard from "../components/ui/DetailsCard";

function DetailsPage() {
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const response = await fetch(`/api/destinations/${id}`); // Reemplaza 'id' con el ID correcto del destino
        if (!response.ok) {
          throw new Error('Failed to fetch destination data');
        }
        const data = await response.json();
        setDestinationData(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Obtén el ID del destino de la URL utilizando Next.js Router
    const { query: { id } } = useRouter();

    // Llama a fetchDestinationData solo si hay un ID válido en la URL
    if (id) {
      fetchDestinationData();
    }
  }, []);

  return (
    <>
      {destinationData && <DetailsCard data={destinationData} />}
    </>
  );
}

export default DetailsPage;


