import { loginUser, signupUser, verifyUser } from "../../api/agent"
import toast from "react-hot-toast"
import { setUserDetails, closeAuthModal, setUserLoggedIn, logOutUser } from "../reducers/authSlice"
import { setCartEmpty, setCartItem } from "../reducers/cartSlice"

export const signUpAction = (userData, setBtnLoader) => {
    return async (dispatch) => {
        try {
            setBtnLoader(true)
            const { data } = await signupUser(userData)

            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }

            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))
            dispatch(closeAuthModal())
            dispatch(setUserLoggedIn())

            localStorage.setItem('token', data.token)
            toast.success("Account Created !")

        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message)
        }
        setBtnLoader(false)

    }
}


// login action
export const logInAction = (userData, setBtnLoader) => {
    return async (dispatch) => {
        try {
            setBtnLoader(true)
            const { data } = await loginUser(userData)
            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }
            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))

            // reforming the cart items storing the producttypeId as a key
            const cartItems = {}
            data.cart.forEach(element => {
                cartItems[element.productTypeId] = { ...element }
            });

            dispatch(setCartItem(cartItems))
            dispatch(closeAuthModal())
            dispatch(setUserLoggedIn())

            localStorage.setItem('token', data.token)
            toast.success("Succesfully LoggedIn !")


        } catch (err) {
            toast.error(err.response.data.message)
        }

        setBtnLoader(false)
    }
}


// verify user on page refreh 
export const verifyUserAction = (token, setLoader) => {
    return async (dispatch) => {
        try {
            const { data } = await verifyUser(token)

            // getting the user details form data 
            const userDetails = {
                name: data.name,
                email: data.email
            }
            // storing the user details in the store 
            dispatch(setUserDetails(userDetails))

            // reforming the cart items storing the producttypeId as a key
            const cartItems = {}
            data.cart.forEach(element => {
                cartItems[element.productTypeId] = { ...element }
            });

            dispatch(setCartItem(cartItems))
            dispatch(setUserLoggedIn())
            setLoader(false)
        } catch (error) {
            console.log(error)
            toast.error("LogIn Again !")
            setLoader(false)
        }
    }
}

// for logout 
export const logOutAction = () => {
    return (dispatch) => {
        dispatch(logOutUser())
        dispatch(setCartEmpty())
        localStorage.removeItem('token')
    }
}