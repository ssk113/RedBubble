import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

// creating base URL
const api = axios.create({
    baseURL,
});

// authentication apis
export const signupUser = (userData) => api.post('/signup', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const verifyUser = (token) => api.post('/verifyuser', { token });

// category
export const getCategories = () => api.get('/getcategories');
export const getCategoryById = (categoryId) => {
    return api.get(`/getcategorybyid?id=${categoryId}`)
}
export const getProductsBySubId = (subid, id) => {
    return api.get(`/getproductbysubid?subid=${subid}&id=${id}`)
}

// product
export const getProductDetails = (productId) => {
    return api.get(`/getproductdetails?id=${productId}`)
}


// cart
export const addToCart = (cartData, token) => {
    return api.post('/addtocart', cartData, { headers: { token } })
}
export const increaseCartQuantity = (cartData, token) => {
    return api.post('/increasequantity', cartData, { headers: { token } })
}
export const decreaseCartQuantity = (cartData, token) => {
    return api.post('/decreasequantity', cartData, { headers: { token } })
}
export const getCart = (token) => {
    return api.get('/getcart', { headers: { token } })
}

// address
export const addAddress = (addressData, token) => {
    return api.post('/addaddress', addressData, { headers: { token } })
}
export const getAddresses = (token) => {
    return api.get('/getaddresses', { headers: { token } })
}

// offers
export const getOffers = (token) => api.get('/getoffers', { headers: { token: token } });

// order 
export const createOrder = (appliedOffer, token) => {
    return api.post('/order/createorder',
        { offerId: appliedOffer && appliedOffer.createdOfferId },
        { headers: { token } })
}

export const orderCompleted = (orderData, token) => {
    return api.post('/order/ordercompleted', orderData, { headers: { token } })
}

export const orderFailed = (orderId, token) => {
    return api.post('/order/orderfailed', { orderId }, { headers: { token } })
}
export const getOrders = (token) => {
    return api.get('/order/getorders', { headers: { token } })
}
export const getOrderDetails = (orderId, token) => {
    return api.get(`/order/getorderdetails?orderid=${orderId}`, { headers: { token } })
}

// search
export const searchProducts = (searchTerm) => api.get(`/search/getproducts?s=${searchTerm}`);

// export
export default api;




