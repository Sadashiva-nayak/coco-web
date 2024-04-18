import React from "react";

const bulk = () => {
  return (
    <div>
      <div className="bulk w-full h-[600px] px-8 flex items-center">
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <div className="poppins-bold text-[90px] w-[80%] text-white">
              Products in Bulk
            </div>
            <button className="text-white mt-10 text-[20px] w-64 font-extrabold h-20 rounded-full poppins bg-transparent border-2 border-white">
              BUY IN BULK
            </button>
          </div>
          <p className=" text-[25px] w-[50%] poppins-bold text-white">
            A few years ago, we were asked by various manufacturers to start
            supplying our lovely products in bulk. So that’s exactly what we
            did. Today, we trade multiple niche coconut ingredients to some
            fabulous health food companies across the globe that blend our stuff
            into exciting new things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default bulk;
