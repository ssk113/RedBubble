import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "../store/actions/categoryActions";
const useFetchCategories = (setError, setLoader) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAction(setError, setLoader));
  }, []);
};

export default useFetchCategories;
