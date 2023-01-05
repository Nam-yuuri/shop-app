import classNames from 'classnames/bind';
import styles from './Address.module.scss';

import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clearErrors, loadUser, updatePassword, updateProfile, updateShippingInfo } from '~/actions/userAction';
import Button from '~/components/Button';
import { UPDATE_PASSWORD_RESET, UPDATE_PROFILE_RESET, UPDATE_SHIP_RESET } from '~/constants/userConstants';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { Alert, Snackbar } from '@mui/material';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

function Address() {
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
    const dispatch = useDispatch();
    const { user, loading: userLoading } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const [addressInfo, setAddressInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');
    const [stateInfo, setStateInfo] = useState('');
    const [countryInfo, setCountryInfo] = useState('');
    const [phoneNoInfo, setPhoneNoInfo] = useState('');

    let navigate = useNavigate();

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const myForm = {
            name,
            email,
        };
        dispatch(updateProfile(myForm));
    };

    const updateShippingInfoSubmit = (e) => {
        e.preventDefault();

        const shippingInfo = {
            city,
            state,
            country,
            address,
            phoneNo,
        };

        dispatch(updateShippingInfo(shippingInfo));
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

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
        if (user && user.shippingInfo) {
            setCity(user.shippingInfo.city);
            setState(user.shippingInfo.state);
            setCountry(user.shippingInfo.country);
            setAddress(user.shippingInfo.address);
            setPhoneNo(user.shippingInfo.phoneNo);

            setCityInfo(user.shippingInfo.city);
            setStateInfo(user.shippingInfo.state);
            setCountryInfo(user.shippingInfo.country);
            setAddressInfo(user.shippingInfo.address);
            setPhoneNoInfo(user.shippingInfo.phoneNo);
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
            dispatch(loadUser());
            setForm(false);
            navigate('/address');
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

    const [form, setForm] = useState(false);

    // console.log('user', user);

    return (
        <div>
            {userLoading ? (
                <Loading />
            ) : (
                <div className={cx('Address')}>
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                            {errorAlert}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                        <Alert
                            onClose={handleCloseSuccess}
                            severity="success"
                            sx={{ width: '100%', fontSize: '0.85em' }}
                        >
                            {successAlert}
                        </Alert>
                    </Snackbar>
                    <div className={cx('container-address')}>
                        <div className={cx('container-left')}>
                            <Sidebar />
                        </div>

                        <div className={cx('container-right')}>
                            {user && user.shippingInfo && (
                                <div className={cx('add-default')}>
                                    <h5>Địa chỉ giao hàng hiện tại của bạn</h5>
                                    <div className={cx('box-add')}>
                                        <div className={cx('content-add')}>
                                            <div className={cx('name-add')}>
                                                <div className={cx('name')}>{user.name}</div>
                                                <span className={cx('caption-add')}>
                                                    <div className={cx('caption')}>MẶC ĐỊNH</div>
                                                </span>
                                            </div>
                                            <div className={cx('address-add', 'info-add')}>
                                                Địa chỉ: {user.shippingInfo.address}, {user.shippingInfo.country},{' '}
                                                {user.shippingInfo.state}, {user.shippingInfo.city}
                                            </div>
                                            <div className={cx('phone-add', 'info-add')}>
                                                Điện thoại: {user.shippingInfo.phoneNo}
                                            </div>
                                        </div>
                                        <div className={cx('btn-add')}>
                                            <button className={cx('btn')}>
                                                <div
                                                    onClick={() => {
                                                        setForm(!form);
                                                    }}
                                                >
                                                    Chỉnh sửa
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className={cx('form')} style={{ display: form ? 'block' : 'none' }}>
                                <div className={cx('box-right')}>
                                    <div className={cx('box-content')}>
                                        <h5>Thông tin địa chỉ</h5>
                                        <form className={cx('box-form')} onSubmit={updateShippingInfoSubmit}>
                                            <div className={cx('name', 'box-form')}>
                                                <h6>
                                                    Thành phố / Tỉnh<span style={{ color: 'red' }}>*</span>
                                                </h6>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setCity(e.target.value)}
                                                    value={city}
                                                />
                                            </div>
                                            <div className={cx('mail', 'box-form')}>
                                                <h6>
                                                    Quận / Huyện<span style={{ color: 'red' }}>*</span>
                                                </h6>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setState(e.target.value)}
                                                    value={state}
                                                />
                                            </div>
                                            <div className={cx('mail', 'box-form')}>
                                                <h6>
                                                    Phường / Xã<span style={{ color: 'red' }}>*</span>
                                                </h6>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    value={country}
                                                />
                                            </div>
                                            <div className={cx('birthday', 'box-form')}>
                                                <h6>
                                                    Địa chỉ<span style={{ color: 'red' }}>*</span>
                                                </h6>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    value={address}
                                                />
                                            </div>
                                            <div className={cx('phoneNo', 'box-form')}>
                                                <h6>
                                                    Số điện thoại<span style={{ color: 'red' }}>*</span>
                                                </h6>
                                                <input
                                                    type="number"
                                                    onChange={(e) => setPhoneNo(e.target.value)}
                                                    value={phoneNo}
                                                />
                                            </div>
                                            <div className={cx('btn')}>
                                                <Button primary large type="submit">
                                                    Cập nhật
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Address;
