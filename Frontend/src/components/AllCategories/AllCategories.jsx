import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.categorySlice);
  const navigate = useNavigate();

  // for navigate to selected category
  const navigateCategory = (id) => {
    navigate(`/category/${id}/all`);
  };
  return (
    <div>
      <h1 className=" mt-10 font-poppins text-2xl "> All Categories</h1>
      <div className="w-full grid grid-cols-3  min-[500px]:grid-cols-5 xl:grid-cols-6 gap-5 m-2 mt-2 pt-3 mb-24 md:mb-0 px-7 md:px-0 ">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className=" grid w-full h-fit py-3 shadow-md border rounded-md cursor-pointer"
              style={{ gridTemplateRows: "11rem 1fr" }}
              onClick={() => {
                navigateCategory(category.id);
              }}
            >
              <img
                src={category.imageUrl}
                className=" w-full h-full object-contain p-2"
              />
              <h1 className=" text-center font-semibold">{category.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
