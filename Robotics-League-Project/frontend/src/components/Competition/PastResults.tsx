import CompetitionCard from "./CompetitionCard";
import { results } from "./data";

export default function PastResults() {
  return (
    <CompetitionCard title="Past Results">

      {results.map((item, index) => (

        <div
          key={item}
          className="flex justify-between border-b border-zinc-700 py-4"
        >

          <span>

            {item}

          </span>

          <span className="text-red-500">

            #{index + 1}

          </span>

        </div>

      ))}

      <button className="w-full mt-8 border border-red-500 py-3 rounded-lg hover:bg-red-600">

        VIEW ALL

      </button>

    </CompetitionCard>
  );
}