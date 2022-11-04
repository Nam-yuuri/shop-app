import classNames from 'classnames/bind';
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
    return (
        <div className={cx('footer')}>
            <Menu className={cx('menu')}>
                <MenuItem
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
            </Menu>
        </div>
    );
}

export default FooterTablet;
