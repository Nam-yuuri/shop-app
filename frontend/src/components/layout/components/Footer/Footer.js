import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('footer-info')}>
                        <div className={cx('title')}>Công ty cổ phần thương mại - dịch vụ Phong Vũ</div>
                        <div className={cx('content')}>
                            © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ
                            <br />
                            Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày 30
                            tháng 05 năm 2007
                        </div>
                    </div>
                    <div className={cx('footer-address')}>
                        <div className={cx('headquarters-box')}>
                            <span className={cx('headquarters-title')}>Địa chỉ trụ sở chính</span>
                            <div className={cx('headquarters-content')}>
                                Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh
                            </div>
                        </div>
                        <div className={cx('headquarters-box')}>
                            <span className={cx('headquarters-title')}>Văn phòng điều hành miền Bắc</span>
                            <div className={cx('headquarters-content')}>
                                Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội
                            </div>
                        </div>
                        <div className={cx('headquarters-box')}>
                            <span className={cx('headquarters-title')}>Văn phòng điều hành miền Nam</span>
                            <div className={cx('headquarters-content')}>
                                Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ
                                Chí Minh
                            </div>
                        </div>
                    </div>
                    <div className={cx('image')}>
                        <Button href={''}>
                            <img src="https://shopfront-cdn.tekoapis.com/common/da-dang-ky.png" alt="" />
                        </Button>
                        <Button href={''}>
                            <img
                                src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=53b44883-ed2a-434d-902b-5adce10aafd5"
                                alt=""
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
