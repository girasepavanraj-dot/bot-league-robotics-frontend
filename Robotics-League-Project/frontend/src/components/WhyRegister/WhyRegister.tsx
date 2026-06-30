import FeatureCard from "./FeatureCard";
import { features } from "./data";

export default function WhyRegister() {
  return (
    <section className="bg-[#101010] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-red-500 uppercase tracking-[5px]">
          Join Today
        </p>

        <h2 className="text-5xl font-black mt-4">
          WHY REGISTER?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item) => (
              <FeatureCard
                key={item.title}
                {...item}
              />
            ))}

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-gradient-to-br from-[#1b1b1b] to-black border border-zinc-700 p-10">

            <h3 className="text-3xl font-black">
              LEADERBOARD
            </h3>

            <div className="mt-10 space-y-6">

              {[
                "Robo Titans",
                "Tech Warriors",
                "Bot Masters",
                "Cyber Squad",
                "NextGen Robotics",
              ].map((team, index) => (
                <div
                  key={team}
                  className="flex items-center justify-between border-b border-zinc-700 pb-4"
                >

                  <span className="text-red-500 font-bold">
                    #{index + 1}
                  </span>

                  <span>{team}</span>

                  <span className="font-bold">
                    {1200 - index * 100} pts
                  </span>

                </div>
              ))}

            </div>

            <button className="mt-10 w-full rounded-xl bg-red-600 py-4 font-semibold hover:bg-red-700 transition">
              VIEW FULL RANKING
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}