import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {

      setShow(window.scrollY > 300);

    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  if (!show) return null;

  return (

    <button

      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }

      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/40 flex items-center justify-center z-50"

    >

      <FaArrowUp />

    </button>

  );

}