type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CompetitionCard({
  title,
  children,
}: Props) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-[#171717] border border-zinc-700 hover:border-red-500 duration-300">

      <div className="bg-[#111] border-b border-zinc-700 px-6 py-4">

        <h2 className="text-red-500 uppercase font-bold tracking-wider">

          {title}

        </h2>

      </div>

      <div className="p-6">

        {children}

      </div>

    </div>
  );
}