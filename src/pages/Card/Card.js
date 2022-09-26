import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card() {
    const handleBuy = () => {};

    const handleDownload = () => {};

    return (
        <div className={cx('Card')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('href')}>
                        <a href="/" className={cx('home-href')}>
                            <div className={cx('href-text')}>Trang chủ</div>
                            <div className={cx('href-icon')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </a>
                        <div className={cx('href-text')}>Giỏ hàng</div>
                    </div>
                    {/* <div className={cx('Card-content')}>
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

                    <div className={cx('Card-container')}>
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-right')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
