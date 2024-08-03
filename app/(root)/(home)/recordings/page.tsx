import CallArray from "@/components/CallArray";

const RecordingsPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold lg:text-4xl">Recordings</h1>

      <CallArray type="recordings" />
    </section>
  );
};

export default RecordingsPage;
