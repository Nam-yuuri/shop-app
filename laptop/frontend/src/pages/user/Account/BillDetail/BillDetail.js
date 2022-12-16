import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getOrderDetails, myOrders, updateOrder } from '~/actions/orderAction';
import Loading from '~/components/Loading/Loading';
import formatPrice from '~/utils/formatPrice';
import Sidebar from '../Sidebar';
import styles from './BillDetail.module.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Button from '~/components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function BillDetail() {
    const dispatch = useDispatch();
    const match = useParams();
    let navigate = useNavigate();

    const { order, error, loading } = useSelector((state) => state.orderDetails);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(myOrders());
    }, [dispatch, error]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(getOrderDetails(match.id));
    }, [dispatch, error, match.id]);

    // console.log('order', order);

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
                // Swal.fire('Hủy thành công!', 'Đơn hàng của bạn đã được hủy.', 'success');
                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: 'Đơn hàng của bạn đã được hủy',
                    showConfirmButton: false,
                    timer: 1500,
                });
                const myForm = new FormData();

                myForm.set('status', 'Canceled');
                dispatch(updateOrder(match.id, myForm));
                navigate('/bill');
            }
        });
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('BillDetail')}>
                    <div className={cx('container-billDetail')}>
                        <div className={cx('container-left')}>
                            <Sidebar />
                        </div>
                        <div className={cx('container-right')}>
                            <h5>Quản lý đơn hàng</h5>
                            {(order && order.orderItems && (
                                <div className={cx('box-right')}>
                                    <div className={cx('container-product')} key={order._id}>
                                        <div className={cx('container-info')}>
                                            <div className={cx('address')}>
                                                Địa chỉ nhận hàng:{' '}
                                                {order.shippingInfo && (
                                                    <span>
                                                        {order.shippingInfo.address}, {order.shippingInfo.country},{' '}
                                                        {order.shippingInfo.state}, {order.shippingInfo.city}
                                                    </span>
                                                )}
                                            </div>
                                            {order.shippingInfo && (
                                                <div className={cx('phone')}>
                                                    Điện thoại: <span>{order.shippingInfo.phoneNo}</span>
                                                </div>
                                            )}
                                            <div className={cx('phone')}>
                                                Ngày đặt: <span>{order.updatedAt.split('T')[0]}</span>
                                            </div>
                                            <div className={cx('phone')}>
                                                Hình thức thanh toán: <span>{order.paymentInfo.type}</span>
                                            </div>
                                            <div className={cx('phone')}>
                                                Tình trạng:{' '}
                                                <span>
                                                    {order.orderStatus === 'Processing'
                                                        ? 'Đang chuẩn bị hàng'
                                                        : order.orderStatus === 'Shipped'
                                                        ? 'Đang vận chuyển'
                                                        : 'Đã giao hàng'}
                                                </span>
                                            </div>
                                            <div className={cx('phone')}>
                                                Tổng tiền: <span>{formatPrice(order.totalPrice)}</span>
                                            </div>
                                        </div>
                                        <div className={cx('box-product')}>
                                            {order.orderItems &&
                                                order.orderItems.map((order) => (
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
                                                                    <div className={cx('order-name')}>{order.name}</div>
                                                                )}
                                                                {order.quantity && (
                                                                    <div className={cx('order-name', 'order-info')}>
                                                                        Số lượng: {order.quantity}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            {(order.orderStatus !== 'Delivered' && (
                                                <div className={cx('box-btn')}>
                                                    <Button outline onClick={cancelOrderSubmitHandler}>
                                                        Hủy đơn hàng
                                                    </Button>
                                                </div>
                                            )) || (
                                                <div className={cx('box-btn')}>
                                                    <Button outline to={config.routes.bill}>
                                                        Quay lại
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BillDetail;
