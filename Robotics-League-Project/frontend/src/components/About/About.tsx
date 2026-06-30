import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "./data";

export default function About() {
  return (
    <section className="bg-[#111111] py-28">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <p className="uppercase tracking-[6px] text-red-500 font-semibold">

          ABOUT

        </p>

        <h2 className="text-5xl lg:text-6xl font-black text-white mt-4 mb-16">

          WHAT IS BOT LEAGUE?

        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}

          <div className="grid sm:grid-cols-2 gap-8">

            {features.map((item) => (

              <FeatureCard
                key={item.no}
                {...item}
              />

            ))}

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-zinc-700 min-h-[720px]"
          >

            {/* Background Image */}

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/future-robotics.png')",
              }}
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/45" />

            {/* Red Glow */}

            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-transparent" />

            {/* Bottom Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Text */}

            <div className="absolute bottom-12 left-12 z-20">

              <p className="uppercase tracking-[8px] text-red-500 text-lg">

                FUTURE

              </p>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-3">

                FUTURE OF

                <br />

                <span className="text-red-500">

                  ROBOTICS

                </span>

              </h2>

              <p className="text-zinc-300 text-lg mt-6 max-w-md leading-8">

                Learn. Build. Compete. Win.

                <br />

                India's largest robotics innovation ecosystem.

              </p>

              <button className="mt-8 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold">

                EXPLORE NOW

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}