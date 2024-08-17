import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../api/agent";
import SideBar from "./SideBar";
import Products from "./Products";
import CartFooter from "../Cart/CartFooter";
import toast from "react-hot-toast";
import Error from "../common/Error";
import PageLoader from "../common/PageLoader";

const Category = () => {
  const [categories, setCatgeories] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  // useeffect for fetching all the subcategory data that relateed to maincategory
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await getCategoryById(Number(id));
          setCatgeories(data);
          setLoader(false);
        } catch (error) {
          setError(true);
          toast.error("Error ! while getting the products");
        }
      })();
    }, []);
  } else {
    setError(true);
  }

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
              <div className="flex">
                <SideBar categories={categories} path={id} />
                <Products />
              </div>
              <CartFooter />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Category;
