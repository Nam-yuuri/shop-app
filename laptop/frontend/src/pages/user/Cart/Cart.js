import { faAngleDown, faAngleRight, faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './Cart.module.scss';
import Pdf from '~/components/layout/components/PreviewItem/Pdf';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import formatPrice from '~/utils/formatPrice';
import { addToCart, deleteFromCart, getCart } from '~/actions/cartAction';
import { ADD_TO_CART_RESET, REMOVE_CART_ITEM_RESET } from '~/constants/cartConstants';
import { Alert, Snackbar } from '@mui/material';

const cx = classNames.bind(styles);

function Cart() {
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
    const dispatch = useDispatch();

    const { cart, isDeleted, isUpdated, loading } = useSelector((state) => state.cart);
    const { isAuthenticated } = useSelector((state) => state.user);

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            // alert("S???n ph???m trong kho kh??ng c??n ?????");
            setOpenError(true);
            setErrorAlert('S???n ph???m trong kho kh??ng c??n ?????');
            return;
        }
        dispatch(addToCart(id, 1));
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (newQty === 1) {
            // dispatch(deleteFromCart(id));
            // return;
            // break;
        }
        if (1 >= quantity) {
            return;
        }
        dispatch(addToCart(id, -1));
    };

    const deleteCartItems = (id) => {
        dispatch(deleteFromCart(id));
    };

    useEffect(() => {
        if (isUpdated) {
            dispatch(getCart());
            dispatch({ type: ADD_TO_CART_RESET });
        }
        if (isDeleted) {
            setOpenSuccess(true);
            setSuccessAlert('X??a s???n ph???m kh???i gi??? h??ng th??nh c??ng');
            dispatch(getCart());
            dispatch({ type: REMOVE_CART_ITEM_RESET });
        }
    }, [dispatch, isUpdated, isDeleted]);

    // console.log('cart: ', cart);

    return (
        <div className={cx('Cart')}>
            <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {errorAlert}
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {successAlert}
                </Alert>
            </Snackbar>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('href')}>
                        <a href="/" className={cx('home-href')}>
                            <div className={cx('href-text')}>Trang ch???</div>
                            <div className={cx('href-icon')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </a>
                        <div className={cx('href-text', 'href-text-cart')}>Gi??? h??ng</div>
                    </div>
                    {(cart && cart.cartItems.length > 0 && (
                        <div className={cx('Cart-container')}>
                            <div className={cx('header')}>
                                <div className={cx('header-box')}>
                                    <div className={cx('box-content')}>
                                        <div className={cx('title')}>Gi??? h??ng</div>
                                    </div>
                                </div>
                                <div className={cx('download-pdf')}>
                                    <div className={cx('pdf-box')}>
                                        <Tippy
                                            interactive
                                            delay={[100, 200]}
                                            offset={[0, 0]}
                                            placement="bottom"
                                            render={renderPdf}
                                        >
                                            <div>
                                                <Button className={cx('box-btn')} outline to={'/pdf'}>
                                                    <div className={cx('btn-text')}>T???i b??o gi??</div>
                                                    <div className={cx('btn-icon')}>
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </div>
                                                </Button>
                                            </div>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('container-left')}>
                                    <div className={cx('box')}>
                                        <div className={cx('header-left')}>
                                            <div className={cx('name')}>
                                                <div className={cx('name-text', 'boxtext')}>
                                                    C??NG TY C??? PH???N TH????NG M???I D???CH V??? PHONG V??
                                                </div>
                                            </div>
                                            <div className={cx('unit-price')}>
                                                <div className={cx('unit-price-text', 'boxtext')}>????n gi??</div>
                                            </div>
                                            <div className={cx('amount')}>
                                                <div className={cx('amount-text', 'boxtext')}>S??? l?????ng</div>
                                            </div>
                                            <div className={cx('money')}>
                                                <div className={cx('money-text', 'boxtext')}>Th??nh ti???n</div>
                                            </div>
                                        </div>
                                        {cart.cartItems.map((cart) => (
                                            <div className={cx('product')} key={cart._id}>
                                                <div className={cx('product-row')}>
                                                    <div className={cx('box-info')}>
                                                        <div className={cx('info-row')}>
                                                            <Button
                                                                href={`profile/${cart.product._id}`}
                                                                className={cx('btn-info')}
                                                            >
                                                                <div className={cx('img')}>
                                                                    <img src={cart.image} alt={cart.name} />
                                                                </div>
                                                            </Button>
                                                            <div className={cx('info-content')}>
                                                                <Button
                                                                    href={`profile/${cart.product._id}`}
                                                                    className={cx('btn-info', 'boxinfo')}
                                                                >
                                                                    <div className={cx('info-name-text')}>
                                                                        {cart.name}
                                                                    </div>
                                                                </Button>
                                                                {cart.product.Demand && (
                                                                    <div className={cx('info-code', 'boxinfo')}>
                                                                        Nhu c???u: {cart.product.Demand}
                                                                    </div>
                                                                )}
                                                                {cart.product.CPU && (
                                                                    <div className={cx('info-code', 'boxinfo')}>
                                                                        CPU: {cart.product.CPU}
                                                                    </div>
                                                                )}
                                                                {cart.product.RAM && (
                                                                    <div className={cx('info-code', 'boxinfo')}>
                                                                        RAM: {cart.product.RAM}
                                                                    </div>
                                                                )}
                                                                {cart.product.Operating_system && (
                                                                    <div className={cx('info-code', 'boxinfo')}>
                                                                        H??? ??i???u h??nh: {cart.product.Operating_system}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
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
                                                    <div className={cx('box-amount')}>
                                                        <div className={cx('amount-num')}>
                                                            <button
                                                                onClick={() => {
                                                                    decreaseQuantity(cart.product._id, cart.quantity);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faMinus} />
                                                            </button>
                                                            <div className={cx('number')}>{cart.quantity}</div>
                                                            <button
                                                                onClick={() => {
                                                                    increaseQuantity(
                                                                        cart.product._id,
                                                                        cart.quantity,
                                                                        cart.product.Stock,
                                                                    );
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </button>
                                                        </div>
                                                        <div
                                                            className={cx('btn-delete')}
                                                            onClick={() => deleteCartItems(cart.product._id)}
                                                        >
                                                            X??a
                                                        </div>
                                                    </div>
                                                    <div className={cx('box-sum-price')}>
                                                        <div className={cx('sum-price')}>
                                                            <span className={cx('sum-price-span')}>
                                                                {/* {formatPrice(cart.priceSale * cart.quantity)} */}
                                                                {formatPrice(
                                                                    parseFloat(
                                                                        (cart.price / 1000000 -
                                                                            (
                                                                                ((cart.price / 1000000) *
                                                                                    cart.discountPercent) /
                                                                                100
                                                                            ).toFixed(0)) *
                                                                            1000000,
                                                                    ) * cart.quantity,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={cx('container-right')}>
                                    <div className={cx('discount')}>
                                        <div className={cx('discount-header')}>
                                            <h6>Khuy???n m??i</h6>
                                        </div>
                                        <div className={cx('discount-content')}>
                                            {/* ????n h??ng ch??a ????? ??i???u ki???n ??p d???ng khuy???n m??i. Vui l??ng mua th??m ????? ??p d???ng */}
                                            Mi???n ph?? v???n chuy???n cho t???t c??? c??c ????n h??ng c?? gi?? tr??? tr??n 800.000??
                                        </div>
                                    </div>
                                    <div className={cx('total-money', 'laptop')}>
                                        <div className={cx('total-money-header')}>
                                            <h6>Thanh to??n</h6>
                                        </div>
                                        <div className={cx('total-money-content')}>
                                            <div className={cx('total-money-box')}>
                                                <div className={cx('total-provisional-calculation')}>
                                                    <div className={cx('money-text')}>T???ng t???m t??nh</div>
                                                    {cart.cartItems && (
                                                        <div className={cx('money-number')}>
                                                            {formatPrice(cart.totalPrice)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={cx('into-money')}>
                                                    <div className={cx('money-text')}>Th??nh ti???n</div>
                                                    <div className={cx('money-number')}>
                                                        <span>
                                                            {formatPrice(cart.totalPrice)}
                                                        </span>
                                                        <div className={cx('VTA')}>(???? bao g???m VAT)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('btn-money')}>
                                            <Button primary large onClick={handleIntoMoney} to={config.routes.checkout}>
                                                TI???P T???C
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
                                                            <span>{formatPrice(cart.totalPrice)}</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('into-money')}>
                                                        <div className={cx('money-text')}>Th??nh ti???n</div>
                                                        <div className={cx('money-number')}>
                                                            {formatPrice(cart.totalPrice + cart.totalPrice / 10)}
                                                            <div className={cx('VTA')}>(???? bao g???m VAT)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('container_btn-money')}>
                                            <div className={cx('box_btn-money')}>
                                                <div className={cx('money-number')} onClick={handleClick}>
                                                    <span>{formatPrice(cart.totalPrice + cart.totalPrice / 10)}</span>
                                                    <div
                                                        className={cx('btn-icon')}
                                                        style={{ transform: onHeight ? 'rotate(180deg)' : '' }}
                                                    >
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </div>
                                                </div>
                                                {loginResult ? (
                                                    <div className={cx('btn-money')}>
                                                        <Button
                                                            primary
                                                            large
                                                            onClick={handleIntoMoney}
                                                            to={config.routes.checkout}
                                                        >
                                                            TI???P T???C
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div className={cx('btn-money')}>
                                                        <Button primary large to={config.routes.login}>
                                                            THANH TO??N
                                                            <span>B???n c???n ????ng nh???p</span>
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) || (
                        <div className={cx('Cart-content')}>
                            <div className={cx('box')}>
                                <div className={cx('image')}>
                                    <img src="https://i.imgur.com/Drj57qu.png" alt="" />
                                </div>
                                <div className={cx('text')}>Gi??? h??ng ch??a c?? s???n ph???m n??o</div>
                                <Button primary large to={config.routes.home}>
                                    Mua s???m ngay
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
