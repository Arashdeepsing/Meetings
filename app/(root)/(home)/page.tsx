import MainMeetingList from "@/components/MainMeetingList";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-5 text-gray-dark">
      <div className="h-[303px] w-full rounded-xl pic bg-cover bg-pink-100 p-6">
        <div className="flex h-full flex-col justify-between px-6 py-8 lg:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="glassmorphism max-w-[350px] rounded py-3  text-center text-7xl font-bold">
              {time}
            </h1>
            <p className="glassmorphism max-w-[250px] rounded py-3 text-center text-xl font-bold">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MainMeetingList />
    </section>
  );
};

export default Home;
