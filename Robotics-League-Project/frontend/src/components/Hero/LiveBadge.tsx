export default function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-black/70 border border-red-500 rounded-full px-5 py-2 mb-8">

      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"/>

      <span>

        Live Robotics League

      </span>

    </div>
  );
}