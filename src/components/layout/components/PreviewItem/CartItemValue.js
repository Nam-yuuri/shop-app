import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { DataCartItem } from '~/Data/CartItem/CartItem';
import styles from './CartValue.module.scss';

const cx = classNames.bind(styles);

function CartItemValue() {
    const [cartResult, setCartResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCartResult(DataCartItem);
        }, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    {cartResult.map((cart) => (
                        <div className={cx('content')} key={cart.id}>
                            <div className={cx('image')}>
                                <img src={cart.img} alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('text')}>{cart.name}</div>
                                <div className={cx('code', 'text')}>Số lượng: {cart.amount}</div>
                                <div className={cx('number')}>{cart.price} đ</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {cartResult.map((cart) => ( */}
                <div className={cx('sum-price')}>
                    <div className={cx('text')}>Tổng tiền (2) sản phẩm</div>
                    <div className={cx('number')}>123.456 đ</div>
                </div>
                {/* ))} */}
                <div className={cx('btn')}>
                    <button>
                        <div>Xem giỏ hàng</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItemValue;
