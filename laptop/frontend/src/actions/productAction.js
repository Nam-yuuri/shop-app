import axios from 'axios';
import axiosClient from '../api/axiosClient';

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS,
    N_PRODUCT_REQUEST,
    N_PRODUCT_SUCCESS,
    N_PRODUCT_FAIL,
    TOP_PRODUCT_REQUEST,
    TOP_PRODUCT_SUCCESS,
    TOP_PRODUCT_FAIL,
    ALL_PRODUCT_REVIEW_REQUEST,
    ALL_PRODUCT_REVIEW_SUCCESS,
    ALL_PRODUCT_REVIEW_FAIL,
    BRAND_PRODUCT_SUCCESS,
    BRAND_PRODUCT_REQUEST,
    BRAND_PRODUCT_FAIL,
} from '../constants/productConstants';

// Get All Products
export const getProduct =
    (
        currentPage = 1,
        // brand,
        // cost = [0, 151],
        // ratings = 0,
        sort,
        // keyword = '',
        RAM = '8GB',
        // CPU,
        // machineSeries,
        // Monitor = [11, 100],
    ) =>
    async (dispatch) => {
        try {
            dispatch({ type: ALL_PRODUCT_REQUEST });

            // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&cost[gte]=${cost[0]}&cost[lte]=${cost[1]}&ratings[gte]=${ratings}&${sort}`;

            // if (brand) {
            //   link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&cost[gte]=${cost[0]}&cost[lte]=${cost[1]}&brand=${brand}&ratings[gte]=${ratings}&${sort}`;
            // }

            // let priceSort0 = cost[0] * 1000000;
            // let priceSort1 = cost[1] * 1000000;

            // let link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;

            // if (brand) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&brand=${brand}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            // }

            // if (RAM) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            // }

            // if (CPU) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            // }

            // if (machineSeries) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&machineSeries=${machineSeries}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            // }

            // const { data } = await axios.get(`http://localhost:8000/api/v1/products?&page=${currentPage}&${sort}}`);
            const { data } = await axios.get(`http://localhost:8000/api/v1/products?page=${currentPage}&${sort}`);
            // const { data } = await axios.get(`http://localhost:8000/api/v1/products`);

            // console.log("data: ", data.product)

            dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCT_FAIL,
                payload: error.response.data.message,
            });
        }
    };

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/admin/products');

        // console.log('product db: ', data.data.product);

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.data.product,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Top Products For Admin
export const getTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: TOP_PRODUCT_REQUEST });

        // const token = localStorage.getItem('token');
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `token ${token}`,
        //     },
        // };

        // const data = await axiosClient.get('/api/v1/admin/topProducts', config);
        const data = await axios.get('http://localhost:8000/api/v1/product/top');
        // console.log('product db: ', data.data.product);

        dispatch({
            type: TOP_PRODUCT_SUCCESS,
            payload: data.data.product,
        });
    } catch (error) {
        dispatch({
            type: TOP_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

const RAM = '';
const CPU = '';
const Color = '';
const Monitor = '';
const Operating_system = '';
// Get Top Products with brand
export const getBrandProducts =
    (id, currentPage = 1, cost = [0, 150], keyword = '', RAM, CPU, Color, Monitor, Operating_system) =>
    async (dispatch) => {
        try {
            dispatch({ type: BRAND_PRODUCT_REQUEST });

            let priceSort0 = cost[0] * 1000000;
            let priceSort1 = cost[1] * 1000000;

            let link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}`;

            // if (RAM && CPU && Color && Monitor && Operating_system) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            // }

            // 4
            //1,2,3,4
            if (RAM && CPU && Color && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}`;
            }
            //1,2,3,5
            if (RAM && CPU && Color && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Operating_system=${Operating_system}`;
            }
            //1,2,4,5
            if (RAM && CPU && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }
            //1,3,4,5
            if (RAM && Color && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }
            //2,3,4,5
            if (CPU && Color && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }

            // if (RAM && CPU && Color && Monitor && Operating_system) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            // }

            //3
            //1,2,3
            if (RAM && CPU && Color) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}`;
            }
            //1,2,4
            if (RAM && CPU && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Monitor=${Monitor}`;
            }
            //1,2,5
            if (RAM && CPU && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Operating_system=${Operating_system}`;
            }
            //2,3,4
            if (CPU && Color && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}`;
            }
            //2,3,5
            if (CPU && Color && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Operating_system=${Operating_system}`;
            }
            //3,4,5
            if (Color && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }
            //1,3,4
            if (RAM && Color && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Color=${Color}&Monitor=${Monitor}`;
            }
            //1,3,5
            if (RAM && Color && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Color=${Color}&Operating_system=${Operating_system}`;
            }
            //1,4,5
            if (RAM && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }
            //2,4,5
            if (CPU && Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }

            // if (RAM && CPU && Color && Monitor && Operating_system) {
            //     link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}&Color=${Color}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            // }

            //2
            if (RAM && CPU) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&CPU=${CPU}`;
            }
            if (RAM && Color) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Color=${Color}`;
            }
            if (RAM && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Monitor=${Monitor}`;
            }
            if (RAM && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}&Operating_system=${Operating_system}`;
            }

            if (CPU && Color) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Color=${Color}`;
            }
            if (CPU && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Monitor=${Monitor}`;
            }
            if (CPU && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}&Operating_system=${Operating_system}`;
            }

            if (Color && Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Color=${Color}&Monitor=${Monitor}`;
            }
            if (Color && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Color=${Color}&Operating_system=${Operating_system}`;
            }

            if (Monitor && Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Monitor=${Monitor}&Operating_system=${Operating_system}`;
            }

            //1
            if (RAM) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&RAM=${RAM}`;
            }
            if (CPU) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&CPU=${CPU}`;
            }
            if (Color) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Color=${Color}`;
            }
            if (Monitor) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Monitor=${Monitor}`;
            }
            if (Operating_system) {
                link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}&Operating_system=${Operating_system}`;
            } 
            // else {
            //     // link = `http://localhost:8000/api/v1/user/product/${id}?keyword=${keyword}&cost[gte]=${priceSort0}&cost[lte]=${priceSort1}&page=${currentPage}`;
            // }

            const data = await axios.get(link);
            console.log('product db: ', link);
            console.log('RAM db: ', RAM);
            console.log('Color db: ', Color);
            console.log('CPU db: ', CPU);

            dispatch({
                type: BRAND_PRODUCT_SUCCESS,
                // payload: data.data.product,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: BRAND_PRODUCT_FAIL,
                payload: error.response.data.message,
            });
        }
    };

// Get N Products
export const getNProducts = (numOfProducts) => async (dispatch) => {
    try {
        dispatch({ type: N_PRODUCT_REQUEST });

        const { data } = await axios.get('http://localhost:5000/api/v1/nProducts');

        dispatch({
            type: N_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: N_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: 'NEW_PRODUCT_REQUEST' });

        // const token = localStorage.getItem('token');

        // const config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         Authorization: `token ${token}`,
        //     },
        // };

        // const data = await axios.post(`http://localhost:8000/api/v1/header/new`, productData, config);
        const data = await axios.post(`http://localhost:8000/api/v1/admin/product/new`, productData);

        dispatch({
            type: 'NEW_PRODUCT_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'NEW_PRODUCT_FAIL',
            payload: error.response.data.message,
        });
    }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        // const { data } = await axios.put(`http://localhost:8000/api/v1/admin/product/${id}`, productData, config);
        const { data } = await axios.put(`http://localhost:8000/api/v1/admin/product/${id}`, productData);

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        // const token = localStorage.getItem("token");
        // const config = {
        //   headers: {
        //     Authorization: `token ${token}`,
        //   },
        // };

        // const { data } = await axios.delete(`http://localhost:5000/api/v1/admin/product/${id}`, config);
        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/product/${id}`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const data = await axios.get(`http://localhost:8000/api/v1/product/${id}`);

        // console.log("data: ", data.data.product)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.put(
            `http://localhost:5000/api/v1/review`,
            {
                rating: reviewData.rating,
                comment: reviewData.comment,
                productId: reviewData.productId,
            },
            config,
        );

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST });

        const data = await axiosClient.get(`/api/v1/reviews?id=${id}`);

        dispatch({
            type: ALL_REVIEW_SUCCESS,
            payload: data.reviews,
        });
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Products Reviews
export const getAllProductReviews = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REVIEW_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.get(`http://localhost:5000/api/v1/allReviews`, config);

        dispatch({
            type: ALL_PRODUCT_REVIEW_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.delete(
            `http://localhost:5000/api/v1/reviews?id=${reviewId}&productId=${productId}`,
            config,
        );

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
