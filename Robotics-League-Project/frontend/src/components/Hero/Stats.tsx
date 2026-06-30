const stats = [
  {
    number: "15K+",
    title: "Participants",
  },
  {
    number: "500+",
    title: "Colleges",
  },
  {
    number: "120+",
    title: "Events",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-16">

      {stats.map((item) => (

        <div key={item.title}>

          <h2 className="text-4xl font-black text-red-500">

            {item.number}

          </h2>

          <p className="text-zinc-400 mt-2">

            {item.title}

          </p>

        </div>

      ))}

    </div>
  );
}