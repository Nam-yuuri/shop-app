import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile')}>
            <div className={cx('href')}>
                <a href="/" className={cx('home-href')}>
                    <div className={cx('href-text')}>Trang chủ</div>
                    <div className={cx('href-icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </a>
                <div className={cx('href-text', 'href-text-cart')}>Laptop</div>
            </div>
            <div className={cx('content')}>
                <div className={cx('Left')}>
                    <div className={cx('container-left')}>a</div>
                </div>
                <div className={cx('Right')}>b</div>
            </div>
        </div>
    );
}

export default Profile;
