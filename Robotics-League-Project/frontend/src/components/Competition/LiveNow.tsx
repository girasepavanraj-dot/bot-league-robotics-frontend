import CompetitionCard from "./CompetitionCard";
import { liveMatch } from "./data";

export default function LiveNow() {
  return (
    <CompetitionCard title="Live Now">

      <div className="flex justify-between">

        <span className="text-red-500 font-bold">

          ● LIVE

        </span>

        <span className="text-zinc-400">

          Arena

        </span>

      </div>

      <h3 className="text-2xl font-black mt-6">

        {liveMatch.title}

      </h3>

      <p className="text-zinc-400 mt-3">

        {liveMatch.venue}

      </p>

      <div className="mt-8 rounded-xl h-48 bg-[#222] flex items-center justify-center">

        Tournament Bracket

      </div>

      <button className="w-full mt-8 bg-red-600 hover:bg-red-700 py-3 rounded-lg">

        WATCH LIVE

      </button>

    </CompetitionCard>
  );
}