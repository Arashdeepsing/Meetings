"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/constants";
import { cn } from "@/lib/utils";

const SideLink = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between glassmorphism  pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex rounded-none flex-1 flex-col gap-6">
        {links.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-sm justify-start hover:bg-gray-800",
                {
                  "bg-gray-900": isActive,
                }
              )}
            >
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideLink;
