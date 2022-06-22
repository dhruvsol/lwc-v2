import React from "react";

export const Card = () => {
  return (
    <>
      <div className="flex justify-center my-10 md:my-0">
        <div className="bg-[#FBD8C6] h-[27rem] w-[20rem] flex flex-col justify-between rounded-xl shadow dark:bg-[#372B2D] hover:shadow-xl">
          <h1 className="pt-10 w-5/6 mx-6 text-xl font-semibold text-[#3C2A31] dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            voluptate.
          </h1>
          <button className="flex justify-center mb-10 mx-6 p-2 font-semibold rounded-xl w-32 bg-[#FEF2EC] dark:bg-[#22181C]">
            Read article
          </button>
        </div>
      </div>
    </>
  );
};
