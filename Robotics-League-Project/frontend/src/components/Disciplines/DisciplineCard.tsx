import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
}

export default function DisciplineCard({
  title,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-700 hover:border-red-500 transition-all duration-300"
    >
      {/* Image */}

      <div className="h-72 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Title */}

      <div className="absolute bottom-0 left-0 right-0 p-6">

        <h2 className="text-3xl font-black text-white">

          {title}

        </h2>

        <button className="mt-4 flex items-center gap-2 text-red-500 group-hover:gap-4 transition-all">

          View Event

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}