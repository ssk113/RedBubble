import { useState } from "react";
import MyRoutes from "../Routes/MyRoutes";
import useVerfiyAdmin from "../hooks/useVerfiyAdmin";
import "./App.css";
import PageLoader from "../components/Loaders/PageLoader";

const App = () => {
  const [loader, setLoader] = useState(true);

  // use verify admin hook to check admin is logged in or not
  useVerfiyAdmin(setLoader);

  return <>{loader ? <PageLoader /> : <MyRoutes />}</>;
};
export default App;
