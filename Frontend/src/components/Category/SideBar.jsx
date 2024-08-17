import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ categories, path }) => {
  return (
    <div
      className="w-[18rem] border overflow-y-scroll h-[calc(100vh-5.75rem)] 
    catgeory-sidebar sticky z-30 top-[5.75rem] left-0 shadow-md flex flex-col hide-scrollbar bg-white"
    >
      <NavLink to={`/category/${path}/all`}>
        <div className=" flex items-center px-4 py-2 gap-4 hover:bg-blue-600 hover:text-white border-y cursor-pointer font-medium text-base">
          <div className=" w-[3rem] h-[3rem] rounded-full bg-[#f7f0fa]">
            <img
              src="https://cdn.zeptonow.com/production///tr:w-90,ar-383-298,pr-true,f-auto,q-80/inventory/subcategory/d74a23c1-f7d4-4d5e-b022-4bf9c86f4231-image"
              className=" w-full h-full object-cover"
            />
          </div>
          <h1 className=" font-poppins">All</h1>
        </div>
      </NavLink>
      {categories.map((category) => {
        return (
          <NavLink to={`/category/${path}/${category.id}`} key={category.id}>
            <div className=" flex items-center px-4 py-2 gap-4 hover:bg-blue-600 hover:text-white border-y cursor-pointer font-medium text-base">
              <div className=" w-[3rem] h-[3rem] rounded-full bg-[#f7f0fa]">
                <img
                  src={category.imageUrl}
                  className=" w-full h-full object-cover"
                />
              </div>
              <h1 className=" font-poppins">{category.name}</h1>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
