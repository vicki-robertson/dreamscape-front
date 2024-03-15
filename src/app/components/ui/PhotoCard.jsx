import Image from "next/image";
import Link from 'next/link';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import QuestionMark from "../../../../public/assets/icons/Info-icon.svg";
import { useState } from "react";

function PhotoCard({ data, isLoggedIn, userDestinations, onDelete }) {
  const isUserDestination = userDestinations.some(dest => dest.id === data.id);

  const handleDeleteDestination = (destinationId) => {
    const updatedDestinations = destinations.filter(dest => dest.id !== destinationId);
    setDestinations(updatedDestinations);
  };

  return (
    <article className="h-[373px] w-[285px] relative">
      <div className="overflow-hidden w-[285px] h-[300px]">
        {isLoggedIn && (
          <Image
            className="absolute right-3 top-2 z-30"
            src={QuestionMark}
            width={48}
            height={48}
            alt={"signo de interrogación"}
          />
        )}
        <Link href={`/${data.id}`}>
          <Image
            className="rounded-2xl left-0 top-0 absolute z-20 h-[75%] object-cover"
            src={data.image}
            width={285}
            height={300}
            alt={data.name}
          />
        </Link>
      </div>
      <div className="flex h-[100px] w-[285px] top-[260px] bg-light-yellow rounded-br-[20px] rounded-bl-[20px] absolute p-6 justify-between">
        <div className="flex flex-col w-3/4" >
          <span className="h-11 w-[207px] text-m font-bold text-blue">
            {data.name}
          </span>
          <span className="h-11 w-[207px] text-s text-blue">
            {data.location}
          </span>
        </div>
        {isLoggedIn && (
          <div className="flex h-[100%] w-1/4 gap-2" >
            <Link href={`/${data.id}`} className="flex items-center">
              <EditButton destinationId={data.id} />
            </Link>
            <DeleteButton destinationId={data.id} onDelete={onDelete} />
          </div>
        )}
      </div>
    </article>
  );
}

export default PhotoCard;