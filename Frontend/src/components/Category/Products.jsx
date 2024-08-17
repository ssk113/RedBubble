import formatNames from "../../functions/formatNames";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsBySubId } from "../../api/agent";
import CartBtn from "../buttons/CartBtn";
import Error from "../common/Error";
import PageLoader from "../common/PageLoader";

const Products = () => {
  const { subid, id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const { data } = await getProductsBySubId(subid, id);
        setProducts(data);
        setLoader(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, [subid]);

  // navigating user to product details page
  const goToProductDetails = (prodId) => {
    navigate(`/category/${id}/${subid}/${prodId}`);
  };

  return (
    <>
      {error ? (
        <Error component={"products .."} />
      ) : (
        <>
          {loader ? (
            <PageLoader />
          ) : (
            <>
              {" "}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 m-2 mt-5 pt-3 ">
                {products.map((product) => {
                  return (
                    <div
                      className="w-full h-[20rem] grid border p-4 rounded-md shadow-md bg-white cursor-pointer "
                      onClick={() => {
                        goToProductDetails(product.id);
                      }}
                      key={product.id}
                      style={{ gridTemplateRows: "10rem 2fr 1fr 1fr" }}
                    >
                      <div className="w-full p-1 rounded-md ">
                        <img
                          src={product.imageUrls[0]}
                          className=" w-full h-full object-contain rounded-md"
                        />
                      </div>
                      <p className=" font-semibold font-poppins w-fit text-sm">
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
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;
