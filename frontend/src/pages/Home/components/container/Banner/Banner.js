import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <div className={cx('box-banner')}>
                <div className={cx('box-img')}>
                    <img
                        src="https://lh3.googleusercontent.com/KAR52NV6fHA6E5A6Cl-iDBxWXhvMdZh9kS4N1ZrWB9Xt0_vhm-anfRkms5yxBQ3RfJ3Qkm8pbXgpC2lqMbR4uszgq_Zgb_E=rw-w1232"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
