import { motion } from "framer-motion";
import DisciplineCard from "./DisciplineCard";
import { disciplines } from "./data";

export default function Disciplines() {
  return (
    <section className="bg-[#0f0f0f] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase tracking-[6px] text-red-500"
        >
          Competition
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl lg:text-6xl font-black mt-4 mb-16"
        >
          DISCIPLINES
        </motion.h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {disciplines.map((item) => (
            <DisciplineCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}