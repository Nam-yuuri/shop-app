import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { UserTabletIconActive } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Product"
                    to={config.routes.productList}
                    icon={<UserTabletIconActive />}
                    activeIcon={<UserTabletIconActive />}
                />
                <MenuItem
                    title="Brand"
                    to={config.routes.brandList}
                    icon={<UserTabletIconActive />}
                    activeIcon={<UserTabletIconActive />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.brand}
                    icon={<UserTabletIconActive />}
                    activeIcon={<UserTabletIconActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
