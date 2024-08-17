import { Route, Routes } from "react-router-dom";
// importing components
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import SubCategory from "../components/SubCategory/SubCategory";
import ProductType from "../components/ProductType/ProductType";
import Offers from "../components/Offers/Offers";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import PageWrapper from "../components/Wrapper/PageWrapper";
import Auth from "../components/Auth/Auth";
import { useSelector } from "react-redux";

const MyRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <SideBar />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/subcategory" element={<SubCategory />} />
              <Route path="/producttypes" element={<ProductType />} />
              <Route path="*" element={<Products />} />
            </Routes>
          </PageWrapper>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      )}
    </>
  );
};

export default MyRoutes;
