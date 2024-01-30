"use client";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const arrow = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (arrow.current && window.pageYOffset >= 200) {
        arrow.current.classList.add("right-8");
      } else if (arrow.current) {
        arrow.current.classList.remove("right-8");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="arrow"
        className={`fixed bottom-4 -right-full transition-all duration-500 shadow-2xl shadow-black text-gray-500 bg-adainyellow hover:bg-[#ececec] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrow}
      >
        <FaArrowUp scale={50} />
      </button>
    </div>
  );
};

export default ScrollTop;
