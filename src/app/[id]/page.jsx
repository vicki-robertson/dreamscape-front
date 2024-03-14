import DetailsCard from "../components/ui/DetailsCard";
import Header from "../components/Header/Header";
import { destinationService } from "../services/destinationService";

export default function DetailsPage({ params: { id } }) {
  const fetchData = async () => {
    try {
      console.log('Fetching data for detail:');
      const destination = await destinationService.getDestinationById(id);
      console.log(destination, "detailcard");
      return destination;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const renderDetails = async () => {
    try {
      const destination = await fetchData();
      return <DetailsCard data={destination} />;
    } catch (error) {
      console.error('Error rendering details:', error);
      // Handle error rendering details here
      return <p>Error rendering details.</p>;
    }
  };

  return (
    <>
      <Header />
      {renderDetails()}
    </>
  );
}
