import CallArray from "@/components/CallArray";

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold lg:text-4xl">Upcoming Meeting</h1>

      <CallArray type="upcoming" />
    </section>
  );
};

export default UpcomingPage;
