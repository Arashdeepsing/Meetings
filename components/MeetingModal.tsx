"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  modalClass?: string;
  children?: ReactNode;
  onButtonClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  modalTitle,
  modalClass,
  children,
  onButtonClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border border-gray-300 bg-white shadow-lg px-6 py-8 rounded-lg">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1
            className={cn(
              "text-3xl font-bold leading-[42px] text-gray-800",
              modalClass
            )}
          >
            {modalTitle}
          </h1>
          {children}
          <Button
            className={
              "bg-pink-600 text-dark rounded-full py-3 px-6 shadow-md hover:bg-pink-300 focus:ring-4 focus:ring-blue-200"
            }
            onClick={onButtonClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
