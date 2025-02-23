import { useState, useEffect } from "react";
import logo from "../assets/profile.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
function Logo() {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col  items-center justify-center ">
      <div className="flex items-center justify-center  ">
        {/* Logo with smooth slide to the left */}
        <img
          src={logo}
          className={`w-[100px] h-[100px] rounded-full   border-2 transition-transform  duration-1000 ease-in-out ${showText ? "translate-x-[-10px]  " : "translate-x-[200px]   "
            }`}
          alt="Profile"
        />
        {/* Text fades in smoothly */}
        <div
          className={`text-3xl  text-black transition-opacity duration-1500 ease-in-out  font-poppins text-center ${showText ? "opacity-100 translate-x-10" : "opacity-0 translate-x-10"
            }`}
        >
          Hi, I am <b>Mohd Tabish Khan</b> <br /> <span className=" font-bold">2nd Year UG CSE</span>
        </div>
      </div>
      {showText &&
        <button className={` mt-20 fixed px-4 py-2 bg-transparent text-orange-400  hover:border-none hover:bg-orange-300 hover:duration-300 hover:ease-out hover:text-white   border-black border-1 animate-showButton rounded-xl translate-y-[100px] `} onClick={() => navigate('/home')}>
          <b className="flex gap-2 items-center">Know More<ArrowTopRightIcon fontSize={6} /></b>
        </button>}
      <p className="mb-1 absolute mt-[400px]  text-red-500">NOTE: The site is still under developement</p>

      {/* <p className="flex-end">Site is under developement</p> */}
    </div>
  );
}

export default Logo;
