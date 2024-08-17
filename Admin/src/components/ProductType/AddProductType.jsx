import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import { addProductTypeAction } from "../../store/actions/productActions";

const AddProductType = ({ showModal }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  //  if there are products we take first as default
  const [productId, setProductId] = useState(products ? products[0].id : "");

  // add product type handeler
  const addProductTypeHandeler = (e) => {
    e.preventDefault();
    if (productId && type && price) {
      const submitedType = {
        type,
        price,
        productId,
      };

      // dispacthing action to add the type
      setBtnLoader(true);
      dispatch(addProductTypeAction(submitedType, showModal, setBtnLoader));
    } else {
      toast.error("Some fields are blank !");
    }
  };

  return (
    <form
      className=" px-2 py-3 flex flex-col  gap-2 font-poppins w-full"
      onSubmit={addProductTypeHandeler}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className="text-lg">
          SELECT PRODUCT
        </label>
        <select
          className="w-full p-2 bg-gray-100 rounded-md"
          onChange={(e) => setProductId(e.target.value)}
          value={productId}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="categoryname" className=" text-lg">
          PRODUCT TYPE
        </label>
        <input
          type="text"
          placeholder="Product Unit (ex : 100ml , 1kg , 500gm)"
          className="w-full p-2 bg-gray-100 rounded-md"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="imageurl" className=" text-lg">
          PRICE
        </label>
        <input
          type="number"
          placeholder="Product Price"
          className="w-full p-2 bg-gray-100 rounded-md"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-pink-500 text-white mt-5 flex justify-center items-center  rounded-md py-2"
      >
        {btnLoader ? (
          <RiLoader3Fill className="text-2xl animate-spin" />
        ) : (
          "Add Type"
        )}
      </button>
    </form>
  );
};

export default AddProductType;
