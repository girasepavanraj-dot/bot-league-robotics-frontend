import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  age: string;
  image: string;
  description: string;
}

export default function CategoryCard({
  title,
  age,
  image,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl bg-[#171717] border border-zinc-700 hover:border-red-500 transition-all duration-300"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-3xl font-black text-white">

          {title}

        </h2>

        <p className="text-red-500 mt-2">

          {age}

        </p>

        <p className="text-zinc-400 mt-4 leading-7">

          {description}

        </p>

        <button className="flex items-center gap-2 mt-8 text-red-500 group-hover:gap-4 transition-all">

          Learn More

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}