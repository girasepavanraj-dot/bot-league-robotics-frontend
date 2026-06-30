import { motion } from "framer-motion";
import { sponsors } from "./data";

export default function Sponsors() {
  return (
    <section className="bg-[#0d0d0d] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-black text-white mb-16">

          SPONSORS

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {sponsors.map((item) => (

            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="bg-[#171717] border border-zinc-700 rounded-2xl py-10 flex flex-col items-center justify-center hover:border-red-500 transition duration-300"
            >

              {/* Logo */}

              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />

              </div>

              {/* Name */}

              <p className="text-white text-sm font-medium mt-6 text-center uppercase">

                {item.name}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}