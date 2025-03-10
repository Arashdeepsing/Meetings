import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import PhoneNavigation from "./PhoneNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-10 py-7 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10 "
        />
        <p className="text-[26px] font-extrabold text-pink-800 max-sm:hidden max-lg:hidden">
          Meetings
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <PhoneNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
