import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Category from "../components/Category/Category";
import Account from "../components/Account/Account";
import Search from "../components/Search/Search";
import AllCategories from "../components/AllCategories/AllCategories";
import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";

const MyRoutes = () => {
  const { isloggedIn } = useSelector((state) => state.authSlice);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/product/:productid" element={<ProductDetails />} />
      <Route path="/category/:id/:subid" element={<Category />} />
      <Route
        path="/category/:id/:subid/:productid"
        element={<ProductDetails />}
      />
      {isloggedIn && <Route path="/cart" element={<Cart />} />}
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Home />} />
      {isloggedIn && <Route path="/account/*" element={<Account />} />}
    </Routes>
  );
};

export default MyRoutes;
