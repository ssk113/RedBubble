import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../api/agent";
import toast from "react-hot-toast";
import CartBtn from "../buttons/CartBtn";
import formatNames from "../../functions/formatNames";
import CartFooter from "../Cart/CartFooter";

const Search = () => {
  const { searchString } = useSelector((state) => state.searchSlice);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // implemented debouncing
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!searchString) {
        setProducts([]);
        return;
      }
      try {
        const { data } = await searchProducts(searchString);
        setProducts(data);
      } catch (error) {
        toast.error("error while seraching products");
      }
    }, 500);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchString]);

  return (
    <>
      {products.length <= 0 ? (
        <div className=" w-full h-[calc(100vh-6rem)] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-4">
            <div className="h-[20rem] w-[20rem]">
              <img
                src="https://blinkit.com/57070263a359a92dc0fe.png"
                className=" w-full h-full object-contain"
              />
            </div>
            <h1 className=" font-poppins text-2xl opacity-50">
              Nothing here yet
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 m-2 mt-5 pt-3 mb-24 md:mb-0 px-4 ">
          {products.map((product) => {
            return (
              <div
                className="w-full h-[20rem] grid border px-4 py-2 rounded-md shadow-md bg-white "
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
                style={{ gridTemplateRows: "11rem 2fr 1fr 1fr" }}
              >
                <div className="w-full  p-1 rounded-md ">
                  <img
                    src={JSON.parse(product.imageUrls)[0]}
                    className=" w-full h-full object-contain rounded-md"
                  />
                </div>
                <p className=" font-semibold font-poppins w-fit">
                  {formatNames(product.name)}
                </p>
                {product.productTypes[0] && (
                  <>
                    <h1>
                      {`${product.productTypes[0].type} | ${product.productTypes.length} options`}
                    </h1>
                    <div className="flex justify-between items-center">
                      <h1 className=" font-medium text-xl">
                        &#8377;{product.productTypes[0].price}
                      </h1>
                      <CartBtn id={product.productTypes[0].id} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}

      <CartFooter />
    </>
  );
};

export default Search;
