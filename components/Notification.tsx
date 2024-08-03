import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface PermissionCardProps {
  title: string;
  iconUrl?: string;
}

const Notification = ({ title, iconUrl }: PermissionCardProps) => {
  return (
    <section className="flex-center h-screen w-full bg-gray-light">
      <Card className="w-full max-w-[520px] border border-gray-300 bg-white shadow-lg p-8 rounded-lg">
        <CardContent>
          <div className="flex flex-col gap-6">
            {iconUrl && (
              <div className="flex-center">
                <Image src={iconUrl} width={72} height={72} alt="icon" />
              </div>
            )}
            <p className="text-center text-2xl font-bold text-gray-700">
              {title}
            </p>
            <Button
              asChild
              className="bg-blue-600 text-white rounded-full py-3 px-6 shadow-md hover:bg-blue-700"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Notification;
