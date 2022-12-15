import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { UserTabletIconActive } from '~/components/Icons';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
    CalendarViewDay,
    Category,
    Dashboard,
    Discount,
    Inventory,
    Laptop,
    LocationCity,
    Panorama,
    PanoramaHorizontal,
    PanoramaHorizontalSelect,
    Person,
    RecentActors,
    ShoppingCart,
    ViewCarousel,
    ViewDay,
} from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const cx = classNames.bind(styles);

function Sidebar() {
    const [wrapperWidth, setWapperWidth] = useState(true);

    return (
        <aside className={cx('wrapper')}>
            {/* <div className={cx('header')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => {
                    setWapperWidth(false)
                }} />
            </div> */}
            <Menu>
                <MenuItem
                    title="Dashboard"
                    to={config.routes.dashBoard}
                    icon={<Dashboard />}
                    activeIcon={<Dashboard />}
                />
                <MenuItem title="Sản phẩm" to={config.routes.productList} icon={<Laptop />} activeIcon={<Laptop />} />
                <MenuItem
                    title="Thương hiệu"
                    to={config.routes.brandList}
                    icon={<Category />}
                    activeIcon={<Category />}
                />
                <MenuItem
                    title="Khuyến mãi"
                    to={config.routes.promotionList}
                    icon={<Discount />}
                    activeIcon={<Discount />}
                />
                <MenuItem title="Tài khoản" to={config.routes.userList} icon={<Person />} activeIcon={<Person />} />
                <MenuItem
                    title="Đơn hàng"
                    to={config.routes.orderList}
                    icon={<ShoppingBasketIcon />}
                    activeIcon={<ShoppingBasketIcon />}
                />
                <MenuItem
                    title="Cửa hàng"
                    to={config.routes.showroomList}
                    icon={<LocationCity />}
                    activeIcon={<LocationCity />}
                />
                <MenuItem
                    title="Banner"
                    to={config.routes.bannerList}
                    icon={<ViewCarousel />}
                    activeIcon={<ViewCarousel />}
                />
                <MenuItem
                    title="Banner Horizontal"
                    to={config.routes.bannerHorizonList}
                    icon={<CalendarViewDay />}
                    activeIcon={<CalendarViewDay />}
                />
                <MenuItem
                    title="Header"
                    to={config.routes.headerList}
                    icon={<PanoramaHorizontalSelect />}
                    activeIcon={<PanoramaHorizontalSelect />}
                />
                <MenuItem
                    title="Carousel"
                    to={config.routes.carouselList}
                    icon={<RecentActors />}
                    activeIcon={<RecentActors />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
