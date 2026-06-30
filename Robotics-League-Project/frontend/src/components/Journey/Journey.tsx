import JourneyCard from "./JourneyCard";
import { journey } from "./data";

export default function Journey() {
  return (
    <section className="bg-[#0a0a0a] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[6px] text-red-500 text-center">

          Journey

        </p>

        <h2 className="text-center text-5xl font-black mt-4">

          YOUR ROBOTICS JOURNEY

        </h2>

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-cyan-400 rounded-full shadow-[0_0_30px_rgba(34,211,238,.8)]" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

            {journey.map((item) => (

              <JourneyCard
                key={item.step}
                {...item}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}