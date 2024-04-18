import React from "react";

const products = () => {
  return (
    <div className="product w-full h-[600px] px-8 flex items-center">
      <div className="flex items-center justify-between">
        <div className="flex-col">
        <div className="poppins-bold text-[70px] text-white">Our Products</div>
        <button className='text-white mt-10 text-[20px] w-64 font-extrabold h-20 rounded-full poppins bg-transparent border-2 border-white'>SHOP ALL PRODUCTS</button>
        </div>
        <div className="flex-col w-[45%]">
          <p className=" text-[25px] poppins-bold text-white">
            Our coconut products celebrate all that’s awesome about our husky
            friend. We’ve been blending, drying, fermenting and grinding them
            since 2014.
          </p>
          <p className="poppins-bold text-[25px] mt-10 text-white">
            Among other things, we’ve become known for our products made from
            coconut sap and dried coconut milk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default products;
