import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Laptop from '~/pages/Laptop';
import Login from '~/pages/Login';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';
import Brands from '~/pages/Brands';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'laptop', component: Laptop },
    { path: 'notification', component: Notification },
    { path: 'cart', component: Cart },
    { path: 'login', component: Login },
    { path: 'brands', component: Brands },
    { path: 'profile', component: Profile},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
