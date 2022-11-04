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

// Public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: 'laptop', component: Laptop },
    { path: 'notification', component: Notification },
    { path: 'cart', component: Cart },
    { path: 'login', component: Login },
    { path: 'brand', component: Brands },
    { path: 'profile', component: Profile },
    { path: 'account', component: Account },
    { path: 'bill', component: Bill },
    { path: 'address', component: Address },

];

const privateRoutes = [
  
];

export { publicRoutes, privateRoutes };
