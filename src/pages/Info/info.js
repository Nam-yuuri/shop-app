import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { AddressIcon, NewsIcon, NotificationIcon, NotificationIcon2, OderIcon, UserIcon } from '~/components/Icons';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('info')}>
            <div className={cx('container-info')}>
                <div className={cx('container-left')}>
                    <div className={cx('box-left')}>
                        <div className={cx('left-top')}>
                            <div className={cx('top-img')}>
                                {/* <UserIcon /> */}
                                <img
                                    src="https://lh3.googleusercontent.com/a-/ACNPEu8kh1eEtlYHUkP5gUWSsoxnDikFma6Ho4-EoF3g=s96-c-rw"
                                    alt=""
                                />
                            </div>
                            <div className={cx('top-text')}>
                                <h5 className={cx('top-title')}>Tài khoản của</h5>
                                <h4 className={cx('top-name')}>Hoài Nam Hoàng Võ</h4>
                            </div>
                        </div>
                        <ul className={cx('left-bottom')}>
                            <Button to="/" className={cx('bottom-btn')}>
                                <div className={cx('bottom-list', 'active')}>
                                    <UserIcon />
                                    <h5>Thông tin tài khoản</h5>
                                </div>
                            </Button>
                            <Button to="/" className={cx('bottom-btn')}>
                                <div className={cx('bottom-list')}>
                                    <OderIcon />
                                    <h5>Quản lý đơn hàng</h5>
                                </div>
                            </Button>
                            <Button to="/" className={cx('bottom-btn')}>
                                <div className={cx('bottom-list')}>
                                    <AddressIcon />
                                    <h5>Sổ địa chỉ</h5>
                                </div>
                            </Button>
                            <Button to="/" className={cx('bottom-btn')}>
                                <div className={cx('bottom-list')}>
                                    <NotificationIcon2 />
                                    <h5>Thông báo</h5>
                                </div>
                            </Button>
                            <Button to="/" className={cx('bottom-btn')}>
                                <div className={cx('bottom-list')}>
                                    <NewsIcon />
                                    <h5>Bản tin</h5>
                                </div>
                            </Button>
                            <li className={cx('border-list')}></li>
                        </ul>
                    </div>
                </div>
                <div className={cx('container-right')}>
                    <h5>Thông tin tài khoản</h5>
                    <div className={cx('box-right')}>
                        <div className={cx('box-content')}>
                            <form className={cx('box-form')}>
                                <div className={cx('name', 'box-form')}>
                                    <h6>Họ tên</h6>
                                    <input></input>
                                </div>
                                <div className={cx('mail', 'box-form')}>
                                    <h6>Email</h6>
                                    <input></input>
                                </div>
                                <div className={cx('phone', 'box-form')}>
                                    <h6>Số điện thoại</h6>
                                    <input ></input>
                                </div>
                                <div className={cx('birthday', 'box-form')}>
                                    <h6>Ngày sinh</h6>
                                    <input type={'date'}></input>
                                </div>
                                <div className={cx('birthday', 'box-form')}>
                                    <h6>Giới tính</h6>
                                    <label>
                                        <input name="sex" type={'radio'} value={'M'}></input>
                                        <p>Nam</p>
                                    </label>
                                    <label>
                                        <input name="sex" type={'radio'} value={'F'}></input>
                                        <p>Nữ</p>
                                    </label>
                                    <label>
                                        <input name="sex" type={'radio'} value={'O'}></input>
                                        <p>Khác</p>
                                    </label>
                                </div>
                                <div className={cx('btn')}>
                                    {/* <Button primary large>Cập nhật</Button> */}
                                    <Button disabled large>Cập nhật</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
