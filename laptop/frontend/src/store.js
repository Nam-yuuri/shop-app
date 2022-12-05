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

import {
    allUsersReducer,
    forgotPasswordReducer,
    profileReducer,
    userDetailsReducer,
    userReducer,
} from './reducers/userReducer';

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
    bannerDetailsReducer,
    bannerReducer,
    bannersReducer,
    mainBannersReducer,
    newBannerReducer,
} from './reducers/bannerReducer';

import {
    carouselsReducer,
    carouselsMainReducer,
    newCarouselReducer,
    carouselDetailsReducer,
    carouselReducer,
} from './reducers/carouselReducer';

import {
    bannersHorizontalReducer,
    mainHorizontalReducer,
    newHorizontalReducer,
    bannerHorizontalReducer,
    bannerHorizontalDetailsReducer
} from './reducers/bannerHorizontalReducer';

import {
    headersReducer,
    mainHeaderReducer,
    headerDetailsReducer,
    headerReducer,
    newHeaderReducer,
} from './reducers/headerReducer';

import {
    brandsReducer,
    brandsMainReducer,
    brandDetailsReducer,
    brandReducer,
    newBrandReducer,
} from './reducers/brandReducer';

import {
    promotionsReducer,
    mainPromotionReducer,
    promotionDetailsReducer,
    promotionReducer,
    newPromotionReducer,
} from './reducers/promotionReducer';

import {
    showroomsReducer,
    showroomReducer,
    showroomDetailsReducer,
    newShowroomReducer,
} from './reducers/showroomReducer';

const reducer = combineReducers({
    // Product
    products: productsReducer,
    productsAdmin: productsAdminReducer,
    topProducts: topProductsReducer,
    productDetails: productDetailsReducer,
    nProducts: nProductsReducer,
    newProduct: newProductReducer,
    product: productReducer,

    // User
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,

    //Banner
    banners: bannersReducer,
    bannersMain: mainBannersReducer,
    bannerDetails: bannerDetailsReducer,
    newBanner: newBannerReducer,
    banner: bannerReducer,

    // Carousel
    carousels: carouselsReducer,
    carousel: carouselReducer,
    carouselDetails: carouselDetailsReducer,
    newCarousel: newCarouselReducer,
    carouselsMain: carouselsMainReducer,

    // Banner Horizontal
    horizontals: bannersHorizontalReducer,
    horizontalMain: mainHorizontalReducer,
    horizontal: bannerHorizontalReducer,
    horizontalDetails: bannerHorizontalDetailsReducer,
    newHorizontal: newHorizontalReducer,

    // Header
    headers: headersReducer,
    header: headerReducer,
    headersMain: mainHeaderReducer,
    newHeader: newHeaderReducer,
    headerDetails: headerDetailsReducer,

    // Brand
    brands: brandsReducer,
    brand: brandReducer,
    newBrand: newBrandReducer,
    mainBrands: brandsMainReducer,
    brandDetails: brandDetailsReducer,

    //Promotion
    promotions: promotionsReducer,
    promotionsMain: mainPromotionReducer,
    promotionDetails: promotionDetailsReducer,
    promotion: promotionReducer,
    newPromotion: newPromotionReducer,

    //Showroom
    showrooms: showroomsReducer,
    showroom: showroomReducer,
    newShowroom: newShowroomReducer,
    showroomDetails: showroomDetailsReducer,
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
