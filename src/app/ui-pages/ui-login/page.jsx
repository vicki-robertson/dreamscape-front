import Header from "@/app/components/Header/Header";
import NavbarMobile from "@/app/components/Header/NavbarMobile";
import PhotoCard from "@/app/components/ui/PhotoCard";

function TestPage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
        {[...Array(8).keys()].map((index) => (
          <div key={index} className="flex justify-center">
            <PhotoCard />
          </div>
        ))}
      </div>
    </>
  );
}

export default TestPage;
