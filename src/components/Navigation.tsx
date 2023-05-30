import Image from "next/image";
import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-full flex justify-between">
        <div className="relative w-20">
          <Image src="/next.svg" alt="Next JS" fill />
        </div>
        <ul className="flex justify-center items-center gap-8 text-xl ">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>

        <button className="py-3 px-5 text-white bg-black text-md font-medium rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navigation;
