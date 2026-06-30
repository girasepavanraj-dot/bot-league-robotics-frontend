import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

import BackToTop from "./BackToTop";

const quickLinks = [
  "Home",
  "Events",
  "Competitions",
  "Categories",
  "Sponsors",
  "Contact",
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#070707] border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

            {/* Logo */}

            <div>

              <h2 className="text-4xl font-black tracking-wider">

                BOT<span className="text-red-500">LEAGUE</span>

              </h2>

              <p className="text-zinc-400 mt-6 leading-8">

                India's Ultimate Robotics Competition Platform.

                Join thousands of innovators competing across India.

              </p>

              <div className="space-y-4 mt-8">

                <div className="flex items-center gap-3 text-zinc-400">

                  <FaEnvelope className="text-red-500" />

                  info@botleague.in

                </div>

                <div className="flex items-center gap-3 text-zinc-400">

                  <FaPhone className="text-red-500" />

                  +91 98765 43210

                </div>

                <div className="flex items-center gap-3 text-zinc-400">

                  <FaLocationDot className="text-red-500" />

                  Pune, Maharashtra

                </div>

              </div>

            </div>

            {/* Links */}

            <div>

              <h3 className="text-xl font-bold mb-6">

                QUICK LINKS

              </h3>

              <ul className="space-y-4">

                {quickLinks.map((item) => (

                  <li
                    key={item}
                    className="text-zinc-400 hover:text-red-500 cursor-pointer transition"
                  >

                    {item}

                  </li>

                ))}

              </ul>

            </div>

            {/* Newsletter */}

            <div>

              <h3 className="text-xl font-bold mb-6">

                NEWSLETTER

              </h3>

              <p className="text-zinc-400 mb-6">

                Subscribe to receive robotics news,
                competitions and updates.

              </p>

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-[#151515] border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />

              <button className="w-full mt-4 bg-red-600 hover:bg-red-700 transition rounded-lg py-3 font-bold">

                SUBSCRIBE

              </button>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-bold mb-6">

                FOLLOW US

              </h3>

              <p className="text-zinc-400 mb-6">

                Stay connected with BOT League.

              </p>

              <div className="flex gap-5 text-2xl">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#171717] border border-zinc-700 flex items-center justify-center hover:bg-red-600 transition"
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#171717] border border-zinc-700 flex items-center justify-center hover:bg-red-600 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#171717] border border-zinc-700 flex items-center justify-center hover:bg-red-600 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#171717] border border-zinc-700 flex items-center justify-center hover:bg-red-600 transition"
                >
                  <FaXTwitter />
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500">

            <p>

              © 2026 BOT LEAGUE. All Rights Reserved.

            </p>

            <p className="mt-4 md:mt-0">

              Made with ❤️ using React • TypeScript • Tailwind CSS

            </p>

          </div>

        </div>

      </footer>

      <BackToTop />

    </>
  );
}