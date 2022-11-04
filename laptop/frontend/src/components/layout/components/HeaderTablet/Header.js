import { faBars, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import {
    AdviseIcon,
    BuildIcon,
    CartIcon,
    ComputerIcon,
    PromotionIcon,
    ShowroomIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import CartItem from '../PreviewItem/CartItem';
import CartItemValue from '../PreviewItem/CartItemValue';
// import NotificationItem from '../PreviewItem/NotificationItem';
import { Fragment, useEffect, useState } from 'react';
import SearchItem from '../PreviewItem/SearchItem';
import ProductItem from '../PreviewItem/Products';
import LoginItem from '../PreviewItem/Login';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function HeaderTablet() {
    const [scrollHeader, setScrollHeader] = useState(false);
    // const [windowWidth, setWindowWidth] = useState(false);
    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 20) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxheader')}>
                <div className={cx('logo')}>
                    <img src="https://phongvu.vn/phongvu/logo-mobile.svg" alt="phongvu" />
                </div>
                <div className={cx('messager')}>
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                </div>
            </div>

            {scrollHeader ? (
                <div className={cx('containersearch', 'scroll')}>
                    <div className={cx('boxsearch')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                        <input className={cx('input')} placeholder="Bạn muốn mua gì hôm nay?" />
                    </div>
                    {scrollHeader ? (
                        <div className={cx('messager')}>
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                        </div>
                    ) : (
                        <Fragment />
                    )}
                </div>
            ) : (
                <div className={cx('containersearch')}>
                    <div className={cx('boxsearch')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                        <input className={cx('input')} placeholder="Bạn muốn mua gì hôm nay?" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderTablet;
