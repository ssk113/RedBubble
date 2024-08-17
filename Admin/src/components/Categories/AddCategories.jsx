import { useDispatch } from "react-redux";
import { addCategoryAction } from "../../store/actions/categoryActions";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import toast from "react-hot-toast";

const AddCategories = ({ showModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  // function to add new category
  const addNewCategory = (e) => {
    e.preventDefault();
    if (!name.trim() || !imageUrl.trim()) {
      return toast.error("Some fields are blank");
    }
    setLoader(true);
    const addedCategory = {
      name,
      imageUrl,
    };

    // Dispacthing action to add category
    dispatch(addCategoryAction(addedCategory, showModal, setLoader));
    setName("");
    setImageUrl("");
  };

  return (
    <form
      className=" px-2 py-3 flex flex-col  gap-2 font-poppins w-full"
      onSubmit={addNewCategory}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className=" text-lg">
          Category Name
        </label>
        <input
          type="text"
          placeholder="Name of the main category"
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className=" text-lg">
          Image Url
        </label>
        <input
          type="text"
          placeholder="Name of the main category"
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
          required
        />
      </div>

      <button className="primary-linear-bg text-white mt-5 flex justify-center items-center  rounded-md py-2">
        {loader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "Add a New Category"
        )}
      </button>
    </form>
  );
};

export default AddCategories;
