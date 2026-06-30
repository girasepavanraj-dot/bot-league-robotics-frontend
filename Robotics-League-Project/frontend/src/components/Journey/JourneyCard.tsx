import { LucideIcon } from "lucide-react";

type Props = {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function JourneyCard({
  step,
  title,
  desc,
  icon: Icon,
}: Props) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Blue Circle */}

      <div className="relative z-20">

        <div className="w-24 h-24 rounded-full bg-[#101820] border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,.5)] flex items-center justify-center">

          <Icon
            size={36}
            className="text-white"
          />

        </div>

      </div>

      <span className="text-red-500 mt-6 text-sm tracking-widest">

        {step}

      </span>

      <h3 className="font-bold text-xl mt-3">

        {title}

      </h3>

      <p className="text-zinc-400 mt-3 max-w-[220px]">

        {desc}

      </p>

    </div>
  );
}