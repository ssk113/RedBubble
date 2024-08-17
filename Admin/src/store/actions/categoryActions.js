import toast from "react-hot-toast"
import { addcategory, addSubCategory } from "../reducers/categorySlice"

import {
    addCategory,
    getAllCategories,
    getAllSubcategories,
    addSubcategory
} from "../../api/agent"
// to add a main category 
export const addCategoryAction = (categoryVal, showModal, setLoader) => {
    const token = localStorage.getItem("token")
    if (!token) {
        return toast.error("Log in again")
    }
    return async (dispatch, getState) => {
        try {

            const { data } = await addCategory(categoryVal, token)
            const { categories } = getState().categorySlice

            const categoryAdded = {
                name: data.name,
                imageUrl: data.imageUrl,
                id: data.id
            }
            const newCategory = [...categories, categoryAdded]
            dispatch(addcategory(newCategory))
            toast.success("Added !")
            showModal(false)
        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoader(false)
    }
}

// for getting all the main categories 
export const getAllCategoriesAction = (setError, setLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await getAllCategories()
            dispatch(addcategory(data))
            setLoader(false)
        } catch (err) {
            setError(true)
            toast.error(err.response.data.message)
        }
    }
}


// for add a subcategory under the maincatgeory 
export const addSubCategoryAction = (subCategoryVal, setLoader, showModal) => {
    const token = localStorage.getItem("token")
    if (!token) {
        return toast.error("Log in again")
    }
    return async (dispatch, getState) => {
        try {
            const { data } = await addSubcategory(subCategoryVal, token)
            const { subCategories } = getState().categorySlice
            // Added sub categroy 
            const addedSubcategory = {
                name: data.name,
                imageUrl: data.imageUrl,
                id: data.id,
                mainCategoryId: data.mainCategoryId,
            }

            const newSubCategory = [...subCategories, addedSubcategory]
            dispatch(addSubCategory(newSubCategory))
            toast.success('Subcategory Added ! ')
            showModal(false)

        } catch (error) {
            toast.error(err.response.data.message)
        }
        setLoader(false)
    }
}


// for getting all the subcategories 

export const getAllSubcategoriesAction = (setError, setLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await getAllSubcategories()
            dispatch(addSubCategory(data))
            setLoader(false)
        } catch (error) {
            setError(true)
        }
    }
}