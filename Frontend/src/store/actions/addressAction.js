import { addAddress, getAddresses } from "../../api/agent"
import { addAdress } from "../reducers/addressSlice"
import toast from "react-hot-toast"


// for add a new address
export const addAdressAction = (addedAdress, showModal, setBtnLoader) => {
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        if (!token) {
            toast.error("Login Again !")
            return
        }
        setBtnLoader(true)
        try {

            const { data } = await addAddress(addedAdress, token)
            const { addresses } = getState().addressSlice
            const newAddresses = [...addresses, data]
            setBtnLoader(false)
            dispatch(addAdress(newAddresses))
            showModal(false)
        } catch (error) {
            toast.error("Some error occurred ! ")
            setBtnLoader(false)
            throw error

        }
    }
}


export const getAddreesesAction = (setAddress) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem("token")
        if (!token) {
            toast.error("Login Again ")
            return;
        }
        try {
            const { data } = await getAddresses(token)
            if (data && setAddress) {
                setAddress(data[0])
            }
            dispatch(addAdress(data))
        } catch (error) {
            console.log(error)
        }
    }
}