// import config from '~/config';
import Cart from '~/pages/user/Cart';
import Home from '~/pages/user/Home';
import Laptop from '~/pages/user/Laptop';
import Login from '~/pages/Login';
import Notification from '~/pages/user/Notification';
import Profile from '~/pages/user/Profile';
import Brands from '~/pages/user/Brands';
import Account from '~/pages/user/Account';
import Bill from '~/pages/user/Account/Bill';
import Address from '~/pages/user/Account/Address';
import config from '~/config';
import Showroom from '~/pages/user/Showroom';
import Promotion from '~/pages/user/Promotion';
import Pdf from '~/pages/user/pdf'
import Checkout from '~/pages/user/Checkout';
// import { config } from '@fortawesome/fontawesome-svg-core';

import ProductList from '~/pages/Admin/Products/ProductList';
import NewProduct from '~/pages/Admin/Products/NewProduct';
import BrandList from '~/pages/Admin/brands/BrandList';
import NewBrand from '~/pages/Admin/brands/NewBrand';
import BannerList from '~/pages/Admin/Banner/BannerList';
import Newbanner from '~/pages/Admin/Banner/Newbanner';
import BannerHorizonList from '~/pages/Admin/BannerHorizon/BannerHorizonList';
import NewBannerHorizon from '~/pages/Admin/BannerHorizon/NewBannerHorizon';
import HeaderList from '~/pages/Admin/Header/HeaderList';
import NewHeader from '~/pages/Admin/Header/newHeader/NewHeader';
import Dashboard from '~/pages/Admin/Dashboard';
import PromotionList from '~/pages/Admin/Promotion/PromotionList';
import NewPromotion from '~/pages/Admin/Promotion/newPromotion/NewPromotion';
import Loading from '~/components/Loading/Loading';
import CarouselList from '~/pages/Admin/Carousel/CarouselList';
import NewCarousel from '~/pages/Admin/Carousel/NewCarousel/NewCarousel';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.pdf, component: Pdf},
    // { path: 'notification', component: Notification },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.login, component: Login},
    { path: config.routes.brand, component: Brands },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.account, component: Account },
    { path: config.routes.bill, component: Bill },
    { path: config.routes.address, component: Address },
    { path: config.routes.showroom, component: Showroom },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.productList, component: ProductList, layout: null},
    { path: config.routes.newProduct, component: NewProduct, layout: null},
    { path: config.routes.bannerList, component: BannerList, layout: null},
    { path: config.routes.newBannerList, component: Newbanner, layout: null},
    { path: config.routes.brandList, component: BrandList, layout: null},
    { path: config.routes.newBrandList, component: NewBrand, layout: null},
    { path: config.routes.bannerHorizonList, component: BannerHorizonList, layout: null},
    { path: config.routes.newBannerHorizon, component: NewBannerHorizon, layout: null},
    { path: config.routes.headerList, component: HeaderList, layout: null},
    { path: config.routes.newHeader, component: NewHeader, layout: null},
    { path: config.routes.dashBoard, component: Dashboard, layout: null},
    { path: config.routes.promotionList, component: PromotionList, layout: null},
    { path: config.routes.newPromotion, component: NewPromotion, layout: null},
    { path: config.routes.carouselList, component: CarouselList, layout: null},
    { path: config.routes.newCarousel, component: NewCarousel, layout: null},

    { path: config.routes.loading, component: Loading, layout: null},

];

const privateRoutes = [
  
];

export { publicRoutes, privateRoutes };
