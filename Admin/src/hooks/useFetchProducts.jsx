import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../store/actions/productActions";

const useFetchProducts = (setError, setLoader) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction(setError, setLoader));
  }, []);
};

export default useFetchProducts;
