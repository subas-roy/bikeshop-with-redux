import { FC, useEffect, useState } from "react";
import { MdBikeScooter } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-1 md:gap-2 cursor-pointer"
    >
      <span className="text-2xl md:text-3xl font-semibold flex items-center">
        <span className="bg-gradient-to-r from-yellow-500 to-teal-400 text-transparent bg-clip-text">GearGo</span>
        <MdBikeScooter
          className={`inline mx-1 h-7 w-7 md:h-8 md:w-8 transition-colors duration-300 ${
            isScrolled ? "text-indigo-600" : "text-gray-300 "
          }`}
        />
      </span>
    </div>
  );
};

export default Logo;
