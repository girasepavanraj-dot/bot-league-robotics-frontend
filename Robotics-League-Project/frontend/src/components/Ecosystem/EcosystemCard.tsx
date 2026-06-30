import { LucideIcon, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function EcosystemCard({
  title,
  desc,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-2xl bg-[#171717] border border-zinc-700 hover:border-red-500 transition-all duration-300 p-8">

      <div className="w-16 h-16 rounded-xl bg-red-600/20 flex items-center justify-center">

        <Icon
          size={34}
          className="text-red-500 group-hover:scale-110 transition"
        />

      </div>

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      <p className="text-zinc-400 mt-4 leading-7">
        {desc}
      </p>

      <button className="mt-8 flex items-center gap-2 text-red-500 hover:gap-4 transition-all">

        Learn More

        <ArrowRight size={18} />

      </button>

    </div>
  );
}