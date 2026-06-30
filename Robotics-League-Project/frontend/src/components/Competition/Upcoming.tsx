import CompetitionCard from "./CompetitionCard";
import { upcoming } from "./data";

export default function Upcoming() {
  return (
    <CompetitionCard title="Upcoming Events">

      {upcoming.map((item) => (

        <div
          key={item.title}
          className="border-b border-zinc-700 pb-5 mb-5"
        >

          <h3 className="font-bold">

            {item.title}

          </h3>

          <p className="text-zinc-400 mt-2">

            {item.date}

          </p>

          <button className="mt-4 text-red-500">

            Register →

          </button>

        </div>

      ))}

    </CompetitionCard>
  );
}