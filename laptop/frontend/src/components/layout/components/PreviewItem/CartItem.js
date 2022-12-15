import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('content')}>
                        <div className={cx('image')}>
                            <img src="https://i.imgur.com/Drj57qu.png" alt="" />
                        </div>
                        <div className={cx('text')}>Giỏ hàng chưa có sản phẩm nào</div>
                        {/* <button className={cx('btn')}>
                            <div>Mua sắm ngay</div>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
