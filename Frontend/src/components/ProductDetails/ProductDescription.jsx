import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className=" w-full md:w-[90%] flex flex-col gap-2 px-10 md:px-5">
      <h1 className=" text-xl font-medium">About The Product</h1>
      <ul className="text-gray-500 flex flex-col gap-2 list-disc">
        <li>Discription: {description}</li>
        <li>Country of Origin: India</li>
        <li>Shelf Life: 90 days</li>
        <li>FSSAI License: 10012031000312</li>
        <li>Manufacturer Name: ITC Limited</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
