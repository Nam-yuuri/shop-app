import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { AddressIcon, NewsIcon, NotificationIcon2, OderIcon, UserIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar({ children }) {
    return (
        <div className={cx('info')}>
            <div className={cx('container-info')}>
                <div className={cx('container-left')}>
                    <div className={cx('box-left')}>
                        <div className={cx('left-top')}>
                            <div className={cx('top-img')}>
                                {/* <UserIcon /> */}
                                <img
                                    src="https://lh3.googleusercontent.com/a-/ACNPEu8kh1eEtlYHUkP5gUWSsoxnDikFma6Ho4-EoF3g=s96-c-rw"
                                    alt=""
                                />
                            </div>
                            <div className={cx('top-text')}>
                                <h5 className={cx('top-title')}>Tài khoản của</h5>
                                <h4 className={cx('top-name')}>Hoài Nam Hoàng Võ</h4>
                            </div>
                        </div>
                        <ul className={cx('left-bottom')}>
                            <NavLink
                                to={config.routes.account}
                                className={(nav) => cx('bottom-btn', { active: nav.isActive })}
                            >
                                <div className={cx('bottom-list', 'active-info')}>
                                    <UserIcon />
                                    <h5>Thông tin tài khoản</h5>
                                </div>
                            </NavLink>
                            <NavLink
                                to={config.routes.bill}
                                className={(nav) => cx('bottom-btn', { active: nav.isActive })}
                            >
                                <div className={cx('bottom-list')}>
                                    <OderIcon />
                                    <h5>Quản lý đơn hàng</h5>
                                </div>
                            </NavLink>
                            <NavLink to={config.routes.address} className={(nav) => cx('bottom-btn', { active: nav.isActive })}>
                                <div className={cx('bottom-list')}>
                                    <AddressIcon />
                                    <h5>Sổ địa chỉ</h5>
                                </div>
                            </NavLink>
                            {/* <NavLink to={config.routes} className={(nav) => cx('bottom-btn', { active: nav.isActive })}>
                                <div className={cx('bottom-list')}>
                                    <NotificationIcon2 />
                                    <h5>Thông báo</h5>
                                </div>
                            </NavLink> */}
                            {/* <NavLink to={config.routes} className={(nav) => cx('bottom-btn', { active: nav.isActive })}>
                                <div className={cx('bottom-list')}>
                                    <NewsIcon />
                                    <h5>Bản tin</h5>
                                </div>
                            </NavLink> */}
                            <li className={cx('border-list')}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
