import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Addresses from "./Addresses";
import OrderDetails from "./OrderDetails";
import Support from "./Support";
import Profile from "./Profile";
import Home from "./Home";

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/support" element={<Support />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders/:orderid" element={<OrderDetails />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AccountRoutes;
