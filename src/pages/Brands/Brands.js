import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Grid from '~/components/Grid';
import styles from './Brands.module.scss';

const cx = classNames.bind(styles);

function Brands() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(500);

    const handlecheck = () => {
    };

    return (
        <div className={cx('brands')}>
            <div className={cx('href')}>
                <a href="/" className={cx('home-href')}>
                    <div className={cx('href-text')}>Trang chủ</div>
                    <div className={cx('href-icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </a>
                <div className={cx('href-text', 'href-text-cart')}>Laptop</div>
            </div>
            <div className={cx('container')}>
                <div className={cx('Left')}>
                    <div className={cx('box-left')}>
                        {/* <div className={cx('Price-range')}>
                            <h5>Khoảng giá</h5>
                            <div className={cx('box-price')}>
                                <span className={cx('box-span')}>0</span>
                                <span className={cx('box-span')}>10.000.000</span>
                            </div>
                            <div className={cx('range-slider')}>
                                <p>range slider</p>
                            </div>
                        </div> */}
                        <div className={cx('container-Trademark')}>
                            <div className={cx('box-header')}>
                                <h5>Thương hiệu</h5>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            <div className={cx('Trademark')}>
                                <div className={cx('check')}>
                                    <label className={cx('label')}>
                                        <input type={'checkbox'} value={'ACER'} onClick={handlecheck} />
                                        ACER
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Right')}>
                    <Grid />
                </div>
            </div>
        </div>
    );
}

export default Brands;
