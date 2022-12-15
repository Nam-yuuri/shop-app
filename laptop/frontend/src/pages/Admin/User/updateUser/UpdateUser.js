import {
    Alert,
    Autocomplete,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
} from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './UpdateUser.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, createShowroom, getShowroomDetails, updateShowroom } from '~/actions/showroomAction';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import { getUserDetails, updateUser } from '~/actions/userAction';
import { UPDATE_SHIP_RESET, UPDATE_USER_RESET } from '~/constants/userConstants';

function UpdateUser() {
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

    const [wrapperWidth, setWapperWidth] = useState(true);

    const roleOptions = ['admin', 'user'];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setphoneNo] = useState('');

    const [inputRoleValue, setInputRoleValue] = useState(roleOptions[1]);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();
    const userId = match.id;

    const { loading: updateLoading, error: updateError, isUpdated } = useSelector((state) => state.profile);
    const { user: userNow } = useSelector((state) => state.user);
    const { loading, error, user } = useSelector((state) => state.userDetails);

    // console.log('user', user);

    useEffect(() => {
        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId));
        } else {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        }

        if (error) {
            setOpenError(true);
            setErrorAlert(error);
            dispatch(clearErrors());
        }

        if (updateError) {
            setOpenError(true);
            setErrorAlert(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            setOpenSuccess(true);
            setSuccessAlert('Cập nhật tài khoản thành công');
            Swal.fire('Thành công!', 'Chỉnh sửa thông tin tài khoản thành công!', 'success');
            navigate('/admin/userList');
            dispatch({ type: UPDATE_USER_RESET });
            dispatch({
                type: UPDATE_SHIP_RESET,
            });
        }
    }, [dispatch, error, isUpdated, userId, user, updateError]);

    const updateUserSubmitHandler = (e) => {
        e.preventDefault();

        const shippingInfo = {
            city,
            state,
            country,
            address,
            phoneNo,
        };

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('email', email);
        myForm.set('role', role);
        myForm.set('shippingInfo', shippingInfo);

        dispatch(updateUser(userId, myForm));
    };

    return (
        <div>
            {updateLoading ? (
                <Loading />
            ) : (
                <div>
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
                    <div className="header-admin">
                        <div className="btn-sidebar" style={{ width: wrapperWidth ? '222px' : '35px' }}>
                            <FontAwesomeIcon
                                icon={wrapperWidth ? faChevronLeft : faBars}
                                onClick={() => {
                                    setWapperWidth(!wrapperWidth);
                                }}
                            />
                        </div>
                        <div className="header-sidebar">
                            <h1>Sửa thông tin tài khoản </h1>
                            <Link to={config.routes.userList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateUser">
                        <div>
                            <div
                                className="sidebar"
                                style={{
                                    width: wrapperWidth ? '222px' : '0px',
                                    display: wrapperWidth ? 'block' : 'none',
                                }}
                            >
                                <div className="box-sidebar">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                        <div className="data">
                            <form className="flexDiv" encType="multipart/form-data" onSubmit={updateUserSubmitHandler}>
                                <Grid container spacing={2}>
                                    {/* <div className="flexDiv"> */}
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Họ và tên</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Họ và tên"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Email</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            inputProps={{
                                                type: 'email',
                                            }}
                                            label="Email"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        ></TextField>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Quyền</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <Autocomplete
                                            value={role}
                                            onChange={(event, newValue) => {
                                                setRole(newValue);
                                            }}
                                            inputValue={inputRoleValue}
                                            onInputChange={(event, newInputValue) => {
                                                setInputRoleValue(newInputValue);
                                            }}
                                            id="controllable-role"
                                            options={roleOptions}
                                            sx={{ width: 510 }}
                                            renderInput={(params) => <TextField {...params} label="Quyền" />}
                                        />
                                    </Grid>

                                    {/* <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Thành phố</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Thành phố"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Quận / Huyện</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Quận / Huyện"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Xã / Phường</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Xã / Phường"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Địa chỉ</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Địa chỉ"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Số điện thoại</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Số điện thoại"
                                            required
                                            value={phoneNo}
                                            onChange={(e) => setphoneNo(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid> */}

                                    <Grid item xs={12}>
                                        <Button
                                            id="createProductBtn"
                                            type="submit"
                                            variant="contained"
                                            disabled={loading ? true : false}
                                            sx={{
                                                marginBottom: '50px',
                                            }}
                                        >
                                            Cập nhật tài khoản
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdateUser;
