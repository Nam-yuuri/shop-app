import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [scrollHeader, setScrollHeader] = useState(false);
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

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Header />
                </div>
                <div className="container">
                    <div className="content">{children}</div>
                </div>
                <div className={cx('footer')}>
                    <Footer />
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
