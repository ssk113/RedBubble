import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL,
});

export default api;


// Authentication APIs

/**
 * Login Admin API
 * @param {Object} creds - admin credentials for login
 * @returns {Promise} Axios promise
 */
export const loginAdmin = (creds) => api.post('/login', creds);

/**
 * Verify Admin API
 * @param {string} token - Admin token for verification
 * @returns {Promise} Axios promise
 */
export const verifyAdmin = (token) => api.post('/verifyadmin', { token });

// Category APIs

/**
 * Add Category API
 * @param {Object} categoryData - Data for adding a new category
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const addCategory = (categoryData, token) => {
    return api.post('/addcategory', categoryData, { headers: { token } })
};

/**
 * Get All Categories API
 * @returns {Promise} Axios promise
 */
export const getAllCategories = () => api.get('/getallcategories');

/**
 * Get All Subcategories API
 * @returns {Promise} Axios promise
 */
export const getAllSubcategories = () => api.get('/getallsubcategories');

/**
 * Add Subcategory API
 * @param {Object} subcategoryData - Data for adding a new subcategory
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const addSubcategory = (subcategoryData, token) => {
    return api.post('/addsubcategory', subcategoryData, { headers: { token } })
};

// // Product APIs

/**
 * Get All Products API
 * @returns {Promise} Axios promise
 */
export const getAllProducts = () => api.get('/getallproducts');


/**
 * Add Product API
 * @param {Object} productData - Data for adding a new product
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const addProductApi = (productData, token) => {
    return api.post('/addproduct', productData, { headers: { token } })
};

/**
 * Add Product Type API
 * @param {Object} productTypeData - Data for adding a new product type
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const addProductTypeApi = (productTypeData, token) => {
    return api.post('/addproducttype', productTypeData, { headers: { token } })
};

/**
 * Get Product Types API
 * @returns {Promise} Axios promise
 */
export const getProductTypesApi = () => api.get('/getallproducttypes');

// Offer APIs

/**
 * Create Offer API
 * @param {Object} offerData - Data for creating a new offer
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const createOfferApi = (offerData, token) => {
    return api.post('/offer/createoffer', offerData, { headers: { token } })
};

/**
 * Get Created Offers API
 * @returns {Promise} Axios promise
 */
export const getCreatedOffersApi = () => api.get('/offer/getcreatedoffers');

/**
 * Get Given Offers API
 * @returns {Promise} Axios promise
 */
export const getGivenOffersApi = () => api.get('/offer/getgivenoffers');

/**
 * Give Offer API
 * @param {Object} offerData - Data for giving an offer
 * @param {string} token -  Authentication token
 * @returns {Promise} Axios promise
 */
export const giveOfferApi = (offerData, token) => {
    return api.post('/offer/giveoffer', offerData, { headers: { token } })
};

// // User APIs

/**
 * Get All Users API
 * @returns {Promise} Axios promise
 */
export const getAllUsersApi = () => api.get('/getusers');



/**
 * Get Subcategories by Category ID API
 * @param {string} categoryId - Category ID to get subcategories
 * @returns {Promise} Axios promise
 */
export const getSubcategoriesByCategoryApi = (categoryId) => {
    return api.get(`/category/getsubcategoriesbycategory?id=${categoryId}`)
};
