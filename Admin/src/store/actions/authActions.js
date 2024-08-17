import toast from "react-hot-toast"
import { logInAdmin } from "../reducers/authSlice"
import { loginAdmin, verifyAdmin } from "../../api/agent"

export const adminLoginAction = (submitedVal, navigate, setBtnLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await loginAdmin(submitedVal)
            dispatch(logInAdmin(data.email))
            localStorage.setItem("token", data.token)
            toast.success("Login Success")
            navigate("/categories")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        setBtnLoader(false)
    }
}


export const verifyAdminAction = (navigate, setLoader) => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const { data } = await verifyAdmin(token);
                dispatch(logInAdmin(data.email));

            } catch (error) {
                toast.error(error.response.data.message);
            }

        }
        else {
            navigate("/");
        }
        setLoader(false)

    }
}