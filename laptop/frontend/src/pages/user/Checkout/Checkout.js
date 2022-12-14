import { faAngleDown, faAngleRight, faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './Checkout.module.scss';
import Pdf from '~/components/layout/components/PreviewItem/Pdf';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateShippingInfo } from '~/actions/userAction';
import { clearErrors, createOrder } from '~/actions/orderAction';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { CREATE_ORDER_RESET } from '~/constants/orderConstants';
import { UPDATE_SHIP_RESET } from '~/constants/userConstants';
import formatPrice from '~/utils/formatPrice';
import Loading from '~/components/Loading/Loading';
import { Alert, Snackbar } from '@mui/material';

const cx = classNames.bind(styles);

function Checkout() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
    };

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

    const [payment, setPayment] = useState('Thanh to??n khi nh???n h??ng');

    const { cart, loading: cartLoading } = useSelector((state) => state.cart);
    const { isAuthenticated, user, loading } = useSelector((state) => state.user);
    const { error, isSubmit } = useSelector((state) => state.newOrder);
    const { error: errorProfile, isUpdated, loading: profileLoading } = useSelector((state) => state.profile);

    // console.log('cart', cart);
    // console.log('isSubmit', isSubmit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
        if (user && user.shippingInfo) {
            setCity(user.shippingInfo.city);
            setState(user.shippingInfo.state);
            setCountry(user.shippingInfo.country);
            setAddress(user.shippingInfo.address);
            setPhoneNo(user.shippingInfo.phoneNo);
        }
    }, [user]);

    const handleChangePayment = (event) => {
        setPayment(event.target.value);
    };

    const checkoutSubmit = (e) => {
        e.preventDefault();

        if (phoneNo.length < 7 || phoneNo.length > 11) {
            // alert("S??? ??i???n tho???i c???n t??? 8 -> 10 s???");
            setOpenError(true);
            setErrorAlert('S??? ??i???n tho???i c???n t??? 8 -> 10 s???');
            return;
        }

        if (user) {
            const shippingInfo = {
                city: city,
                state: state,
                country: country,
                address: address,
                phoneNo: phoneNo,
            };

            const cartItems1 = cart.cartItems.map((item) => {
                return {
                    ...item,
                    product: item.product._id,
                };
            });

            const order = {
                name: user.name,
                email: user.email,
                shippingInfo: shippingInfo,
                orderItems: cartItems1,
                user: user && user._id,
                itemsPrice: cart && cart.totalPrice,
                shippingPrice: 0,
                totalPrice: cart && cart.totalPrice,
                paymentInfo: {
                    type: payment,
                    status: 'Ch??a thanh to??n',
                },
                orderComments: comments,
                // user: user,
            };

            // if (order.paymentInfo.type === 'Chuy???n kho???n b???ng the') {
            //     sessionStorage.setItem('order', JSON.stringify(order));
            //     sessionStorage.setItem('paidAt', JSON.stringify(new Date().toLocaleDateString('en-GB')));

            //     dispatch(updateShippingInfo(shippingInfo));
            //     // history.push('/payment');
            // } else {
            sessionStorage.setItem('order', JSON.stringify(order));
            sessionStorage.setItem('paidAt', JSON.stringify(new Date().toLocaleDateString('en-GB')));

            order.paymentInfo.id = 'abc';

            dispatch(updateShippingInfo(shippingInfo));
            dispatch(createOrder(order));
            // }
        }
    };

    useEffect(() => {
        if (errorProfile) {
            setOpenError(true);
            setErrorAlert(errorProfile);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            dispatch({ type: UPDATE_SHIP_RESET });
        }
    }, [dispatch, errorProfile, isUpdated]);

    useEffect(() => {
        if (error) {
            setOpenError(true);
            setErrorAlert('Ch??a c?? ?????a ch??? nh???n h??ng');
            // Swal.fire('Th??nh c??ng!', 'S???a Banner th??nh c??ng!', 'success');
            dispatch(clearErrors());
        }
        if (isSubmit) {
            // setOpenSuccess(true);
            // setSuccessAlert("T???o ????n h??ng th??nh c??ng");
            // Swal.fire('Th??nh c??ng!', 'T???o ????n h??ng th??nh c??ng!', 'success');
            Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Mua s???n ph???m th??nh c??ng!',
                showConfirmButton: false,
                timer: 1500,
            });
            localStorage.removeItem('cartItems');
            // history.push('/');
            navigate('/');
            dispatch({
                type: CREATE_ORDER_RESET,
            });
        }
    }, [dispatch, error, isSubmit]);

    return (
        <div>
            {cartLoading ? (
                <Loading />
            ) : (
                <div className={cx('Checkout')}>
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                            {errorAlert}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                        <Alert
                            onClose={handleCloseSuccess}
                            severity="success"
                            sx={{ width: '100%', fontSize: '0.85em' }}
                        >
                            {successAlert}
                        </Alert>
                    </Snackbar>
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>
                            <div className={cx('Checkout-container')}>
                                <div className={cx('header')}>
                                    <div className={cx('header-box')}>
                                        <div className={cx('box-content')}>
                                            <div className={cx('title')}>Th??ng tin thanh to??n</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('content')}>
                                    <div className={cx('container-left')}>
                                        <div className={cx('box')}>
                                            <label>H??? v?? t??n *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />

                                            <label>?????a ch??? email *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                            <label>S??? ??i???n tho???i *</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="S??? ??i???n tho???i"
                                                required
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
                                            />

                                            <div className="row" style={{ gap: '0px' }}>
                                                <div className="col-sm-6" style={{ paddingLeft: '0px' }}>
                                                    <label>T???nh / Th??nh ph??? *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="VD: H?? N???i"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Qu???n / Huy???n *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="VD: Nam T??? Li??m"
                                                        value={state}
                                                        onChange={(e) => setState(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row" style={{ gap: '0px' }}>
                                                <div className="col-sm-6" style={{ paddingLeft: '0px' }}>
                                                    <label>X?? / Ph?????ng *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="VD: Xu??n Ph????ng"
                                                        value={country}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>?????a ch??? *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="VD: S??? 7 ng??ch 47 ng?? 80"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('container-right')}>
                                        <div className={cx('discount')}>
                                            <div className={cx('discount-header')}>
                                                <h6>Th??ng tin ????n h??ng</h6>
                                                <a href={config.routes.cart}> Ch???nh s???a</a>
                                            </div>
                                            {cart &&
                                                cart.cartItems.map((cart) => (
                                                    <div className={cx('product')} key={cart._id}>
                                                        <div className={cx('product-row')}>
                                                            <div className={cx('box-info')}>
                                                                <div className={cx('info-row')}>
                                                                    <Button to={'/profile'} className={cx('btn-info')}>
                                                                        <div className={cx('img')}>
                                                                            <img src={cart.image} alt={cart.name} />
                                                                        </div>
                                                                    </Button>
                                                                    <div className={cx('info-content')}>
                                                                        <Button
                                                                            to={'/profile'}
                                                                            className={cx('btn-info', 'boxinfo')}
                                                                        >
                                                                            <div className={cx('info-name-text')}>
                                                                                {cart.name}
                                                                            </div>
                                                                        </Button>
                                                                        <div className={cx('info-code', 'boxinfo')}>
                                                                            S??? l?????ng: {cart.quantity}
                                                                        </div>
                                                                        <div className={cx('box-price')}>
                                                                            <div className={cx('price-discount')}>
                                                                                <span className={cx('discount-span')}>
                                                                                    {formatPrice(cart.priceSale)}
                                                                                </span>
                                                                            </div>
                                                                            <div className={cx('price-real')}>
                                                                                <span className={cx('real-span')}>
                                                                                    {formatPrice(cart.price)}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className={cx('total-money', 'laptop')}>
                                            <div className={cx('total-money-header')}>
                                                <h6>Thanh to??n</h6>
                                            </div>
                                            {cart && (
                                                <div className={cx('total-money-content')}>
                                                    <div className={cx('total-money-box')}>
                                                        <div className={cx('total-provisional-calculation')}>
                                                            <div className={cx('money-text')}>T???ng t???m t??nh</div>
                                                            <div className={cx('money-number')}>
                                                                {formatPrice(cart.totalPrice)}
                                                            </div>
                                                        </div>
                                                        <div className={cx('into-money')}>
                                                            <div className={cx('money-text')}>Th??nh ti???n</div>
                                                            <div className={cx('money-number')}>
                                                                <span>{formatPrice(cart.totalPrice)}</span>
                                                                <div className={cx('VTA')}>(???? bao g???m VAT)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className={cx('btn-money')}>
                                                <Button primary large onClick={checkoutSubmit}>
                                                    THANH TO??N
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
                                        {cart && (
                                            <div className={cx('total-money', 'tablet')}>
                                                <div
                                                    className={cx('box-total-money')}
                                                    style={{
                                                        height: onHeight ? '100px' : '0',
                                                        opacity: onHeight ? '1' : '0',
                                                    }}
                                                >
                                                    <div className={cx('total-money-header')}>
                                                        <h6>Thanh to??n</h6>
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
                                                                <div className={cx('money-text')}>T???ng t???m t??nh</div>
                                                                <div className={cx('money-number')}>
                                                                    {formatPrice(cart.totalPrice)}
                                                                </div>
                                                            </div>
                                                            <div className={cx('into-money')}>
                                                                <div className={cx('money-text')}>Th??nh ti???n</div>
                                                                <div className={cx('money-number')}>
                                                                    <span>{formatPrice(cart.totalPrice)}</span>
                                                                    <div className={cx('VTA')}>(???? bao g???m VAT)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('container_btn-money')}>
                                                    <div className={cx('box_btn-money')}>
                                                        <div className={cx('money-number')} onClick={handleClick}>
                                                            <span>{formatPrice(cart.totalPrice)}</span>
                                                            <div
                                                                className={cx('btn-icon')}
                                                                style={{ transform: onHeight ? 'rotate(180deg)' : '' }}
                                                            >
                                                                <FontAwesomeIcon icon={faAngleDown} />
                                                            </div>
                                                        </div>

                                                        <div className={cx('btn-money')}>
                                                            <Button
                                                                primary
                                                                large
                                                                onClick={() => {
                                                                    checkoutSubmit();
                                                                }}
                                                            >
                                                                THANH TO??N
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
