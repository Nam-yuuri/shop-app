import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    newProductReducer,
    nProductsReducer,
    productDetailsReducer,
    productReducer,
    productsAdminReducer,
    productsReducer,
    topProductsReducer,
} from './reducers/productReducer';

// import {
//   newCategoryReducer,
//   categoriesReducer,
//   categoryReducer,
//   categoryDetailsReducer,
// } from "./reducers/categoryReducer.js";

// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//   profileReducer,
//   userDetailsReducer,
//   userReducer,
// } from "./reducers/userReducer";
// import { cartLocalReducer, cartReducer } from "./reducers/cartReducer";

// import {
//   allOrdersReducer,
//   allOrdersStatisticalReducer,
//   myOrdersReducer,
//   newOrderReducer,
//   orderDetailsReducer,
//   orderReducer,
//   allOrdersStatusReducer,
// } from "./reducers/orderReducer";

import {
    // bannerDetailsReducer,
    // bannerReducer,
    bannersReducer,
    mainBannersReducer,
    newBannerReducer,
} from './reducers/bannerReducer';

import { carouselsReducer } from './reducers/carouselReducer';

import {
    bannersHorizontalReducer,
    mainHorizontalReducer,
    newBannerHorizontalReducer,
    bannerHorizontalReducer,
} from './reducers/bannerHorizontalReducer';

import { headersReducer, mainHeaderReducer } from './reducers/headerReducer';

import { brandsReducer } from './reducers/brandReducer';

import { promotionsReducer, mainPromotionReducer } from './reducers/promotionReducer';

import {showroomsReducer} from './reducers/showroomReducer'

const reducer = combineReducers({
    // Product
    products: productsReducer,
    productsAdmin: productsAdminReducer,
    topProducts: topProductsReducer,
    productDetails: productDetailsReducer,
    nProducts: nProductsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    // // User
    // user: userReducer,
    // profile: profileReducer,
    // forgotPassword: forgotPasswordReducer,
    // allUsers: allUsersReducer,
    // userDetails: userDetailsReducer,
    // // Category
    // categories: categoriesReducer,
    // categoryDetails: categoryDetailsReducer,
    // newCategory: newCategoryReducer,
    // category: categoryReducer,
    // //Cart
    // cart: cartReducer,
    // cartLocal: cartLocalReducer,
    // //Order
    // newOrder: newOrderReducer,
    // myOrders: myOrdersReducer,
    // orderDetails: orderDetailsReducer,
    // allOrders: allOrdersReducer,
    // order: orderReducer,
    // allOrdersStatistical: allOrdersStatisticalReducer,
    // allOrdersStatus: allOrdersStatusReducer,

    // //Banner
    banners: bannersReducer,
    bannersMain: mainBannersReducer,
    // bannerDetails: bannerDetailsReducer,
    newBanner: newBannerReducer,
    // banner: bannerReducer,

    // Carousel
    carousels: carouselsReducer,

    // Banner Horizontal
    horizontals: bannersHorizontalReducer,
    horizontalMain: mainHorizontalReducer,
    newBannerHorizontal: newBannerHorizontalReducer,
    horizontal: bannerHorizontalReducer,

    // Header
    headers: headersReducer,
    headersMain: mainHeaderReducer,

    // Brand
    brands: brandsReducer,

    //Promotion
    promotions: promotionsReducer,
    promotionsMain: mainPromotionReducer,

    //Showroom
    showrooms: showroomsReducer,
});

let initialState = {
    // cartLocal: {
    //     cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    //     shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    // },
    // wishlistLocal: {
    //   wishlistItems: localStorage.getItem("wishlistItems")
    //     ? JSON.parse(localStorage.getItem("wishlistItems"))
    //     : [],
    // },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
