import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DataCartItem } from '~/Data/CartItem/CartItem';
import formatPrice from '~/utils/formatPrice';
import styles from './CartValue.module.scss';

const cx = classNames.bind(styles);

function CartItemValue() {
    const [cartResult, setCartResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCartResult(DataCartItem);
        }, 0);
    }, []);

    const dispatch = useDispatch();
    let navigate = useNavigate()

    const { cart, isDeleted, isUpdated } = useSelector((state) => state.cart);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    {cart.cartItems.map((cart) => (
                        <div className={cx('content')} key={cart._id} >
                            <div className={cx('image')}>
                                <img src={cart.image} alt={cart.name} />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('text')}>{cart.name}</div>
                                <div className={cx('code', 'text')}>Số lượng: {cart.quantity}</div>
                                <div className={cx('number')}>{formatPrice(cart.priceSale)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {cart && (
                    <div className={cx('sum-price')}>
                        <div className={cx('text')}>Tổng tiền ({cart.cartItems.length}) sản phẩm</div>
                        <div className={cx('number')}>{formatPrice(cart.totalPrice)}</div>
                    </div>
                )}
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
