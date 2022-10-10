import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Laptop from '~/pages/Laptop';
import Login from '~/pages/Login';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';
import Brands from '~/pages/Brands';
import Account from '~/pages/Account';
import Bill from '~/pages/Account/Bill';
import Address from '~/pages/Account/Address';
import Admin from '~/pages/admin/admin';
import { Fragment } from 'react';

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
    { path: 'admin', component: Admin, layout: Fragment },
];

const privateRoutes = [
    { path: 'admin', component: Admin },
];

export { publicRoutes, privateRoutes };
