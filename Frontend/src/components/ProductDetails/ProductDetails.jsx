import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../api/agent";
import ProductCarousel from "./ProductCarousel";
import ProductTypes from "./ProductTypes";
import ProductDescription from "./ProductDescription";
import CartFooter from "../Cart/CartFooter";
import Working from "./Working";
import Loader from "./Loader";
import Error from "../common/Error";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { productid } = useParams();

  // useffect for fetch the product details
  if (productid) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await getProductDetails(productid);
          setProduct(data);
          setLoader(false);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      })();
    }, []);
  } else {
    setError(true);
  }

  return (
    <>
      {error ? (
        <Error component={"order details .."} />
      ) : (
        <>
          {loader ? (
            <Loader />
          ) : (
            <div className=" px-2 mb-24 md:mb-0">
              <div className=" flex flex-col md:flex-row gap-4 mt-5 mb-5 ">
                <ProductCarousel images={product.imageUrls} />
                <ProductTypes
                  productName={product.name}
                  category={product.mainCategory}
                  productType={product.productTypes}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4  ">
                <ProductDescription description={product.description} />
                <Working />
              </div>
            </div>
          )}
          <CartFooter />
        </>
      )}
    </>
  );
};

export default ProductDetails;
