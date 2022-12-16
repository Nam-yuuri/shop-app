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
import BillDetail from '~/pages/user/Account/BillDetail';
import Address from '~/pages/user/Account/Address';
import config from '~/config';
import Showroom from '~/pages/user/Showroom';
import Promotion from '~/pages/user/Promotion';
import Pdf from '~/pages/user/pdf';
import Checkout from '~/pages/user/Checkout';
import Search from '~/pages/user/Search';
// import { config } from '@fortawesome/fontawesome-svg-core';

import ProductList from '~/pages/Admin/Products/ProductList';
import NewProduct from '~/pages/Admin/Products/NewProduct';
import UpdateProduct from '~/pages/Admin/Products/UpdateProduct';

import BrandList from '~/pages/Admin/brands/BrandList';
import NewBrand from '~/pages/Admin/brands/NewBrand';
import UpdateBrand from '~/pages/Admin/brands/UpdateBrand';

import BannerList from '~/pages/Admin/Banner/BannerList';
import Newbanner from '~/pages/Admin/Banner/Newbanner';
import UpdateBanner from '~/pages/Admin/Banner/Updatebanner/UpdateBanner';

import BannerHorizonList from '~/pages/Admin/BannerHorizon/BannerHorizonList';
import NewBannerHorizon from '~/pages/Admin/BannerHorizon/NewBannerHorizon';
import UpdateBannerHorizon from '~/pages/Admin/BannerHorizon/UpdateBannerHorizon';

import HeaderList from '~/pages/Admin/Header/HeaderList';
import NewHeader from '~/pages/Admin/Header/newHeader/NewHeader';
import UpdateHeader from '~/pages/Admin/Header/UpdateHeader';

import Dashboard from '~/pages/Admin/Dashboard';

import PromotionList from '~/pages/Admin/Promotion/PromotionList';
import NewPromotion from '~/pages/Admin/Promotion/newPromotion/NewPromotion';
import UpdatePromotion from '~/pages/Admin/Promotion/UpdatePromotion';

import Loading from '~/components/Loading/Loading';

import CarouselList from '~/pages/Admin/Carousel/CarouselList';
import NewCarousel from '~/pages/Admin/Carousel/NewCarousel/NewCarousel';
import UpdateCarousel from '~/pages/Admin/Carousel/UpdateCarousel';

import ShowroomList from '~/pages/Admin/Showroom/ShowroomList';
import NewShowroom from '~/pages/Admin/Showroom/newShowroom/NewShowroom';
import UpdateShowroom from '~/pages/Admin/Showroom/updateShowroom/UpdateShowroom';

import UserList from '~/pages/Admin/User/UserList';
import UpdateUser from '~/pages/Admin/User/updateUser/UpdateUser';

import OrderList from '~/pages/Admin/Order/OrderList';
import UpdateOrder from '~/pages/Admin/Order/UpdateOrder';
// Public routes
const publicRoutes = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.pdf, component: Pdf },
    // { path: 'notification', component: Notification },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.brand, component: Brands },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.account, component: Account },
    { path: config.routes.bill, component: Bill },
    { path: config.routes.billDetail, component: BillDetail },
    { path: config.routes.address, component: Address },
    { path: config.routes.showroom, component: Showroom },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.search, component: Search },

    { path: config.routes.productList, component: ProductList, layout: null },
    { path: config.routes.newProduct, component: NewProduct, layout: null },
    { path: config.routes.updateProduct, component: UpdateProduct, layout: null },

    { path: config.routes.bannerList, component: BannerList, layout: null },
    { path: config.routes.newBanner, component: Newbanner, layout: null },
    { path: config.routes.updateBanner, component: UpdateBanner, layout: null },

    { path: config.routes.brandList, component: BrandList, layout: null },
    { path: config.routes.newBrand, component: NewBrand, layout: null },
    { path: config.routes.updateBrand, component: UpdateBrand, layout: null },

    { path: config.routes.bannerHorizonList, component: BannerHorizonList, layout: null },
    { path: config.routes.newBannerHorizon, component: NewBannerHorizon, layout: null },
    { path: config.routes.updateBannerHorizon, component: UpdateBannerHorizon, layout: null },

    { path: config.routes.headerList, component: HeaderList, layout: null },
    { path: config.routes.newHeader, component: NewHeader, layout: null },
    { path: config.routes.updateHeader, component: UpdateHeader, layout: null },

    { path: config.routes.dashBoard, component: Dashboard, layout: null },

    { path: config.routes.promotionList, component: PromotionList, layout: null },
    { path: config.routes.newPromotion, component: NewPromotion, layout: null },
    { path: config.routes.updatePromotion, component: UpdatePromotion, layout: null },

    { path: config.routes.carouselList, component: CarouselList, layout: null },
    { path: config.routes.newCarousel, component: NewCarousel, layout: null },
    { path: config.routes.updateCarousel, component: UpdateCarousel, layout: null },

    { path: config.routes.showroomList, component: ShowroomList, layout: null },
    { path: config.routes.newShowroom, component: NewShowroom, layout: null },
    { path: config.routes.updateShowroom, component: UpdateShowroom, layout: null },

    { path: config.routes.userList, component: UserList, layout: null },
    { path: config.routes.updateUser, component: UpdateUser, layout: null },

    { path: config.routes.orderList, component: OrderList, layout: null },
    { path: config.routes.updateOrder, component: UpdateOrder, layout: null },

    { path: config.routes.loading, component: Loading, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
