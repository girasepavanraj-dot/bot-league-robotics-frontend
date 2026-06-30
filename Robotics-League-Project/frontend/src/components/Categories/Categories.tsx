import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { categories } from "./data";

export default function Categories() {
  return (
    <section className="bg-[#111] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase tracking-[6px] text-red-500"
        >
          Categories
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl lg:text-6xl font-black mt-4 mb-16"
        >
          EXPLORE DIVISIONS
        </motion.h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}