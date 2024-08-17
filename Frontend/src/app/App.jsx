import Header from "../components/common/Header";
import Wrapper from "../components/common/Wrapper";
import MyRoutes from "../routes/MyRoutes";
import AuthModal from "../components/Auth/AuthModal";
import PageLoader from "../components/common/PageLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserAction } from "../store/actions/authActions";
import "./App.css";

const App = () => {
  const { showAuthModal } = useSelector((state) => state.authSlice);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  // dispatching the action to get all the main categories & verify user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyUserAction(token, setLoader));
    } else {
      setLoader(false);
    }
  }, []);

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <>
          {showAuthModal && <AuthModal />}
          <Header />
          <Wrapper>
            <MyRoutes />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default App;
