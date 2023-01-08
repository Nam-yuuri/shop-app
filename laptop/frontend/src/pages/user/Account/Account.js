import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loadUser, updatePassword, updateProfile } from '~/actions/userAction';
import Button from '~/components/Button';
import styles from './Account.module.scss';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useNavigate } from 'react-router-dom';
import { UPDATE_PASSWORD_RESET, UPDATE_PROFILE_RESET, UPDATE_SHIP_RESET } from '~/constants/userConstants';
import { Alert, Snackbar } from '@mui/material';

const cx = classNames.bind(styles);

function Account() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneno] = useState('');
    const [address, setAddress] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { isAuthenticated, user, loading } = useSelector((state) => state.user);
    const { error, isUpdated } = useSelector((state) => state.profile);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
        if (user && user.shippingInfo) {
            setAddress(user.shippingInfo.address);
            setPhoneno(user.shippingInfo.phoneNo);
        }
        if (error) {
            setOpenError(true);
            setErrorAlert(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            // setOpenSuccess(true);
            // setSuccessAlert("Cập nhật thành công");
            Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Cập nhật thành công',
                showConfirmButton: false,
                timer: 1500,
            });
            // Swal.fire('Thành công!', 'Cập nhật thành công!', 'success');
            dispatch(loadUser());
            navigate('/account');
            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
            dispatch({
                type: UPDATE_PASSWORD_RESET,
            });
            dispatch({
                type: UPDATE_SHIP_RESET,
            });
        }
    }, [dispatch, error, navigate, user, isUpdated]);

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const myForm = {
            name,
            email,
        };
        dispatch(updateProfile(myForm));
    };

    const updatePasswordSubmit = (e) => {
        e.preventDefault();

        const myForm = {
            oldPassword,
            newPassword,
            confirmPassword,
        };
        dispatch(updatePassword(myForm));
    };

    return (
        <div className={cx('info')}>
            <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {errorAlert}
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {successAlert}
                </Alert>
            </Snackbar>
            <div className={cx('container-info')}>
                <div className={cx('container-left')}>
                    <Sidebar />
                </div>
                <div className={cx('container-right')}>
                    <div className={cx('box-right')}>
                        <div className={cx('box-content')}>
                            <h5>Thông tin tài khoản</h5>
                            <form className={cx('box-form')} onSubmit={updateProfileSubmit}>
                                <div className={cx('name', 'box-form')}>
                                    <h6>Họ tên</h6>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className={cx('mail', 'box-form')}>
                                    <h6>Email</h6>
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className={cx('btn')}>
                                    <Button primary type="submit">
                                        Cập nhật
                                    </Button>
                                    {/* <Button disabled large>Cập nhật</Button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx('box-right')} style={{ marginTop: '50px' }}>
                        <div className={cx('box-content')}>
                            <h5>Cập nhật mật khẩu</h5>
                            <form className={cx('box-form')} onSubmit={updatePasswordSubmit}>
                                <div className={cx('name', 'box-form')}>
                                    <h6>Mật khẩu hiện tại *</h6>
                                    <input
                                        type="text"
                                        required
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>
                                <div className={cx('mail', 'box-form')}>
                                    <h6>Mật khẩu mới *</h6>
                                    <input
                                        type="text"
                                        required
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div className={cx('phoneNo', 'box-form')}>
                                    <h6>Xác nhận mật khẩu *</h6>
                                    <input
                                        type="text"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className={cx('btn')}>
                                    <Button primary type="submit">
                                        Cập nhật
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
