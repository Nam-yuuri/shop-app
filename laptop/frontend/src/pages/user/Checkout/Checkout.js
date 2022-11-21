import { faAngleDown, faAngleRight, faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './Checkout.module.scss';
import Pdf from '~/components/layout/components/PreviewItem/Pdf';
import config from '~/config';

const cx = classNames.bind(styles);

function Checkout() {
    const [loginResult, setLoginResult] = useState('');
    const [onHeight, setOnHeight] = useState(false);

    const handleClick = () => {
        onHeight ? setOnHeight(false) : setOnHeight(true);
    };

    const handleBuy = () => {};

    const handleDownload = () => {};

    const handleMimus = () => {};

    const handlePlus = () => {};

    const handleIntoMoney = () => {};

    useEffect(() => {
        setTimeout(() => {
            setLoginResult('0395001595');
        }, 3000);
    }, []);

    const renderPdf = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <Pdf />
            </div>
        );
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [comments, setComments] = useState('');

    const [payment, setPayment] = useState('Chuyển khoản ngân hàng');

    //   useEffect(() => {
    //     if (user) {
    //       setName(user.name);
    //       setEmail(user.email);
    //     }
    //     if (user && user.shippingInfo) {
    //       setCity(user.shippingInfo.city);
    //       setState(user.shippingInfo.state);
    //       setCountry(user.shippingInfo.country);
    //       setAddress(user.shippingInfo.address);
    //       setPhoneNo(user.shippingInfo.phoneNo);
    //     }
    //     if (!user && shippingInfoLocal) {
    //       setName(shippingInfoLocal.name);
    //       setEmail(shippingInfoLocal.email);
    //       setCity(shippingInfoLocal.city);
    //       setState(shippingInfoLocal.state);
    //       setCountry(shippingInfoLocal.country);
    //       setAddress(shippingInfoLocal.address);
    //       setPhoneNo(shippingInfoLocal.phoneNo);
    //     }
    //   }, [user, shippingInfoLocal]);

    //   const handleChangePayment = (event) => {
    //     setPayment(event.target.value);
    //   };

    //   const checkoutSubmit = (e) => {
    //     e.preventDefault();

    //     if (phoneNo.length < 7 || phoneNo.length > 11) {
    //       // alert("Số điện thoại cần từ 8 -> 10 số");
    //       setOpenError(true);
    //       setErrorAlert("Số điện thoại cần từ 8 -> 10 số");
    //       return;
    //     }

    //     if (user) {
    //       const shippingInfo = {
    //         city: city,
    //         state: state,
    //         country: country,
    //         address: address,
    //         phoneNo: phoneNo,
    //       };

    //       const cartItems1 = cart.cartItems.map((item) => {
    //         return {
    //           ...item,
    //           product: item.product._id,
    //         };
    //       });

    //       const order = {
    //         name: user.name,
    //         email: user.email,
    //         shippingInfo: shippingInfo,
    //         orderItems: cartItems1,
    //         user: user && user._id,
    //         itemsPrice: cart && cart.totalPrice,
    //         shippingPrice: 0,
    //         totalPrice: cart && cart.totalPrice,
    //         paymentInfo: {
    //           type: payment,
    //           status: "Chưa thanh toán",
    //         },
    //         orderComments: comments,
    //         // user: user,
    //       };

    //       if (order.paymentInfo.type === "Chuyển khoản bằng Stripe") {
    //         sessionStorage.setItem("order", JSON.stringify(order));
    //         sessionStorage.setItem(
    //           "paidAt",
    //           JSON.stringify(new Date().toLocaleDateString("en-GB"))
    //         );

    //         dispatch(updateShippingInfo(shippingInfo));
    //         history.push("/payment");
    //       } else {
    //         sessionStorage.setItem("order", JSON.stringify(order));
    //         sessionStorage.setItem(
    //           "paidAt",
    //           JSON.stringify(new Date().toLocaleDateString("en-GB"))
    //         );

    //         order.paymentInfo.id = "abc";

    //         dispatch(updateShippingInfo(shippingInfo));
    //         dispatch(createOrder(order));
    //       }
    //     } else {
    //       const shippingInfo = {
    //         city: city,
    //         state: state,
    //         country: country,
    //         address: address,
    //         phoneNo: phoneNo,
    //       };

    //       const subtotal = cartItems.reduce(
    //         (acc, item) => acc + item.quantity * item.price,
    //         0
    //       );

    //       const order = {
    //         name: name,
    //         email: email,
    //         shippingInfo: shippingInfo,
    //         orderItems: cartItems,
    //         // user: user && user._id,
    //         itemsPrice: subtotal,
    //         shippingPrice: 0,
    //         totalPrice: subtotal,
    //         paymentInfo: {
    //           id: "abc",
    //           type: payment,
    //           status: "Chưa thanh toán",
    //         },
    //         orderComments: comments,
    //       };

    //       if (order.paymentInfo.type === "Chuyển khoản bằng Stripe") {
    //         //Lưu thông tin ship vào user nếu đã đăng nhập
    //         // Chưa đăng nhập thì lưu vào localStorage
    //         dispatch(
    //           saveShippingInfo({
    //             name,
    //             email,
    //             address,
    //             city,
    //             state,
    //             country,
    //             phoneNo,
    //           })
    //         );
    //         sessionStorage.setItem("order", JSON.stringify(order));

    //         history.push("/payment");
    //       } else {
    //         //Lưu thông tin ship vào user nếu đã đăng nhập
    //         // Chưa đăng nhập thì lưu vào localStorage
    //         dispatch(
    //           saveShippingInfo({
    //             name,
    //             email,
    //             address,
    //             city,
    //             state,
    //             country,
    //             phoneNo,
    //           })
    //         );
    //         dispatch(createOrder(order));
    //       }
    //     }
    //   };

    //   useEffect(() => {
    //     if (errorProfile) {
    //       setOpenError(true);
    //       setErrorAlert(errorProfile);
    //       dispatch(clearErrors());
    //     }
    //     if (isUpdated) {
    //       dispatch({ type: UPDATE_SHIP_RESET });
    //     }
    //   }, [dispatch, errorProfile, isUpdated]);

    //   useEffect(() => {
    //     if (error) {
    //       setOpenError(true);
    //       setErrorAlert(error);
    //       dispatch(clearErrors());
    //     }
    //     if (isSubmit) {
    //       // setOpenSuccess(true);
    //       // setSuccessAlert("Tạo đơn hàng thành công");
    //       Swal.fire("Thành công!", "Tạo đơn hàng thành công!", "success");
    //       localStorage.removeItem("cartItems");
    //       history.push("/");
    //       dispatch({
    //         type: CREATE_ORDER_RESET,
    //       });
    //     }
    //   }, [dispatch, error, history, isSubmit]);

    return (
        <div className={cx('Checkout')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('Checkout-container')}>
                        <div className={cx('header')}>
                            <div className={cx('header-box')}>
                                <div className={cx('box-content')}>
                                    <div className={cx('title')}>Thông tin thanh toán</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('container-left')}>
                                <div className={cx('box')}>
                                    <label>Họ và tên *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={'name'}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <label>Địa chỉ email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        value={'email'}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <label>Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Số điện thoại"
                                        required
                                        value={'phoneNo'}
                                        onChange={(e) => setPhoneNo(e.target.value)}
                                    />

                                    <div className="row" style={{ gap: '0px' }}>
                                        <div className="col-sm-6" style={{ paddingLeft: '0px' }}>
                                            <label>Tỉnh / Thành phố *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="VD: Hà Nội"
                                                value={'city'}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Quận / Huyện *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="VD: Nam Từ Liêm"
                                                value={'state'}
                                                onChange={(e) => setState(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row" style={{ gap: '0px' }}>
                                        <div className="col-sm-6" style={{ paddingLeft: '0px' }}>
                                            <label>Xã / Phường *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="VD: Xuân Phương"
                                                value={'country'}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Địa chỉ *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="VD: Số 7 ngách 47 ngõ 80"
                                                value={'address'}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <label>Thông tin bổ sung (Tùy chọn)</label>
                                    <textarea
                                        style={{ minHeight: '200px' }}
                                        className="form-control"
                                        cols="30"
                                        rows="4"
                                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
                                        value={'comments'}
                                        onChange={(e) => setComments(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className={cx('container-right')}>
                                <div className={cx('discount')}>
                                    <div className={cx('discount-header')}>
                                        <h6>Thông tin đơn hàng</h6>
                                        <a href={config.routes.cart}> Chỉnh sửa</a>
                                    </div>
                                    <div className={cx('product')}>
                                        <div className={cx('product-row')}>
                                            <div className={cx('box-info')}>
                                                <div className={cx('info-row')}>
                                                    <Button to={'/profile'} className={cx('btn-info')}>
                                                        <div className={cx('img')}>
                                                            <img
                                                                src="https://lh3.googleusercontent.com/DlwPoM-WwbjfN5auN6OZkc_7A9h9Bg1mmOcQ2U4nkCbqDLmDtkTPn1PTcYl8eGEvPWD4a1U0Pic3-qRzxA=rw"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </Button>
                                                    <div className={cx('info-content')}>
                                                        <Button to={'/profile'} className={cx('btn-info', 'boxinfo')}>
                                                            <div className={cx('info-name-text')}>
                                                                Bàn phím Logitech Bluetooth K480 (Trắng)
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-code', 'boxinfo')}>SKU: 1503118</div>
                                                        <div className={cx('box-price')}>
                                                            <div className={cx('price-discount')}>
                                                                <span className={cx('discount-span')}>47.790.000đ</span>
                                                            </div>
                                                            <div className={cx('price-real')}>
                                                                <span className={cx('real-span')}>49.890.000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('total-money', 'laptop')}>
                                    <div className={cx('total-money-header')}>
                                        <h6>Thanh toán</h6>
                                    </div>
                                    <div className={cx('total-money-content')}>
                                        <div className={cx('total-money-box')}>
                                            <div className={cx('total-provisional-calculation')}>
                                                <div className={cx('money-text')}>Tổng tạm tính</div>
                                                <div className={cx('money-number')}>88.880.000₫</div>
                                            </div>
                                            <div className={cx('into-money')}>
                                                <div className={cx('money-text')}>Thành tiền</div>
                                                <div className={cx('money-number')}>
                                                    <span>88.880.000₫</span>
                                                    <div className={cx('VTA')}>(Đã bao gồm VAT)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('btn-money')}>
                                        <Button primary large to={config.routes.login}>
                                            THANH TOÁN
                                        </Button>
                                    </div>
                                </div>
                                {onHeight ? (
                                    <div
                                        className={cx('wall')}
                                        onClick={() => {
                                            setOnHeight(false);
                                        }}
                                    ></div>
                                ) : (
                                    ''
                                )}
                                <div className={cx('total-money', 'tablet')}>
                                    <div
                                        className={cx('box-total-money')}
                                        style={{ height: onHeight ? '100px' : '0', opacity: onHeight ? '1' : '0' }}
                                    >
                                        <div className={cx('total-money-header')}>
                                            <h6>Thanh toán</h6>
                                            <div
                                                className={cx('btn-close')}
                                                onClick={() => {
                                                    setOnHeight(false);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faClose} />
                                            </div>
                                        </div>
                                        <div className={cx('total-money-content')}>
                                            <div className={cx('total-money-box')}>
                                                <div className={cx('total-provisional-calculation')}>
                                                    <div className={cx('money-text')}>Tổng tạm tính</div>
                                                    <div className={cx('money-number')}>88.880.000₫</div>
                                                </div>
                                                <div className={cx('into-money')}>
                                                    <div className={cx('money-text')}>Thành tiền</div>
                                                    <div className={cx('money-number')}>
                                                        <span>88.880.000₫</span>
                                                        <div className={cx('VTA')}>(Đã bao gồm VAT)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('container_btn-money')}>
                                        <div className={cx('box_btn-money')}>
                                            <div className={cx('money-number')} onClick={handleClick}>
                                                <span>88.880.000₫</span>
                                                <div
                                                    className={cx('btn-icon')}
                                                    style={{ transform: onHeight ? 'rotate(180deg)' : '' }}
                                                >
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </div>
                                            </div>

                                            <div className={cx('btn-money')}>
                                                <Button primary large to={config.routes.login}>
                                                    THANH TOÁN
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
