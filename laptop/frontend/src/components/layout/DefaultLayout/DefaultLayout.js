import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import HeaderTablet from '../components/HeaderTablet';
import FooterTablet from '../components/FooterTablet';

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
