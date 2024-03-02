import Header from "@/app/components/Header/Header";
import PhotoCard from "@/app/components/ui/PhotoCard";

function TestPage() {
  return (
    <>
      <Header />
      <article className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 gap-y-6 my-6 desktop:mx-16">
          {[...Array(8).keys()].map((index) => (
            <div key={index} className="flex justify-center">
              <PhotoCard />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default TestPage;
