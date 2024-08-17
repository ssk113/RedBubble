import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductTypes } from "../store/actions/productActions";

const useFetchProductTypes = (setError, setLoader) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductTypes(setError, setLoader));
  }, []);
};

export default useFetchProductTypes;
