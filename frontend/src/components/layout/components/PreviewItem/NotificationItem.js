import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function NotificationItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('content')}>
                        <Button to={'/notification'}>Xem tất cả thông báo</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationItem;
