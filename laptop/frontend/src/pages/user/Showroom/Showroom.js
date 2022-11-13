import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Showroom.module.scss';

const cx = classNames.bind(styles);

function Showroom() {
    return (
        <div className={cx('Showroom')}>
            <div className={cx('left')}>
                <h5>Chọn showroom theo tỉnh/thành phố</h5>
                <select>
                    <option value={0}>Chọn tỉnh/ thành phố</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                {/* <select>
                <option value={0}>Chọn quận/ huyện</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select> */}
            </div>
            <div className={cx('right')}>
                <div className={cx('box-content')}>
                    <div className={cx('title')}>
                        <b>VĂN PHÒNG ĐIỀU HÀNH PHONG VŨ MIỀN NAM</b>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('address')}>
                            <b>Địa chỉ: </b>
                            Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí
                            Minh
                        </div>
                        <div className={cx('contact')}>
                            <div className={cx('store-contact')}>
                                <div className={cx('store-phone')}>
                                    <b>Điện thoại: </b>
                                    1800 68 65
                                </div>
                                <div className={cx('store-working-hours')}>
                                    <b>Giờ mở cửa: </b>
                                    09h00 - 18h00
                                </div>
                            </div>
                            <button className={cx('map-toggle')}>Tìm đường</button>
                        </div>
                    </div>
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('title')}>
                        <b>VĂN PHÒNG ĐIỀU HÀNH PHONG VŨ MIỀN NAM</b>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('address')}>
                            <b>Địa chỉ: </b>
                            Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí
                            Minh
                        </div>
                        <div className={cx('contact')}>
                            <div className={cx('store-contact')}>
                                <div className={cx('store-phone')}>
                                    <b>Điện thoại: </b>
                                    1800 68 65
                                </div>
                                <div className={cx('store-working-hours')}>
                                    <b>Giờ mở cửa: </b>
                                    09h00 - 18h00
                                </div>
                            </div>
                            <button className={cx('map-toggle')}>Tìm đường</button>
                        </div>
                    </div>
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('title')}>
                        <b>VĂN PHÒNG ĐIỀU HÀNH PHONG VŨ MIỀN NAM</b>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('address')}>
                            <b>Địa chỉ: </b>
                            Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí
                            Minh
                        </div>
                        <div className={cx('contact')}>
                            <div className={cx('store-contact')}>
                                <div className={cx('store-phone')}>
                                    <b>Điện thoại: </b>
                                    1800 68 65
                                </div>
                                <div className={cx('store-working-hours')}>
                                    <b>Giờ mở cửa: </b>
                                    09h00 - 18h00
                                </div>
                            </div>
                            <button className={cx('map-toggle')}>Tìm đường</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showroom;
