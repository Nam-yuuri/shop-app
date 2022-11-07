import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import {
    CartTabletIcon,
    CartTabletIconActive,
    HomeIcon,
    HomeIconActive,
    ProductsIcon,
    ProductsIconActive,
    UserTabletIcon,
    UserTabletIconActive,
} from '~/components/Icons';
import config from '~/config';
import styles from './Footer.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function FooterTablet() {
    const [page, setPage] = useState('home');
    return (
        <div className={cx('footer')}>
            {/* <Menu className={cx('menu')}>
                <MenuItem
                    className={cx('home')}
                    title="Trang chủ"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItem
                    title="Danh mục"
                    to={config.routes.brand}
                    icon={<ProductsIcon />}
                    activeIcon={<ProductsIconActive />}
                />
                <div className={cx('box')}>
                    <MenuItem
                        title="Giỏ hàng"
                        to={config.routes.cart}
                        icon={<CartTabletIcon />}
                        activeIcon={<CartTabletIconActive />}
                    />
                    <div className={cx('numberCart')}>
                        <p>1</p>
                    </div>
                </div>

                <MenuItem
                    title="Tài khoản"
                    to={config.routes.login}
                    icon={<UserTabletIcon />}
                    activeIcon={<UserTabletIconActive />}
                />
            </Menu> */}
            <Button
                to={config.routes.home}
                onClick={() => {
                    setPage('home');
                }}
            >
                <div className={cx('home')}>
                    {page === 'home' ? <HomeIconActive /> : <HomeIcon />}
                    {page === 'home' ? <span className={cx('color')}>Trang chủ</span> : <span>Trang chủ</span>}
                </div>
            </Button>
            <Button
                to={config.routes.brand}
                onClick={() => {
                    setPage('brand');
                }}
            >
                <div className={cx('brand')}>
                    {page === 'brand' ? <ProductsIconActive /> : <ProductsIcon />}
                    {page === 'brand' ? <span className={cx('color')}>Danh mục</span> : <span>Danh mục</span>}
                </div>
            </Button>
            <Button
                to={config.routes.cart}
                onClick={() => {
                    setPage('cart');
                }}
            >
                <div className={cx('box')}>
                    <div className={cx('cart')}>
                        {page === 'cart' ? <CartTabletIconActive /> : <CartTabletIcon />}
                        {page === 'cart' ? <span className={cx('color')}>Giỏ hàng</span> : <span>Giỏ hàng</span>}
                    </div>

                    <div className={cx('numberCart')}>
                        <p>1</p>
                    </div>
                </div>
            </Button>
            <Button
                to={config.routes.login}
                onClick={() => {
                    setPage('login');
                }}
            >
                <div className={cx('login')}>
                    {page === 'login' ? <UserTabletIconActive /> : <UserTabletIcon />}
                    {page === 'login' ? <span className={cx('color')}>Tài khoản</span> : <span>Tài khoản</span>}
                </div>
            </Button>
        </div>
    );
}

export default FooterTablet;
