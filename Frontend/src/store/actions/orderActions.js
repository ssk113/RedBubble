import toast from "react-hot-toast"
import { getOrders } from "../../api/agent"
import { addOrder } from "../reducers/orderSlice"

export const getAllOrdersAction = (setLoader, setError) => {
    const token = localStorage.getItem("token")
    if (!token) {
        toast.error("user not found ! ")
        return
    }
    return async (dispatch) => {
        try {
            const { data } = await getOrders(token)
            dispatch(addOrder(data))
            setLoader(false)

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
}