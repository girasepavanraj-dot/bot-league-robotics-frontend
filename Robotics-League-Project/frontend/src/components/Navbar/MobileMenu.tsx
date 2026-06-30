import { motion } from "framer-motion";

const links = [
  "Events",
  "Programs",
  "Community",
  "Rankings",
];

type Props = {
  open: boolean;
};

export default function MobileMenu({ open }: Props) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden absolute top-full left-0 w-full bg-[#111] border-t border-zinc-800"
    >
      <div className="flex flex-col p-8 gap-6">

        {links.map((item) => (

          <a
            key={item}
            href="#"
            className="text-zinc-300 hover:text-red-500"
          >
            {item}
          </a>

        ))}

        <button className="bg-red-600 py-3 rounded-lg">

          REGISTER

        </button>

      </div>

    </motion.div>
  );
}