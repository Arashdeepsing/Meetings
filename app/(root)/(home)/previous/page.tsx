import CallArray from "@/components/CallArray";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-gray-dark">
      <h1 className="text-3xl font-bold lg:text-4xl">Previous Calls</h1>

      <CallArray type="ended" />
    </section>
  );
};

export default PreviousPage;
