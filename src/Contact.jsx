import React from "react";

const Call = () => {
  function update() {
    let div = document.querySelector(".update");
    div.innerHTML = "Thanks! We will contact you";
  }
  return (
    <div className="font-serif bg-gradient-to-r from-cyan-500 to-blue-500 m-2 sm:m-4border border-black">
      <div className=" text-center flex flex-col  items-center justify-center">
        <div className="border border-black shadow-green-800 shadow-md w-4/5 m-2 flex flex-col gap-4 items-center justify-center ">
          <h1 className="text-3xl font-bold text-white"> CONTACT</h1>
          <h1 className="text-xl font-bold text-white">
            {" "}
            Please fill these form correctly we will contact you on following
            number or email
          </h1>
          <label htmlFor="Name">
            <input
              type="text"
              placeholder="Plesase enter your name"
              className="border-black border-2 "
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              className="border-black border-2 "
              placeholder="please enter email"
              required
            />
          </label>
          <label htmlFor="number">
            <input
              type="number"
              className="border-black border-2 tex"
              placeholder=" mobile number"
              required
            />
          </label>

          <button
            on
            onClick={update}
            className="border-white border-2 bg-black text-white w-44 m-2 p-2"
          >
            SUBMIT
          </button>

          <div className="update text-white"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-4/5 gap-7">
          <div className="border-black  border text-center ">
            <h1>India Office</h1>
            <p>Office :7-89,marhalli,Banglore</p>
            <p>office mail :sajidscd02@gmail.com</p>
          </div>
          <div className="border-black  border text-center ">
            <h1>USA</h1>
            <p> office:9-73,st louis,texas</p>
            <p>office mail:sajidscd02@gmail.com</p>
          </div>
          <div className="border-black  border text-center ">
            <h1>AUSTRALIA</h1>
            <p> office:55/333,peter street,sydney</p>
            <p>office mail:sajidscd02@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
