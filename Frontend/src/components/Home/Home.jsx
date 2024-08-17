import TopBanner from "./TopBanner";
import MidBanner from "./MidBanner";
import AllCategory from "./AllCategory";
import ProductsContainer from "./ProductsContainer";
import SkeletonContainer from "./SkeletonContainer";
import CartFooter from "../Cart/CartFooter";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoriesAction } from "../../store/actions/categoryActions";
import CategorySkeleton from "./CategorySkeleton";
const Home = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction(setLoader));
  }, []);

  return (
    <>
      <TopBanner />
      <MidBanner />
      {loader ? (
        <>
          <CategorySkeleton />
          <SkeletonContainer />
        </>
      ) : (
        <>
          <AllCategory />
          <ProductsContainer />
        </>
      )}

      <CartFooter />
    </>
  );
};

export default Home;
