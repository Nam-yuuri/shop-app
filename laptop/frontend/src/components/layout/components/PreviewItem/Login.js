import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { AddressIcon, NewsIcon, NotifyIcon, OderIcon, UserIcon } from '~/components/Icons';
import { DataAccount } from '~/Data/Account/Account';
import styles from './Login.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout } from '~/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function LoginItem() {

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    function logoutUser() {
        dispatch(logout());
        // alert("Đăng xuất thành công");
        setOpenSuccess(true);
        setSuccessAlert("Đăng xuất thành công");
        navigate("/login");
      }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('box-account')}>
                        <div className={cx('account-icon')}>
                            <UserIcon />
                        </div>
                        {DataAccount.map((account) => (
                            <div className={cx('account-name')} key={account.id}>
                                <h5>{account.name}</h5>
                            </div>
                        ))}
                    </div>
                    <Button to={'/account'} className={cx('box-info', 'box-content')}>
                        <div className={cx('info-icon')}>
                            <UserIcon />
                        </div>
                        <div className={cx('info-text', 'box-text')}>Thông tin tài khoản</div>
                    </Button>
                    <Button to={'/account'} className={cx('box-oder', 'box-content')}>
                        <div className={cx('oder-icon')}>
                            <OderIcon />
                        </div>
                        <div className={cx('oder-text', 'box-text')}>Quản lý đơn hàng</div>
                    </Button>
                    <Button to={'/account'} className={cx('box-address', 'box-content')}>
                        <div className={cx('address-icon')}>
                            <AddressIcon />
                        </div>
                        <div className={cx('address-text', 'box-text')}>Sổ địa chỉ</div>
                    </Button>
                    {/* <Button to={'notification'} className={cx('box-notify', 'box-content')}>
                        <div className={cx('notify-icon')}>
                            <NotifyIcon />
                        </div>
                        <div className={cx('notify-text', 'box-text')}>Thông báo</div>
                    </Button> */}
                    <Button to={'/account'} className={cx('box-news', 'box-content')}>
                        <div className={cx('news-icon')}>
                            <NewsIcon />
                        </div>
                        <div className={cx('news-text', 'box-text')}>Bản tin</div>
                    </Button>

                    <div className={cx('btn')} onClick={logoutUser}>
                        <Button primary>Đăng xuất</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginItem;
