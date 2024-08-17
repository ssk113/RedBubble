import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyAdminAction } from "../store/actions/authActions";

const useVerfiyAdmin = (setLoader) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyAdminAction(navigate, setLoader));
  }, []);
};

export default useVerfiyAdmin;
