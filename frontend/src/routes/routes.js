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
import { Fragment } from 'react';
// import Admin from '~/pages/admin/admin';
// import adminBrands from '~/pages/admin/boxBrands/boxBrands';
// import Admin from '~/pages/admin/admin';
import Boxbrands from '~/pages/admin/boxBrands/boxBrands';
import Boxproducts from '~/pages/admin/boxProducts/boxProducts';


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'laptop', component: Laptop },
    { path: 'notification', component: Notification },
    { path: 'cart', component: Cart },
    { path: 'login', component: Login },
    { path: 'brands', component: Brands },
    { path: 'profile', component: Profile },
    { path: 'account', component: Account },
    { path: 'bill', component: Bill },
    { path: 'address', component: Address },
    { path: 'products', component: Boxproducts, layout: Fragment },
    { path: 'adminbrands', component: Boxbrands, layout: Fragment },
];

const privateRoutes = [
    { path: 'products', component: Boxproducts, layout: Fragment },
    { path: 'adminbrands', component: Boxbrands, layout: Fragment },
];

export { publicRoutes, privateRoutes };
