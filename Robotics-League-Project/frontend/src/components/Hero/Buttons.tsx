import { ArrowRight } from "lucide-react";

export default function Buttons() {
  return (
    <div className="flex gap-5 mt-12">

      <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg flex items-center gap-3">

        CREATE ACCOUNT

        <ArrowRight size={18} />

      </button>

      <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-lg">

        EXPLORE EVENTS

      </button>

    </div>
  );
}