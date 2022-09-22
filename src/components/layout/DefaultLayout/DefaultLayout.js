import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './DefaultLayout.module.scss';

import Footer from './Footer';
import Header from './Header';
import HeaderScroll from './ScrollHeader/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <Header />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
