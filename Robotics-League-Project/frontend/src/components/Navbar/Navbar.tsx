import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Events",
  "Programs",
  "Community",
  "Rankings",
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-red-500/20 shadow-lg"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-12">

          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/logo.png"
              alt="BOTLEAGUE"
              className="h-11 w-auto object-contain"
            />

            <div className="hidden xl:block">

              <h2 className="text-xl font-black tracking-wide">

                BOT<span className="text-red-500">LEAGUE</span>

              </h2>

              <p className="text-[10px] text-zinc-500 tracking-[2px] uppercase">

                Robotics Championship

              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="relative uppercase text-sm tracking-[2px] text-zinc-300 hover:text-white transition group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

          </nav>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex items-center gap-4">

          <button className="px-6 py-2 rounded-lg border border-zinc-700 hover:border-red-500 hover:text-red-500 transition">

            LOGIN

          </button>

          <button className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition shadow-lg shadow-red-600/30">

            REGISTER NOW

          </button>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Drawer */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="lg:hidden bg-[#111] border-t border-zinc-800"
          >

            <div className="flex flex-col gap-6 p-8">

              {links.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="uppercase tracking-widest text-zinc-300 hover:text-red-500"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>

              ))}

              <button className="bg-red-600 rounded-lg py-3 font-semibold">

                REGISTER NOW

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}