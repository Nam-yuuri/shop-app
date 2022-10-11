import classNames from 'classnames/bind';
import styles from './Address.module.scss';

import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('Address')}>
            <div className={cx('container-address')}>
                <div className={cx('container-left')}>
                    <Sidebar />
                </div>
                <div className={cx('container-right')}>
                    <h5>Sổ địa chỉ</h5>
                    <div className={cx('box-right')}></div>
                </div>
            </div>
        </div>
    );
}

export default Address;
