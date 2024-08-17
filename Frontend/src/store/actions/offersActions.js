import { getOffers } from "../../api/agent"
import { addOffers } from "../reducers/offerSlice"
import toast from "react-hot-toast"

//get offers action to fetch the offers 
export const getOffersAction = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if (!token) {
            toast.error("user not found login again")
            return
        }
        try {
            const { data } = await getOffers(token)
            const formatedData = data.map((value) => {
                return {
                    id: value.id,
                    createdOfferId: value.createdoffer.id,
                    offerName: value.createdoffer.offerName,
                    minValue: value.createdoffer.minValue,
                    discount: value.createdoffer.discount,
                }
            })

            dispatch(addOffers(formatedData))
        } catch (error) {
            toast.error('error while fetching offers')
            throw error
        }


    }
}