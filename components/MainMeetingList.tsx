/* eslint-disable camelcase */
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoadingCircle from "./LoadingCircle";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";

const initialFormValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

const MeetingOptions = () => {
  const navigate = useRouter();
  const [currentMeetingType, setCurrentMeetingType] = useState<
    "scheduleMeeting" | "joinMeeting" | "instantMeeting" | undefined
  >(undefined);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [currentCall, setCurrentCall] = useState<Call | null>(null);
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  const handleMeetingCreation = useCallback(async () => {
    if (!client || !user) return;
    try {
      if (!formValues.dateTime) {
        toast({ title: "Please select a date and time" });
        return;
      }
      const meetingId = crypto.randomUUID();
      const newCall = client.call("default", meetingId);
      if (!newCall) throw new Error("Failed to create meeting");
      const startTime =
        formValues.dateTime.toISOString() || new Date().toISOString();
      const meetingDescription = formValues.description || "Instant Meeting";
      await newCall.getOrCreate({
        data: {
          starts_at: startTime,
          custom: {
            description: meetingDescription,
          },
        },
      });
      setCurrentCall(newCall);
      if (!formValues.description) {
        navigate.push(`/meeting/${newCall.id}`);
      }
      toast({
        title: "Meeting Created",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting" });
    }
  }, [client, user, formValues, navigate, toast]);

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${currentCall?.id}`;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        imgSrc="/icons/add-meeting.svg"
        titleText="New Meeting"
        descriptionText="Start an instant meeting"
        customClass="bg-gray-300 text-dark"
        onClick={() => setCurrentMeetingType("instantMeeting")}
      />
      <HomeCard
        imgSrc="/icons/join-meeting.svg"
        titleText="Join Meeting"
        descriptionText="via invitation link"
        customClass="bg-pink-300"
        onClick={() => setCurrentMeetingType("joinMeeting")}
      />
      <HomeCard
        imgSrc="/icons/schedule.svg"
        titleText="Schedule Meeting"
        descriptionText="Plan your meeting"
        customClass="bg-blue-300"
        onClick={() => setCurrentMeetingType("scheduleMeeting")}
      />
      <HomeCard
        imgSrc="/icons/recordings.svg"
        titleText="View Recordings"
        descriptionText="Meeting Recordings"
        customClass="bg-violet-300"
        onClick={() => navigate.push("/recordings")}
      />

      {!currentCall ? (
        <MeetingModal
          isOpen={currentMeetingType === "scheduleMeeting"}
          onClose={() => setCurrentMeetingType(undefined)}
          modalTitle="Create Meeting"
          onButtonClick={handleMeetingCreation}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-dark font-normal leading-[22.4px] text-pink-700">
              Description
            </label>
            <Textarea
              className="border-none bg-pink-100 text-gray-dark focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setFormValues({ ...formValues, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-dark font-normal leading-[22.4px] text-pink-700">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={formValues.dateTime}
              onChange={(date) =>
                setFormValues({ ...formValues, dateTime: date! })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-pink-100 text-gray-dark p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={currentMeetingType === "scheduleMeeting"}
          onClose={() => setCurrentMeetingType(undefined)}
          modalTitle="Meeting Created"
          onButtonClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          modalClass="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={currentMeetingType === "joinMeeting"}
        onClose={() => setCurrentMeetingType(undefined)}
        modalTitle="Type the link here"
        modalClass="text-center"
        buttonText="Join Meeting"
        onButtonClick={() => navigate.push(formValues.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) =>
            setFormValues({ ...formValues, link: e.target.value })
          }
          className="border-none bg-pink-100 text-gray-dark focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={currentMeetingType === "instantMeeting"}
        onClose={() => setCurrentMeetingType(undefined)}
        modalTitle="Start an Instant Meeting"
        modalClass="text-center"
        buttonText="Start Meeting"
        onButtonClick={handleMeetingCreation}
      />
      {!client || !user ? <LoadingCircle /> : null}
    </div>
  );
};

export default MeetingOptions;
