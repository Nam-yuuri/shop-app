import classNames from 'classnames/bind';
import { Fragment, useState } from 'react';
// import Carousel from './Carousel';
import Carousel from './Carousel';
import styles from './Header.module.scss';

import Product from './Products/Product';

const cx = classNames.bind(styles);

function HeaderHome({ children }) {
    const [scrollHeader, setScrollHeader] = useState(true);
    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 99) {
            setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className="container">
                    <div className="content">{children}</div>
                    <div className={cx('carousel')}>
                        <div>
                            <Carousel />
                        </div>
                    </div>
                    <div className={cx('product')}>
                        {scrollHeader ? <Product /> : <Fragment />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
