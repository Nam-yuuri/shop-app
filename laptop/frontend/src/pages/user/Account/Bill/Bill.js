import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, myOrders } from '~/actions/orderAction';
import Loading from '~/components/Loading/Loading';
import formatPrice from '~/utils/formatPrice';
import Sidebar from '../Sidebar';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill() {
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector((state) => state.myOrders);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(myOrders());
    }, [dispatch, error]);

    console.log('orders', orders);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('Bill')}>
                    <div className={cx('container-bill')}>
                        <div className={cx('container-left')}>
                            <Sidebar />
                        </div>
                        <div className={cx('container-right')}>
                            <h5>Quản lý đơn hàng</h5>
                            {/* {(orders && <div>{orders && orders.map((order) => (<div><div><div>{(order.updatedAt).split("T")[0]}</div>))}</div></div></div>) || ( */}
                            {(orders && (
                                <div className={cx('box-right')}>
                                    {orders &&
                                        orders.map((item) => (
                                            <div className={cx('container-product')} key={item._id}>
                                                <div className={cx('container-info')}>
                                                    <div className={cx('address')}>
                                                        Địa chỉ nhận hàng:{' '}
                                                        <span>
                                                            {item.shippingInfo.address}, {item.shippingInfo.country},{' '}
                                                            {item.shippingInfo.state}, {item.shippingInfo.city}
                                                        </span>
                                                    </div>
                                                    <div className={cx('phone')}>
                                                        Điện thoại: <span>{item.shippingInfo.phoneNo}</span>
                                                    </div>
                                                    <div className={cx('phone')}>
                                                        Ngày đặt: <span>{item.updatedAt.split('T')[0]}</span>
                                                    </div>
                                                    <div className={cx('phone')}>
                                                        Hình thức thanh toán: <span>{item.paymentInfo.type}</span>
                                                    </div>
                                                    <div className={cx('phone')}>
                                                        Tình trạng:{' '}
                                                        <span>
                                                            {item.orderStatus === 'Processing'
                                                                ? 'Đang chuẩn bị hàng'
                                                                : item.orderStatus === 'Shipped'
                                                                ? 'Đang vận chuyển'
                                                                : 'Đã giao hàng'}
                                                        </span>
                                                    </div>
                                                    <div className={cx('phone')}>
                                                        Tổng tiền: <span>{formatPrice(item.totalPrice)}</span>
                                                    </div>
                                                </div>
                                                <div className={cx('box-product')}>
                                                    {item.orderItems &&
                                                        item.orderItems.map((order) => (
                                                            <div className={cx('order-items')} key={order._id}>
                                                                <div className={cx('order-item')}>
                                                                    <div className={cx('order-img')}>
                                                                        <img
                                                                            style={{ width: '80px' }}
                                                                            src={order.image}
                                                                            alt={order.name}
                                                                        />
                                                                    </div>
                                                                    <div className={cx('order-content')}>
                                                                        {order.name && (
                                                                            <div className={cx('order-name')}>
                                                                                {order.name}
                                                                            </div>
                                                                        )}
                                                                        {order.quantity && (
                                                                            <div
                                                                                className={cx(
                                                                                    'order-name',
                                                                                    'order-info',
                                                                                )}
                                                                            >
                                                                                Số lượng: {order.quantity}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    {/* <div className={cx('order-price')}>
                                                        <div className={cx('order-status')}>asd</div>
                                                        <div className={cx('order-totalprice')}>asdas</div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )) || (
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
                            )}

                            {/* )} */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bill;
