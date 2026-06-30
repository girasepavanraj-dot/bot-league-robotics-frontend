import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function NavItem({ title }: Props) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      href="#"
      className="relative text-sm uppercase tracking-widest text-zinc-300 hover:text-white transition group"
    >
      {title}

      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}