import classNames from 'classnames/bind';
import Carousel from './Carousel/Carousel';
import styles from './Header.module.scss';

import Product from './Products/Product';

const cx = classNames.bind(styles);

function HeaderHome({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className="container">
                    <div className="content">{children}</div>
                    <div className={cx('carousel')}>
                        <div><Carousel /></div>
                    </div>
                    <div className={cx('product')}><Product /></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
