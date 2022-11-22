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
    Panorama,
    PanoramaHorizontal,
    PanoramaHorizontalSelect,
    ShoppingCart,
    ViewCarousel,
} from '@mui/icons-material';

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
                    to={config.routes.productList}
                    icon={<Dashboard />}
                    activeIcon={<Dashboard />}
                />
                <MenuItem
                    title="Product"
                    to={config.routes.productList}
                    icon={<ShoppingCart />}
                    activeIcon={<ShoppingCart />}
                />
                <MenuItem title="Brand" to={config.routes.brandList} icon={<Category />} activeIcon={<Category />} />
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
                    title="Promotion"
                    to={config.routes.promotionList}
                    icon={<Discount />}
                    activeIcon={<Discount />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
