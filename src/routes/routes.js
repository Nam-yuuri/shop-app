import Card from '~/pages/Card';
import Home from '~/pages/Home';
import Laptop from '~/pages/Laptop';
import Login from '~/pages/Login';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'laptop', component: Laptop },
    { path: 'notification', component: Notification },
    { path: 'card', component: Card },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
