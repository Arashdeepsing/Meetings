"use client";
import { useState } from "react";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter, useSearchParams } from "next/navigation";
import { Users, LayoutList } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import LoadingCircle from "./LoadingCircle";
import HaltCallBtn from "./HaltCallBtn";
import { cn } from "@/lib/utils";

type CallLayoutType = "grid" | "left" | "right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("grid");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <LoadingCircle />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-gray-800 bg-gray-50">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-full items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 bg-white py-4 shadow-md">
        <CallControls onLeave={() => router.push(`/`)} />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
              <LayoutList size={20} className="text-gray-800" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-gray-300 bg-white text-pink-800">
            {["Grid", "Left Side", "Right Side"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() =>
                    setLayout(
                      item.toLowerCase().replace("-", "-") as CallLayoutType
                    )
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-pink-300" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-500">
            <Users size={20} className="text-pink-800" />
          </div>
        </button>
        {!isPersonalRoom && <HaltCallBtn />}
      </div>
    </section>
  );
};

export default MeetingRoom;
