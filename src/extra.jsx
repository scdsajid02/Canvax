import React from "react";
import dance from "./assets/extradance.jpg";
import games from "./assets/games.jpg";
import lab from "./assets/computerlabs.jpg";
import visual from "./assets/visual.jpg";
const Extra = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 border m-2 border-black">
      <div className="bg-black text-white text-center">
        <h1 className="text-2xl text-center font-bold py-3 bg-white text-black">
          INFRASTRUCTURE
        </h1>
      </div>
      <div className="text-center flex flex-col  items-center justify-center mt-2 mb-4">
        <div className="border border-black shadow-green-800 shadow-md w-4/5 w flex justify-center items-center">
          <p className="text-xl p-2 font-semibold">
            At <span className="font-extrabold">CANVAX SCHOOLS</span> we offers
            the infrastructural support that students need to build the bedrock
            of their professional and personal success. We have comfortable
            digital classrooms, spacious auditoriums, well-stocked libraries,
            well-equipped laboratories, sports facilities, and more to aid the
            optimum growth of students. Being the one of the best schools in 3
            countrys, we have highly engaging digital content specially made for
            self-paced learning of students. Our digital library consists of
            worksheets, quizzes, glossaries, 3D animated videos, 6000+
            audio-visual content, and much more. These promote interactive
            learning sessions as well as ensure that students understand
            concepts easily.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:justify-around md:flex-row-reverse md:text-2xl border border-black shadow-green-800 shadow-md m-2">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px]">
          <img className="" src={dance} alt="dance" />
        </div>
        <div className="">
          <h2 className=" font-bold  mb-3">ARTS&CULTURAL</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border md:justify-around md:flex-row-reverse md:text-2xl border-black shadow-green-800 shadow-md my-4 mx-2">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px] ">
          <img className="" src={games} alt="primary" />
        </div>
        <div className="">
          <h2 className=" font-bold ">GAMES</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  border md:justify-around md:flex-row-reverse md:text-2xl border-black  shadow-green-800 shadow-md m-2 mb-4  ">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px]">
          <img className="" src={lab} alt="primary" />
        </div>
        <div className="">
          <h2 className=" font-bold ">COMPUTER LABS</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border md:justify-around md:flex-row-reverse md:text-2xl border-black  shadow-green-800 shadow-md m-2   ">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px]">
          <img className="" src={visual} alt="primary" />
        </div>
        <div className="">
          <h2 className=" font-bold ">VISUAL ARTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Extra;
