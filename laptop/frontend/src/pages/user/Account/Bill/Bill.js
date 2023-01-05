import classNames from 'classnames/bind';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, myOrders, updateOrder } from '~/actions/orderAction';
import Loading from '~/components/Loading/Loading';
import formatPrice from '~/utils/formatPrice';
import Sidebar from '../Sidebar';
import styles from './Bill.module.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Bill() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { loading, error, orders } = useSelector((state) => state.myOrders);
    // const { order, error, loading } = useSelector((state) => state.orderDetails);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(myOrders());
    }, [dispatch, error]);

    // console.log('orders', orders);

    const cancelOrderSubmitHandler = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Bạn có chắc chắn?',
            text: 'Bạn sẽ không thể quay trở lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hủy đơn hàng!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Hủy thành công!', 'Đơn hàng của bạn đã được hủy.', 'success');
                const myForm = new FormData();

                myForm.set('status', 'Canceled');

                // dispatch(updateOrder(match.id, myForm));
                // history.push('/my-account');
            }
        });
    };

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
                                            <div key={item._id}>
                                                <input type={'checkbox'} id={item._id} />

                                                <div className={cx('container-product')}>
                                                    {item.orderStatus === 'Delivered' ||
                                                    item.orderStatus === 'Canceled' ? (
                                                        <label htmlFor={item._id}>
                                                            {/* <Button outline className={cx('btn-none')}> */}
                                                            Xóa đơn hàng
                                                            {/* </Button> */}
                                                        </label>
                                                    ) : (
                                                        <Fragment />
                                                    )}
                                                    {/* <label htmlFor={item._id}>Tìm đường</label> */}
                                                    {/* <input type={'checkbox'} id={item._id} /> */}
                                                    <div className={cx('container-info')}>
                                                        <div className={cx('address')}>
                                                            Địa chỉ nhận hàng:{' '}
                                                            <span>
                                                                {item.shippingInfo.address}, {item.shippingInfo.country}
                                                                , {item.shippingInfo.state}, {item.shippingInfo.city}
                                                            </span>
                                                        </div>
                                                        <div className={cx('phone')}>
                                                            Điện thoại: <span>{item.shippingInfo.phoneNo}</span>
                                                        </div>

                                                        <div className={cx('phone')}>
                                                            Tình trạng:{' '}
                                                            <span>
                                                                {item.orderStatus === 'Processing'
                                                                    ? 'Đang chuẩn bị hàng'
                                                                    : item.orderStatus === 'Shipped'
                                                                    ? 'Đang vận chuyển'
                                                                    : item.orderStatus === 'Delivered'
                                                                    ? 'Đã giao hàng'
                                                                    : 'Đã hủy đơn hàng'}
                                                            </span>
                                                        </div>
                                                        {/* <div className={cx('phone')}>
                                                            Tổng tiền: <span>{formatPrice(item.totalPrice)}</span>
                                                        </div> */}
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
                                                        <div className={cx('box-btn')}>
                                                            {item.orderStatus === 'Delivered' ||
                                                            item.orderStatus === 'Canceled' ? (
                                                                <div>
                                                                    <label htmlFor={item._id}>
                                                                        {/* <Button outline className={cx('btn-none')}> */}
                                                                        Xóa đơn hàng
                                                                        {/* </Button> */}
                                                                    </label>
                                                                </div>
                                                            ) : (
                                                                <div/>
                                                            )}
                                                            <Button
                                                                primary
                                                                onClick={() => {
                                                                    navigate(`/bill/${item._id}`);
                                                                }}
                                                            >
                                                                Xem chi tiết
                                                            </Button>
                                                        </div>
                                                    </div>
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
