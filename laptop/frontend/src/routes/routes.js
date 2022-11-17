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
// import { config } from '@fortawesome/fontawesome-svg-core';

import ProductList from '~/pages/Admin/Products/ProductList';
import NewProduct from '~/pages/Admin/Products/NewProduct';
import BrandList from '~/pages/Admin/brands/BrandList';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    // { path: 'laptop', component: Laptop },
    // { path: 'notification', component: Notification },
    { path: config.routes.cart, component: Cart },
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
    { path: config.routes.brandList, component: BrandList, layout: null},

];

const privateRoutes = [
  
];

export { publicRoutes, privateRoutes };
