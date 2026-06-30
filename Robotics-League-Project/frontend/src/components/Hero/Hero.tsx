import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Trophy,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.webp')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Red Glow */}

      <div className="absolute -left-44 top-0 w-[650px] h-[650px] rounded-full bg-red-600/20 blur-[170px]" />

      {/* Circuit Background */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/circuit.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto min-h-screen px-8 flex items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >

          {/* Live Badge */}



          <p className="mt-8 uppercase tracking-[8px] text-red-500">

            INDIA'S ULTIMATE

          </p>

          <h1 className="mt-5 text-6xl lg:text-8xl font-black leading-none">

            ROBOTICS

            <br />

            <span className="text-red-500">

              ARENA

            </span>

          </h1>

          <p className="text-zinc-300 text-lg mt-8 leading-8 max-w-xl">

            Build. Compete. Rank.

            India's Biggest Robotics Competition Platform.

          </p>

          <div className="flex gap-5 mt-12">

            <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl transition">

              CREATE ACCOUNT

              <ArrowRight size={18} />

            </button>

            <button className="flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-xl transition">

              <Play size={18} />

              WATCH VIDEO

            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">

              <Users className="text-red-500 mb-3" />

              <h2 className="text-4xl font-black text-red-500">

                15K+

              </h2>

              <p className="text-zinc-400">

                Participants

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">

              <Trophy className="text-red-500 mb-3" />

              <h2 className="text-4xl font-black text-red-500">

                120+

              </h2>

              <p className="text-zinc-400">

                Events

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">

              <Cpu className="text-red-500 mb-3" />

              <h2 className="text-4xl font-black text-red-500">

                300+

              </h2>

              <p className="text-zinc-400">

                Colleges

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT ROBOT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex flex-1 justify-end"
        >

          <img
            src="/images/robot.png"
            alt="Robot"
            className="w-[620px] object-contain drop-shadow-[0_0_80px_rgba(255,0,0,.55)]"
          />

        </motion.div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="w-8 h-14 border border-white rounded-full flex justify-center">

          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>

        </div>

      </div>

    </section>
  );
}