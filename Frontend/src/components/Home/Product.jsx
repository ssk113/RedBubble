import { useNavigate } from "react-router-dom";
import formatNames from "../../functions/formatNames";
import CartBtn from "../buttons/CartBtn";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const getProductDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="w-[13rem] h-[20rem] grid  shadow-md border px-4 py-2 rounded-md bg-white"
      onClick={getProductDetails}
      style={{ gridTemplateRows: "11rem 2fr 1fr 1fr" }}
    >
      <div className="w-full h-full ">
        <img
          src={product.imageUrls[0]}
          className=" w-full h-full object-contain rounded-md"
        />
      </div>
      <h1 className=" font-semibold">{formatNames(product.name)}</h1>
      {product.productTypes[0] && (
        <>
          <h1>{`${product.productTypes[0].type} | ${product.productTypes.length} options`}</h1>
          <div className="flex justify-between items-center">
            <h1 className=" font-medium text-xl">
              &#8377; {product.productTypes[0].price}
            </h1>
            <CartBtn id={product.productTypes[0].id} />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
