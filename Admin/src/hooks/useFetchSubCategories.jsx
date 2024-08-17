import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllSubcategoriesAction } from "../store/actions/categoryActions";

const useFetchSubCategories = (setError, setLoader) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubcategoriesAction(setError, setLoader));
  }, []);
};

export default useFetchSubCategories;
