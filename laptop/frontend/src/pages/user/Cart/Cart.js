import { faAngleDown, faAngleRight, faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import styles from './Cart.module.scss';
import Pdf from '~/components/layout/components/PreviewItem/Pdf';
import config from '~/config';

const cx = classNames.bind(styles);

function Cart() {
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

    return (
        <div className={cx('Cart')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('href')}>
                        <a href="/" className={cx('home-href')}>
                            <div className={cx('href-text')}>Trang chủ</div>
                            <div className={cx('href-icon')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </a>
                        <div className={cx('href-text', 'href-text-cart')}>Giỏ hàng</div>
                    </div>
                    {!loginResult ? (
                        <div className={cx('Cart-content')}>
                            <div className={cx('box')}>
                                <div className={cx('image')}>
                                    <img src="https://i.imgur.com/Drj57qu.png" alt="" />
                                </div>
                                <div className={cx('text')}>Giỏ hàng chưa có sản phẩm nào</div>
                                <Button primary large to={config.routes.home}>
                                    Mua sắm ngay
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('Cart-container')}>
                            <div className={cx('header')}>
                                <div className={cx('header-box')}>
                                    <div className={cx('box-content')}>
                                        <div className={cx('title')}>Giỏ hàng</div>
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
                                                <Button onClick={handleDownload} className={cx('box-btn')} outline>
                                                    <div className={cx('btn-text')}>Tải báo giá</div>
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
                                                    CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ PHONG VŨ
                                                </div>
                                            </div>
                                            <div className={cx('unit-price')}>
                                                <div className={cx('unit-price-text', 'boxtext')}>Đơn giá</div>
                                            </div>
                                            <div className={cx('amount')}>
                                                <div className={cx('amount-text', 'boxtext')}>Số lượng</div>
                                            </div>
                                            <div className={cx('money')}>
                                                <div className={cx('money-text', 'boxtext')}>Thành tiền</div>
                                            </div>
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
                                                            <Button
                                                                to={'/profile'}
                                                                className={cx('btn-info', 'boxinfo')}
                                                            >
                                                                <div className={cx('info-name-text')}>
                                                                    Bàn phím Logitech Bluetooth K480 (Trắng)
                                                                </div>
                                                            </Button>
                                                            <div className={cx('info-code', 'boxinfo')}>
                                                                SKU: 1503118
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('box-price')}>
                                                    <div className={cx('price-discount')}>
                                                        <span className={cx('discount-span')}>47.790.000đ</span>
                                                    </div>
                                                    <div className={cx('price-real')}>
                                                        <span className={cx('real-span')}>49.890.000₫</span>
                                                    </div>
                                                </div>
                                                <div className={cx('box-amount')}>
                                                    <div className={cx('amount-num')}>
                                                        <button onClick={handleMimus}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        <div className={cx('number')}>1</div>
                                                        <button onClick={handlePlus}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                    <div className={cx('btn-delete')}>Xóa</div>
                                                </div>
                                                <div className={cx('box-sum-price')}>
                                                    <div className={cx('sum-price')}>
                                                        <span className={cx('sum-price-span')}>2.400.000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product')}>
                                            <div className={cx('product-row')}>
                                                <div className={cx('box-info')}>
                                                    <div className={cx('info-row')}>
                                                        <Button to={'/profile'} className={cx('btn-info')}>
                                                            <div className={cx('img')}>
                                                                <img
                                                                    src="https://lh3.googleusercontent.com/9eLN7Yv5USoT6IKyJ6iMIFpJwYfEDj2qqBPU9AQWcEIitp1Hy5vUskvqNBsfFNg1ShLopOeOjOSSXQuuEtQv=rw"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-content')}>
                                                            <Button
                                                                to={'/profile'}
                                                                className={cx('btn-info', 'boxinfo')}
                                                            >
                                                                <div className={cx('info-name-text')}>
                                                                    Máy tính xách tay/ Laptop MacBook Pro 2018 13.3"
                                                                    MR9R2 (Xám)
                                                                </div>
                                                            </Button>
                                                            <div className={cx('info-code', 'boxinfo')}>
                                                                SKU: 1808315
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('box-price')}>
                                                    <div className={cx('price-discount')}>
                                                        <span className={cx('discount-span')}>47.790.000đ</span>
                                                    </div>
                                                    <div className={cx('price-real')}>
                                                        <span className={cx('real-span')}>49.890.000₫</span>
                                                    </div>
                                                </div>
                                                <div className={cx('box-amount')}>
                                                    <div className={cx('amount-num')}>
                                                        <button onClick={handleMimus}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        <div className={cx('number')}>1</div>
                                                        <button onClick={handlePlus}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                    <div className={cx('btn-delete')}>Xóa</div>
                                                </div>
                                                <div className={cx('box-sum-price')}>
                                                    <div className={cx('sum-price')}>
                                                        <span className={cx('sum-price-span')}>2.400.000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product')}>
                                            <div className={cx('product-row')}>
                                                <div className={cx('box-info')}>
                                                    <div className={cx('info-row')}>
                                                        <Button to={'/profile'} className={cx('btn-info')}>
                                                            <div className={cx('img')}>
                                                                <img
                                                                    src="https://lh3.googleusercontent.com/9eLN7Yv5USoT6IKyJ6iMIFpJwYfEDj2qqBPU9AQWcEIitp1Hy5vUskvqNBsfFNg1ShLopOeOjOSSXQuuEtQv=rw"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-content')}>
                                                            <Button
                                                                to={'/profile'}
                                                                className={cx('btn-info', 'boxinfo')}
                                                            >
                                                                <div className={cx('info-name-text')}>
                                                                    Máy tính xách tay/ Laptop MacBook Pro 2018 13.3"
                                                                    MR9R2 (Xám)
                                                                </div>
                                                            </Button>
                                                            <div className={cx('info-code', 'boxinfo')}>
                                                                SKU: 1808315
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('box-price')}>
                                                    <div className={cx('price-discount')}>
                                                        <span className={cx('discount-span')}>47.790.000đ</span>
                                                    </div>
                                                    <div className={cx('price-real')}>
                                                        <span className={cx('real-span')}>49.890.000₫</span>
                                                    </div>
                                                </div>
                                                <div className={cx('box-amount')}>
                                                    <div className={cx('amount-num')}>
                                                        <button onClick={handleMimus}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        <div className={cx('number')}>1</div>
                                                        <button onClick={handlePlus}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                    <div className={cx('btn-delete')}>Xóa</div>
                                                </div>
                                                <div className={cx('box-sum-price')}>
                                                    <div className={cx('sum-price')}>
                                                        <span className={cx('sum-price-span')}>2.400.000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product')}>
                                            <div className={cx('product-row')}>
                                                <div className={cx('box-info')}>
                                                    <div className={cx('info-row')}>
                                                        <Button to={'laptop/'} className={cx('btn-info')}>
                                                            <div className={cx('img')}>
                                                                <img
                                                                    src="https://lh3.googleusercontent.com/9eLN7Yv5USoT6IKyJ6iMIFpJwYfEDj2qqBPU9AQWcEIitp1Hy5vUskvqNBsfFNg1ShLopOeOjOSSXQuuEtQv=rw"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-content')}>
                                                            <Button
                                                                to={'/laptop'}
                                                                className={cx('btn-info', 'boxinfo')}
                                                            >
                                                                <div className={cx('info-name-text')}>
                                                                    Máy tính xách tay/ Laptop MacBook Pro 2018 13.3"
                                                                    MR9R2 (Xám)
                                                                </div>
                                                            </Button>
                                                            <div className={cx('info-code', 'boxinfo')}>
                                                                SKU: 1808315
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('box-price')}>
                                                    <div className={cx('price-discount')}>
                                                        <span className={cx('discount-span')}>47.790.000đ</span>
                                                    </div>
                                                    <div className={cx('price-real')}>
                                                        <span className={cx('real-span')}>49.890.000₫</span>
                                                    </div>
                                                </div>
                                                <div className={cx('box-amount')}>
                                                    <div className={cx('amount-num')}>
                                                        <button onClick={handleMimus}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        <div className={cx('number')}>1</div>
                                                        <button onClick={handlePlus}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                    <div className={cx('btn-delete')}>Xóa</div>
                                                </div>
                                                <div className={cx('box-sum-price')}>
                                                    <div className={cx('sum-price')}>
                                                        <span className={cx('sum-price-span')}>2.400.000đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container-right')}>
                                    <div className={cx('discount')}>
                                        <div className={cx('discount-header')}>
                                            <h6>Khuyến mãi</h6>
                                        </div>
                                        <div className={cx('discount-content')}>
                                            Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua thêm để áp dụng
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
                                        {loginResult ? (
                                            <div className={cx('btn-money')}>
                                                <Button primary large onClick={handleIntoMoney} href={' '}>
                                                    TIẾP TỤC
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={cx('btn-money')}>
                                                <Button primary large href={'/login'}>
                                                    THANH TOÁN
                                                    <span>Bạn cần đăng nhập để tiếp tục</span>
                                                </Button>
                                            </div>
                                        )}
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
                                                {loginResult ? (
                                                    <div className={cx('btn-money')}>
                                                        <Button primary large onClick={handleIntoMoney} href={' '}>
                                                            TIẾP TỤC
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div className={cx('btn-money')}>
                                                        <Button primary large href={'/login'}>
                                                            THANH TOÁN
                                                            <span>Bạn cần đăng nhập</span>
                                                        </Button>
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
            </div>
        </div>
    );
}

export default Cart;
