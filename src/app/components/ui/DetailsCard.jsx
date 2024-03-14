// "use client";

import Image from "next/image";


function DetailsCard({data}) {
  console.log(data);
  return (
    <>
      <article className=" flex flex-col m-auto desktop:w-[900px] h-[450px] desktop:flex-row desktop:gap-10 desktop:my-20">
        <Image
          className="mobile:h-[393px] mobile:w-[450] rounded-br-[20px] rounded-bl-[20px] desktop:rounded-[20px]"
          src={data.image}
          width={450}
          height={450}
          alt={data.name}
        />
        <section className="flex flex-col m-3">
          <div className="mobile:bg-red z-20 w-72 h-24 rounded-[20px] mt-[-70px] desktop:hidden ml-auto mr-auto flex flex-col justify-center">
            <h3 className="mobile:text-m desktop:text-l font-bold text-light-yellow text-center desktop:mt-[4px] mobile:pb-0.5 desktop:p-0">
            {data.name}
            </h3>
            <h4 className="mobile:text-s desktop:text-m text-light-yellow text-center desktop:mt-[-16px] desktop:mb-4">{data.location}</h4>
          </div>

          <h3 className="mobile:hidden desktop:flex desktop:text-red desktop:text-l font-bold desktop:mt-[-14px] desktop:text-left">
          {data.name}
          </h3>
          <h4 className="mobile:hidden desktop:flex desktop:text-m desktop:text-red desktop:mt-[-14px] desktop:text-left">{data.location}</h4>

          <p className="text-s text-blue mobile:mt-4">
          {data.reason} 
          </p>
        </section>
      </article>
    </>
  );
}

export default DetailsCard;
