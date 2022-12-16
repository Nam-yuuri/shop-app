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
    productsBrandReducer,
} from './reducers/productReducer';

import {
    userReducer,
    profileReducer,
    forgotPasswordReducer,
    allUsersReducer,
    userDetailsReducer,
} from './reducers/userReducer';

import { cartLocalReducer, cartReducer } from './reducers/cartReducer';

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
    bannerHorizontalDetailsReducer,
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
    showroomCityReducer,
} from './reducers/showroomReducer';

import {
    allOrdersReducer,
    allOrdersStatisticalReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer,
    allOrdersStatusReducer,
} from './reducers/orderReducer';

const reducer = combineReducers({
    // Product
    products: productsReducer,
    productsAdmin: productsAdminReducer,
    topProducts: topProductsReducer,
    productDetails: productDetailsReducer,
    nProducts: nProductsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productsBrand: productsBrandReducer,

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
    showroomCity: showroomCityReducer,

    //Cart
    cart: cartReducer,
    cartLocal: cartLocalReducer,

    //Order
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    allOrdersStatistical: allOrdersStatisticalReducer,
    allOrdersStatus: allOrdersStatusReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
