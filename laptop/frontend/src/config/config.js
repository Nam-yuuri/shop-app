const routes = {
    home: '/',
    // profiles: '/profiles/@:id',
    profile: '/profile/:id',
    // search: '/search',
    laptop: '/laptop',
    brand: '/brand/:id',
    cart: '/cart',
    login: '/login',
    info: '/info',
    // eslint-disable-next-line no-dupe-keys
    image: '/image',
    checkout: '/checkout',
    pdf: '/pdf',
    account: '/account',
    bill: '/bill',
    billDetail: '/bill/:id',
    address: '/address',
    admin: '/admin',
    showroom: '/showroom',
    promotion: '/promotion',
    search: '/products/:keyword',

    productList: '/admin/ProductList',
    newProduct: '/admin/ProductList/NewProduct',
    updateProduct: '/admin/ProductList/UpdateProduct/:id',
    
    bannerList: '/admin/BannerList',
    newBanner: '/admin/BannerList/newBanner',
    updateBanner: '/admin/BannerList/updateBanner/:id',

    brandList: '/admin/BrandList',
    newBrand: '/admin/BrandList/newBrand',
    updateBrand: '/admin/BrandList/updateBrand/:id',

    bannerHorizonList: '/admin/BannerHorizon',
    newBannerHorizon: '/admin/BannerHorizon/newBannerHorizon',
    updateBannerHorizon: '/admin/BannerHorizon/updateBannerHorizon/:id',

    headerList: '/admin/HeaderList',
    newHeader: '/admin/HeaderList/newHeader',
    updateHeader: '/admin/HeaderList/updateHeader/:id',

    promotionList: '/admin/PromotionList',
    newPromotion: '/admin/PromotionList/newPromotion',
    updatePromotion: '/admin/PromotionList/updatePromotion/:id',

    carouselList: '/admin/CarouselList',
    newCarousel: '/admin/CarouselList/newCarousel',
    updateCarousel: '/admin/CarouselList/updateCarousel/:id',

    dashBoard: '/admin/Dashboard',

    showroomList: '/admin/ShowroomList',
    newShowroom: '/admin/ShowroomList/newShowroom',
    updateShowroom: '/admin/ShowroomList/updateShowroom/:id',


    userList: '/admin/UserList',
    updateUser: '/admin/UserList/updateUser/:id',

    orderList: '/admin/OrderList',
    updateOrder: '/admin/OrderList/updateOrder/:id',

    loading: '/loading',
};

export default routes;
