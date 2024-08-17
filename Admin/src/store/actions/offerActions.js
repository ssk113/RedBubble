import { addCreatedOffer, addGivenOffer } from "../reducers/offerSlice"
import { createOfferApi, getCreatedOffersApi, getGivenOffersApi, giveOfferApi } from "../../api/agent"
import toast from "react-hot-toast"

// create offer action for create an offer and store into db
export const createOfferAction = (addedOffer, setLoader, setOffers, showModal) => {
    const token = localStorage.getItem("token")
    if (!token) {
        return toast.error("Login again")
    }
    return async (dispatch, getState) => {
        try {
            const { data } = await createOfferApi(addedOffer, token)
            const { createdOffers } = getState().offerSlice
            const newOffers = [...createdOffers, data]
            dispatch(addCreatedOffer(newOffers))
            toast.success("Offer Created")
            setOffers(null)
            showModal(false)
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setLoader(false)
    }
}

// get all created offers action to fecth all created offers
export const getAllCreatedOffersAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await getCreatedOffersApi()
            if (data) {
                dispatch(addCreatedOffer(data))
            }
            else {
                toast.error("error while fetching created offers")
            }

        } catch (error) {
            toast.error(error.response.data.message)
            throw error
        }
    }
}

// get all gievn offers action to fecth all given offers
export const getAllGivenOffersAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await getGivenOffersApi()
            if (data) {
                dispatch(addGivenOffer(data))
            }
            else {
                toast.error("error while fetching given offers")
            }

        } catch (error) {
            toast.error(error.response.data.message)
            throw error
        }

    }
}

// give offer action to give offer to a user 
export const giveOfferAction = (offerDetails, setBtnLoader, showModal) => {

    const token = localStorage.getItem("token")
    if (!token) {
        return toast.error("Login again")
    }
    return async (dispatch, getState) => {
        setBtnLoader(true)
        try {

            const { data } = await giveOfferApi(offerDetails, token)
            const { givenOffers } = getState().offerSlice
            const newOffers = [...givenOffers, data]
            dispatch(addGivenOffer(newOffers))
            showModal(false)
            toast.success('Offer Given')
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setBtnLoader(false)
    }
}