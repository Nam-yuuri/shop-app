import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill() {
    return (
        <div className={cx('Bill')}>
            <div className={cx('container-bill')}>
                <div className={cx('container-left')}>
                    <Sidebar />
                </div>
                <div className={cx('container-right')}>
                    <h5>Quản lý đơn hàng</h5>
                    <div className={cx('box-right')}>
                        <div className={cx('box-img')}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/mongcaifood.appspot.com/o/no-products-found.png?alt=media&token=2f22ae28-6d48-49a7-a36b-e1a696618f9c"
                                alt=""
                            />
                        </div>
                        <div className={cx('box-text')}>
                            <h6>Bạn không có đơn hàng nào</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
