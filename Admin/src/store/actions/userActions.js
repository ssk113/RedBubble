import { addUsers } from "../reducers/userSlice"
import toast from "react-hot-toast"
import { getAllUsersApi } from "../../api/agent"

// get all users action to fecth all the users 
export const getAllUserAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await getAllUsersApi()
            if (data) {
                dispatch(addUsers(data))
            }
            else {
                toast.error("error while getting all the users")
            }
        } catch (error) {
            throw error
        }
    }
}