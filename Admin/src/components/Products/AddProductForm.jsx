import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProductAction } from "../../store/actions/productActions";
import { RiLoader3Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import { getSubcategoriesByCategoryApi } from "../../api/agent";

const AddProductForm = ({ showModal }) => {
  const dispatch = useDispatch();
  // taking maincategories and subcategories from the store
  const { categories } = useSelector((state) => state.categorySlice);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageURLs] = useState([""]);
  const [loader, setLoader] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [mainCategoryData, setMainCategoryData] = useState(
    categories.length > 0 ? categories[0] : ""
  );
  const [subCategoryData, setSubCategoryData] = useState(null);

  // useffect for fecth subcategories by main category id
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSubcategoriesByCategoryApi(
          mainCategoryData.id
        );
        setSubCategories(data);
        setSubCategoryData(data[0]);
      } catch (error) {
        toast.error("Subcategoris not found !");
      }
    })();
  }, [mainCategoryData.id]);

  const handleImageChange = (index, value) => {
    const updatedImageURLs = [...imageUrls];
    updatedImageURLs[index] = value;
    setImageURLs(updatedImageURLs);
  };

  const addImageInput = () => {
    setImageURLs([...imageUrls, ""]);
  };

  const removeImageInput = (index) => {
    const updatedImageURLs = [...imageUrls];
    updatedImageURLs.splice(index, 1);
    setImageURLs(updatedImageURLs);
  };

  // when user want to change main category
  const mainCategoryChangeHandeler = (id) => {
    const category = categories.find((category) => category.id == id);
    setMainCategoryData(category);
  };
  // when user want to change sub category
  const subCategoryChangeHandele = (id) => {
    const subCategory = subCategories.find((category) => category.id == id);
    setSubCategoryData(subCategory);
  };

  // for adding a new Product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      !mainCategoryData ||
      !subCategoryData ||
      !name.trim() ||
      !description.trim()
    ) {
      return toast.error("some fields are blank");
    }
    setLoader(true);
    // added product
    const addedProduct = {
      name,
      imageUrls,
      mainCategoryId: mainCategoryData.id,
      subCategoryId: subCategoryData.id,
      mainCategoryName: mainCategoryData.name,
      subCategoryName: subCategoryData.name,
      description,
    };
    console.log(addedProduct);
    dispatch(addProductAction(addedProduct, showModal, setLoader));
  };

  return (
    <form
      className="px-2 py-3 flex flex-col gap-2 font-poppins w-full"
      onSubmit={handleAddProduct}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className="text-lg">
          PRODUCT NAME
        </label>
        <input
          required
          type="text"
          placeholder="Enter name of the product"
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>

      {imageUrls.map((url, index) => (
        <div key={index} className="w-full flex flex-col gap-1">
          <label htmlFor={`imageurl${index + 1}`} className="text-lg">
            IMAGE URL {index + 1}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={`Enter image URL ${index + 1}`}
              className="w-full p-2 bg-gray-100 rounded-md"
              value={url}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeImageInput(index)}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addImageInput}
        className="bg-green-500 text-white p-2 rounded-md"
      >
        Add Another Image
      </button>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT CATEGORY
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => mainCategoryChangeHandeler(e.target.value)}
          value={mainCategoryData.id}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT SUBCATEGORY
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => subCategoryChangeHandele(e.target.value)}
          value={subCategoryData ? subCategoryData.id : ""}
        >
          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className="text-lg">
          PRODUCT DESCRIPTION
        </label>
        <textarea
          required
          type="text"
          placeholder="Enter name of the product"
          className="w-full p-2 h-[10rem] bg-gray-100 rounded-md resize-none"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="bg-pink-500 text-white mt-5 flex justify-center items-center  rounded-md py-2"
      >
        {loader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "Add Product"
        )}
      </button>
    </form>
  );
};

export default AddProductForm;
