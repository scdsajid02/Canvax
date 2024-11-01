import React from "react";
import camera from "./assets/aboutcccam.png";
import carriculam from "./assets/aboutcarriculam.png";
import team from "./assets/aboutteam.png";
import engage from "./assets/engagement.png";

const Wind = () => {
  return (
    <div className="font-serif bg-gradient-to-r from-cyan-500 to-blue-500 m-2 sm:m-4border border-black">
      <div className="bg-black text-white text-center">
        <h1 className="text-2xl text-center font-bold py-3 bg-white text-black">
          ABOUT
        </h1>
      </div>
      <div className="text-center flex flex-col  items-center justify-center font-medium">
        <div className="border border-black shadow-green-800 shadow-md w-4/5 m-2 text-xl ">
          <p className="m-4 border border-black p-2">
            Understanding that within every individual lies a vast, often
            untapped well of potential, CANVAX Schools believes that this
            potential is best nurtured in an environment dedicated to continuous
            learning, supported by expertise, and profound empathy gained over
            multiple years of experience.
          </p>
          <p className="m-4 text-2xl sm:font-bold font-medium p-2">
            The system, at CANVAX Schools, that has helped millions of students
            fulfill their dreams is built around:
          </p>
          <p className="m-4 border border-black p-2">
            Strong R&D Team At CANVAX, our strong R&D team puts in over 15000
            hours and evaluates study material from different boards, including
            CBSE, ICSE, and state boards, and chooses the best to create an
            integrated curriculum.We're here to ensure the dream of getting the
            best is fulfilled, because Your Dreams Are Our Dreams.
          </p>
          <p className="m-4 border border-black p-2">
            Teacher Training Our transformative teacher training programme
            conducted for over 3,60,000 hours annually, equips over 15 thousand
            of our well-qualified and expert teachers to seamlessly align with
            our integrated curriculum and cutting-edge methodologies.With this,
            we ensure that dreams are not just nurtured but fulfilled, because
            at CANVAX, Your Dreams Are Our Dreams.
          </p>
          <p className="m-4 border border-black p-2">
            Tech Enabled Framework At CANVAX, our tech-enabled framework,
            featuring in-house applications like nLearn, for online
            self-learning and nConnect, for school-parent connect, keeps our
            stakeholders abreast in this fast-paced world. Apart from 150 crore
            minutes of videos and lectures and I crore + tests conducted online,
            our smart classrooms and tech workshops, including robotics, ensure
            our students stay at the forefront of technological advancements. We
            ensure the dreams of continuous learning never take a back seat as,
            Your Dreams Are Our Dreams.
          </p>
          <p className="m-4 border border-black p-2">
            Mental Wellness At CANVAX, we are partners in the journey towards
            success, and our strong team of psychologists and counsellors at
            DISHA, the metal wellness programme, provides over 2.5 lakh hours of
            counselling to the students to help them overcome challenges &
            conquer the world with resilience and confidence, as Your Dreams Are
            Our Dreams. Overall Development Our team of over 500 Physical
            Education and Soft Skill Trainers, nurture physical agility,
            personality development, creative thinking, scientific exploration,
            and more. We fulfil the dream of shaping well rounded individuals,
            as Your Dreams Are Our Dreams.
          </p>
        </div>
      </div>
      <div className=" block">
        <div className="grid grid-rows-1 grid-cols-1gap-2 sm:grid-cols-2 place-items-center lg:grid-cols-4 m-4">
          <img src={camera} alt="CC cam" className="max-w-[200px] mb-2" />
          <img src={carriculam} alt="CC cam" className="max-w-[200px] mb-2" />
          <img src={team} alt="CC cam" className="max-w-[200px] mb-2" />
          <img src={engage} alt="CC cam" className="max-w-[200px] mb-2" />
        </div>
      </div>
    </div>
  );
};

export default Wind;
