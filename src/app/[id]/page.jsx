import DetailsCard from "../components/ui/DetailsCard";
import Header from "../components/Header/Header";
import { destinationService } from "../services/destinationService";

export default function DetailsPage({ params: { id } }) {
  const fetchData = async () => {
    try {
      const destination = await destinationService.getDestinationById(id);
      return destination;
    } catch (error) {
      throw error;
    }
  };

  const renderDetails = async () => {
    try {
      const destination = await fetchData();
      return <DetailsCard data={destination} />;
    } catch (error) {
      console.error('Error rendering details:', error);
      return <p>Error rendering details.</p>;
    }
  };

  return (
    <>
    <div className="hidden desktop:block">
      <Header />
    </div>
      {renderDetails()}
    </>
  );
}
