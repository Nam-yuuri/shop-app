import { faAngleDown, faAngleRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const handleBuy = () => {};

    const handleDownload = () => {};

    const handleMimus = () => {};

    const handlePlus = () => {};

    const handleIntoMoney = () => {};

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
                    {/* <div className={cx('Cart-content')}>
                        <div className={cx('box')}>
                            <div className={cx('image')}>
                                <img src="https://i.imgur.com/Drj57qu.png" alt="" />
                            </div>
                            <div className={cx('text')}>Giỏ hàng chưa có sản phẩm nào</div>
                            <Button primary large onClick={handleBuy} to={'/'}>
                                Mua sắm ngay
                            </Button>
                        </div>
                    </div> */}

                    <div className={cx('Cart-container')}>
                        <div className={cx('header')}>
                            <div className={cx('header-box')}>
                                <div className={cx('box-content')}>
                                    <div className={cx('title')}>Giỏ hàng</div>
                                </div>
                            </div>
                            <div className={cx('download-pdf')}>
                                <div className={cx('pdf-box')}>
                                    <Button onClick={handleDownload} className={cx('box-btn')} outline>
                                        <div className={cx('btn-text')}>Tải báo giá</div>
                                        <div className={cx('btn-icon')}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </div>
                                    </Button>
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
                                                    <Button to={'laptop/'} className={cx('btn-info')}>
                                                        <div className={cx('img')}>
                                                            <img
                                                                src="https://lh3.googleusercontent.com/DlwPoM-WwbjfN5auN6OZkc_7A9h9Bg1mmOcQ2U4nkCbqDLmDtkTPn1PTcYl8eGEvPWD4a1U0Pic3-qRzxA=rw"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </Button>
                                                    <div className={cx('info-content')}>
                                                        <Button to={'/laptop'} className={cx('btn-info', 'boxinfo')}>
                                                            <div className={cx('info-name-text')}>
                                                                Bàn phím Logitech Bluetooth K480 (Trắng)
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-code', 'boxinfo')}>SKU: 1503118</div>
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
                                                    <Button to={'/laptop'} className={cx('btn-info')}>
                                                        <div className={cx('img')}>
                                                            <img
                                                                src="https://lh3.googleusercontent.com/9eLN7Yv5USoT6IKyJ6iMIFpJwYfEDj2qqBPU9AQWcEIitp1Hy5vUskvqNBsfFNg1ShLopOeOjOSSXQuuEtQv=rw"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </Button>
                                                    <div className={cx('info-content')}>
                                                        <Button to={'laptop/'} className={cx('btn-info', 'boxinfo')}>
                                                            <div className={cx('info-name-text')}>
                                                                Máy tính xách tay/ Laptop MacBook Pro 2018 13.3" MR9R2
                                                                (Xám)
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-code', 'boxinfo')}>SKU: 1808315</div>
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
                                                        <Button to={'/laptop'} className={cx('btn-info', 'boxinfo')}>
                                                            <div className={cx('info-name-text')}>
                                                                Máy tính xách tay/ Laptop MacBook Pro 2018 13.3" MR9R2
                                                                (Xám)
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-code', 'boxinfo')}>SKU: 1808315</div>
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
                                                        <Button to={'/laptop'} className={cx('btn-info', 'boxinfo')}>
                                                            <div className={cx('info-name-text')}>
                                                                Máy tính xách tay/ Laptop MacBook Pro 2018 13.3" MR9R2
                                                                (Xám)
                                                            </div>
                                                        </Button>
                                                        <div className={cx('info-code', 'boxinfo')}>SKU: 1808315</div>
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
                                <div className={cx('total-money')}>
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
                                        <Button primary large onClick={handleIntoMoney}>
                                            TIẾP TỤC
                                        </Button>
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

export default Cart;
