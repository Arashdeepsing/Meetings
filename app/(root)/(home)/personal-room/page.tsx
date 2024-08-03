"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const InfoCard = ({
  heading,
  details,
}: {
  heading: string;
  details: string;
}) => {
  return (
    <div className="flex flex-col items-start bg-pink-300 text-gray-dark p-4 rounded-lg shadow-md w-full">
      <h1 className="text-lg font-medium text-gray-dark">{heading}</h1>
      <p className="text-sm font-bold text-gray-dark mt-1">{details}</p>
    </div>
  );
};

const PrivateRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const roomId = user?.id;

  const { call } = useGetCallById(roomId!);

  const initiateRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", roomId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${roomId}?private=true`);
  };

  const inviteLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${roomId}?private=true`;

  return (
    <section className="flex size-full flex-col gap-10 text-gray-dark p-6">
      <h1 className="text-xl font-bold lg:text-3xl text-white">
        Private Meeting Room
      </h1>
      <div className="flex w-full flex-col gap-6 xl:max-w-[900px]">
        <InfoCard
          heading="Subject"
          details={`${user?.username}'s Private Room`}
        />
        <InfoCard heading="Room ID" details={roomId!} />
        <InfoCard heading="Invitation URL" details={inviteLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-pink-700 text-white" onClick={initiateRoom}>
          Start Room
        </Button>
        <Button
          className="bg-pink-200 text-gray-dark"
          onClick={() => {
            navigator.clipboard.writeText(inviteLink);
            toast({
              title: "URL Copied",
            });
          }}
        >
          Copy Link
        </Button>
      </div>
    </section>
  );
};

export default PrivateRoom;
