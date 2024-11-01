import React from "react";
import primary from "./assets/primary-1.png";
import middle from "./assets/middle.jpg";
import secondary from "./assets/secondary2.jpg";
const Content = () => {
  return (
    <div className="font-serif bg-gradient-to-r from-cyan-500 to-blue-500 m-2 sm:m-4border border-black">
      <div className=" text-center flex flex-col  items-center justify-center">
        <div className="border border-black shadow-green-800 shadow-md w-4/5 m-2 ">
          <h1 className="text-3xl font-bold text-white"> CANVAX SCHOOLS</h1>
          <p className="text-xl p-2 font-semibold">
            At Canvax,we take pride in our 45+ years legacy of excellence. Our
            approach, refined over the last 4+ decades, has led us to a process
            driven system which is in line with today's needs and requirements
            to ensure overall development of students. Through this system, we
            foster an environment where excellence thrives to ensure dreams turn
            into reality, as Your Dreams Are Our Dreams. Contact and join with
            us be a part of these exciting journey.Complete your child schooling
            from primary to secondary schooling.Canvax is now in 5 different
            Countries.
          </p>
        </div>
        <div className="border border-black shadow-green-800 shadow-md w-4/5 m-2 ">
          <h1 className="text-3xl font-bold text-white">
            Highlights of the Canvax Schools
          </h1>
          <ul className="text-xl p-2 font-semibold">
            <li>
              Personalised study plans crafted by our R&D team, catering to
              students from pre-primary to higher secondary levels.
            </li>
            <li>
              Age-appropriate educational programmes are tailored to each
              developmental stage of your child's academic journey.
            </li>
            <li>
              Every student is paired with a dedicated mentor for ongoing
              communication with students and parents, addressing concerns
              alongside subject teachers during class.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-center font-bold py-3 bg-black text-white">
          ACADEMICS
        </h1>
      </div>
      <div className="flex flex-col md:justify-around md:flex-row-reverse md:text-2xl justify-center items-center border border-black shadow-green-800 shadow-md m-2">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px]">
          <img className="" src={primary} alt="primary" />
        </div>
        <div className="">
          <h2 className=" font-bold ">PRIMARY SCHOOL</h2>
        </div>
      </div>
      <div className="flex flex-col md:justify-around md:flex-row-reverse md:text-2xl justify-center items-center border border-black shadow-green-800 shadow-md my-4 mx-2">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px] ">
          <img className="" src={middle} alt="primary" />
        </div>
        <div className="">
          <h2 className=" font-bold ">MIDDLE SCHOOL</h2>
        </div>
      </div>
      <div className="flex flex-col md:justify-around md:flex-row-reverse md:text-2xl justify-center items-center border border-black  shadow-green-800 shadow-md m-2  ">
        <div className=" m-2 border border-black shadow-md shadow-black max-w-[550px]">
          <img className="" src={secondary} alt="primary" />
        </div>
        <div className="mb-2">
          <h2 className=" font-bold ">SECONDARY SCHOOL</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
