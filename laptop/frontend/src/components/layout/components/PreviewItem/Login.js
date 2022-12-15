import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { AddressIcon, NewsIcon, NotifyIcon, OderIcon, UserIcon } from '~/components/Icons';
import { DataAccount } from '~/Data/Account/Account';
import styles from './Login.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout } from '~/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import config from '~/config';
import { Dashboard } from '@mui/icons-material';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

function LoginItem() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { isAuthenticated, user, loading } = useSelector((state) => state.user);

    function logoutUser() {
        dispatch(logout());
        navigate('/login');
        setOpenSuccess(true);
        setSuccessAlert('Đăng xuất thành công');
    }

    // console.log('userinfo: ', user);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('box-account')}>
                        <div className={cx('account-icon')}>
                            {/* <UserIcon /> */}
                            {user && user.avatar && (
                                <img
                                    style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                                    src={user.avatar.url}
                                    alt=""
                                />
                            )}
                        </div>
                        {/* {DataAccount.map((account) => ( */}
                        <div className={cx('account-name')}>{user && <h5>{user.name}</h5>}</div>
                        {/* ))} */}
                    </div>
                    <Button to={'/account'} className={cx('box-info', 'box-content')}>
                        <div className={cx('info-icon')}>
                            <UserIcon />
                        </div>
                        <div className={cx('info-text', 'box-text')}>Thông tin tài khoản</div>
                    </Button>
                    <Button to={'/bill'} className={cx('box-oder', 'box-content')}>
                        <div className={cx('oder-icon')}>
                            <OderIcon />
                        </div>
                        <div className={cx('oder-text', 'box-text')}>Quản lý đơn hàng</div>
                    </Button>
                    <Button to={'/address'} className={cx('box-address', 'box-content')}>
                        <div className={cx('address-icon')}>
                            <AddressIcon />
                        </div>
                        <div className={cx('address-text', 'box-text')}>Sổ địa chỉ</div>
                    </Button>
                    {user && user.role === 'admin' && (
                        <Button to={config.routes.dashBoard} className={cx('box-notify', 'box-content')}>
                            <div className={cx('notify-icon')}>
                                <Dashboard />
                            </div>
                            <div className={cx('notify-text', 'box-text')}>Quản lý cửa hàng</div>
                        </Button>
                    )}

                    <div className={cx('btn')}>
                        <Button primary to={config.routes.login} onClick={logoutUser} style={{ width: '100%' }}>
                            Đăng xuất
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginItem;
