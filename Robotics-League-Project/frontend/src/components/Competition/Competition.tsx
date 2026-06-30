import LiveNow from "./LiveNow";
import Upcoming from "./Upcoming";
import PastResults from "./PastResults";

export default function Competition() {
  return (
    <section className="bg-[#0b0b0b] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-14">

          <p className="uppercase tracking-[6px] text-red-500">

            Events

          </p>

          <h2 className="text-5xl font-black mt-3">

            COMPETITIONS & EVENTS

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <LiveNow />

          <Upcoming />

          <PastResults />

        </div>

      </div>

    </section>
  );
}