import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';

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
