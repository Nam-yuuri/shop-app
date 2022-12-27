import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import HeaderTablet from '../components/HeaderTablet';
import FooterTablet from '../components/FooterTablet';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [scrollHeader, setScrollHeader] = useState(false);
    // const [windowWidth, setWindowWidth] = useState(false);
    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 800) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smoothly scrolling
        });
    };

    // console.log(window.scrollY);

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('laptop')}>
                        <Header />
                    </div>
                </div>
                <div className={cx('headertablet')}>
                    <div className={cx('tablet')}>
                        <HeaderTablet />
                    </div>
                </div>
                <div className="container">
                    <div className={cx('content', 'children')}>{children}</div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('laptop')}>
                        <Footer />
                    </div>
                </div>
                <div className={cx('footertablet')}>
                    <FooterTablet />
                </div>
            </div>
            <div className={cx('hotline')}>
                <a style={{ display: 'table-cell' }} href="tel:18006867">
                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                    {/* <img src={'https://shopfront-cdn.tekoapis.com/static/3ad4c9a97ab98ff3.png'} alt={'mess'} /> */}
                    <img src={'https://sdk-vn.pushdi.com/image/maxlead/icon-phone-s2.svg'} alt={'facebook'} />
                </a>
                <span>Hotline: 18006867</span>
            </div>
            <div className={cx('facebook')}>
                <a style={{ display: 'table-cell' }} href={'https://www.facebook.com/profile.php?id=100088854197854'} target="_blank">
                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                    <img src={'https://sdk-vn.pushdi.com/image/maxlead/icon-fanpage-s2.svg'} alt={'facebook'} />
                </a>
                <span>Like fanpage & trúng quà minigame mỗi ngày!</span>
            </div>
            <div className={cx('mess')}>
                <a
                    style={{ display: 'table-cell' }}
                    href={
                        'https://www.messenger.com/t/102699832711580/'
                    }
                    target="_blank"
                >
                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                    <img className={cx('mess_laptop')} src={'https://shopfront-cdn.tekoapis.com/static/3ad4c9a97ab98ff3.png'} alt={'mess'} />
                    <img className={cx('mess_mobile')} src={'https://shopfront-cdn.tekoapis.com/static/a8e347d31db4d701.png'} alt={'messenger'} />
                </a>
                {/* <span>Chat với tư vấn viên</span> */}
            </div>
            {scrollHeader ? (
                <div className={cx('btn')} onClick={handleScrollToTop}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            ) : (
                Fragment
            )}
        </div>
    );
}

export default DefaultLayout;
