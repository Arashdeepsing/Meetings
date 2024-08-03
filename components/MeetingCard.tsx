"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-lg bg-pink-100 shadow-md px-6 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-4">
        <Image src={icon} alt="meeting" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-pink-800">{title}</h1>
            <p className="text-base font-medium text-pink-700">{date}</p>
          </div>
        </div>
      </article>
      <article className="flex justify-center relative">
        {!isPreviousMeeting && (
          <div className="flex gap-2 mt-4">
            <Button
              onClick={handleClick}
              className="rounded-full bg-pink-600 text-white px-6 py-2 shadow-md hover:bg-pink-700"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="rounded-full bg-gray-300 text-gray-800 px-6 py-2 shadow-md hover:bg-gray-400"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
