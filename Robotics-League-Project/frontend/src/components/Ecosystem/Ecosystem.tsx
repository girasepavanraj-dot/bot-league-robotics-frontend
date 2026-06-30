import { motion } from "framer-motion";

const cards = [
  {
    title: "BECOME IN JUDGE",
  },
  {
    title: "VOLUNTEER",
  },
  {
    title: "COMMUNITY MEMBER",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-[#161616] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black mb-16">

          JOIN THE ECOSYSTEM

        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card, index) => (

            <motion.div

              key={index}

              whileHover={{ y: -8 }}

              className="bg-[#202020] border border-zinc-700 rounded-xl p-6"

            >

              <h3 className="text-xl font-bold mb-8">

                {card.title}

              </h3>

              <input
                placeholder="Name"
                className="w-full mb-4 bg-[#151515] border border-zinc-700 rounded px-4 py-3 outline-none"
              />

              <input
                placeholder="Location"
                className="w-full mb-4 bg-[#151515] border border-zinc-700 rounded px-4 py-3 outline-none"
              />

              <input
                placeholder="Email"
                className="w-full mb-6 bg-[#151515] border border-zinc-700 rounded px-4 py-3 outline-none"
              />

              <button className="w-full bg-red-600 hover:bg-red-700 rounded py-3 font-bold">

                SIGN UP

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}