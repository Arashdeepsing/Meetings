"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  customClass?: string;
  imgSrc: string;
  titleText: string;
  descriptionText: string;
  onClick?: () => void;
}

const HomeCard = ({
  customClass,
  imgSrc,
  titleText,
  descriptionText,
  onClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "bg-gradient-to-r text-white p-6 flex flex-col justify-between w-full xl:max-w-[320px] min-h-[200px] rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-300",
        customClass
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-center p-4 rounded-md bg-gray-100">
        <Image src={imgSrc} alt="meeting" width={100} height={50} />
      </div>

      <div className="flex flex-col gap-3 mt-4 text-center">
        <h1 className="text-lg font-bold">{titleText}</h1>
        <p className="text-sm">{descriptionText}</p>
      </div>
    </section>
  );
};

export default HomeCard;
