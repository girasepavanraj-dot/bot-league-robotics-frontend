import { LucideIcon } from "lucide-react";

type Props = {
  no: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  no,
  title,
  desc,
  icon: Icon,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#171717] border border-zinc-700 hover:border-red-500 transition-all duration-300 p-8">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-600/10 to-transparent transition duration-500" />

      <div className="relative">

        <span className="text-5xl font-black text-red-500 opacity-30">
          {no}
        </span>

        <div className="mt-5 w-16 h-16 rounded-xl bg-red-600/20 flex items-center justify-center">

          <Icon
            className="text-red-500"
            size={34}
          />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {title}
        </h3>

        <p className="text-zinc-400 mt-4 leading-8">
          {desc}
        </p>

      </div>

    </div>
  );
}