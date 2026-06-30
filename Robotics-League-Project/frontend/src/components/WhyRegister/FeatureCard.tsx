import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  desc,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-2xl border border-zinc-700 bg-[#1b1b1b] p-6 hover:border-red-500 transition-all duration-300">

      <div className="w-16 h-16 rounded-xl bg-red-600/20 flex items-center justify-center">

        <Icon
          size={34}
          className="text-red-500 group-hover:scale-110 transition"
        />

      </div>

      <h3 className="mt-6 text-xl font-bold">

        {title}

      </h3>

      <p className="text-zinc-400 mt-4 leading-7">

        {desc}

      </p>

    </div>
  );
}