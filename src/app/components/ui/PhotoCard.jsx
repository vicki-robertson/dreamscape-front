"use client";
import Image from "next/image";
import Link from "next/link";

function PhotoCard({ data }) {
  const{id,name,location,image}=data
  return (
    <article className="h-[373px] w-[285px] relative">
      <div className="overflow-hidden w-[285px] h-[300px]">
        <Link href={`/${id}`}>
          <Image
            className="rounded-2xl left-0 top-0 absolute z-20 h-[75%] object-cover"
            src={image}
            width={285}
            height={300}
            alt={name}
          />
        </Link>
      </div>
      <div className="flex flex-col h-[100px] w-[285px] top-[260px] bg-light-yellow rounded-br-[20px] rounded-bl-[20px] absolute"></div>
      <h3 className="h-11 w-[207px] left-[21px] top-[290px] absolute text-m font-bold text-blue">
        {name}
      </h3>
      <h3 className="h-11 w-[207px] left-[21px] top-[315px] absolute text-s text-blue">
        {location}
      </h3>
    </article>
  );
}

export default PhotoCard;
