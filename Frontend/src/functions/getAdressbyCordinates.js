import toast from "react-hot-toast";
import axios from "axios";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

// function to get the actual adress by the cordinates lattitude and longitude
const getAdressbyCordinates = async (lat, lon) => {

    try {
        const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLE_API_KEY}`
        );
        const formattedAddress =
            data.results[0]?.formatted_address ||
            "Not Found | Select Another Location";
        return formattedAddress

    } catch (error) {
        throw new Error(error)
    }
}


export default getAdressbyCordinates