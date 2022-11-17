import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
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
                    <option value={1}>Hà Nội</option>
                    <option value={2}>Thanh Hóa</option>
                    <option value={3}>Thành phố Hồ Chí Minh</option>
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
                            <label htmlFor={'a'}>Tìm đường</label>
                            <input type={'checkbox'} id={'a'} />
                            <div className={cx('box-store')}>
                                <figure className="add-store mb-2 mt-4 mb-lg-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4730315658317!2d106.68787351458909!3d10.775036392322477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b11ad45f5%3A0xe364d9f90dac0f2e!2sMinh%20Long%20Tower!5e0!3m2!1svi!2s!4v1668475708125!5m2!1svi!2s"
                                        width="100%"
                                        height="300"
                                        style={{ border: '0', borderRadius: '8px', overflow: 'hidden' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </figure>
                            </div>
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
                            <label htmlFor={'b'}>Tìm đường</label>
                            <input type={'checkbox'} id={'b'} />
                            <div className={cx('box-store')}>
                                <figure className="add-store mb-2 mt-4 mb-lg-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5550096316488!2d105.79420711473111!3d21.010467486008224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca7996de5f3%3A0x4e94335134514494!2zTmdoLiA0My85OSBUcnVuZyBLw61uaCwgVHJ1bmcgSG_DoCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1668415445971!5m2!1svi!2s"
                                        width="100%"
                                        height="300"
                                        style={{ border: '0', borderRadius: '8px', overflow: 'hidden' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </figure>
                            </div>
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
                            <label htmlFor={'c'}>Tìm đường</label>
                            <input type={'checkbox'} id={'c'} />
                            <div className={cx('box-store')}>
                                <figure className="add-store mb-2 mt-4 mb-lg-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5550096316488!2d105.79420711473111!3d21.010467486008224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca7996de5f3%3A0x4e94335134514494!2zTmdoLiA0My85OSBUcnVuZyBLw61uaCwgVHJ1bmcgSG_DoCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1668415445971!5m2!1svi!2s"
                                        width="100%"
                                        height="300"
                                        style={{ border: '0', borderRadius: '8px', overflow: 'hidden' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showroom;
