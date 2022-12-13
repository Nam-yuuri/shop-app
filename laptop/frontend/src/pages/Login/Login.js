import classNames from 'classnames/bind';
import styles from './Login.module.scss';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
import './Login.css';
import { Fragment, useEffect, useState } from 'react';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { clearErrors, loadUser, login, register } from '~/actions/userAction';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Box, Grid, Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import {createOrGetUser} from '~/utils/auth.js'

const cx = classNames.bind(styles);

const useStyles = makeStyles({
    root: {},
    avatarInput: {
        display: 'flex',
        alignItems: ' center',
    },
    avatarPreview: {
        width: '6rem',
        height: '6rem',
        borderRadius: '100%',
        marginRight: '15px',
    },
    avatarFile: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0%',
    },
});

function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const classes = useStyles();

    const [isSingup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [clicked, setClicked] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [checkPassword, setCheckpassword] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [open, setOpen] = useState(false);
    // const [er, setEr] = useState('');

    // const [avatar, setAvatar] = useState('');
    // const [avatarPreview, setAvatarPreview] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // const createBannerImagesChange = (e) => {
    //     const files = Array.from(e.target.files);

    //     setImages([]);
    //     setImagesPreview([]);

    //     files.forEach((file) => {
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 setImagesPreview((old) => [...old, reader.result]);
    //                 setImages((old) => [...old, reader.result]);
    //             }
    //         };

    //         reader.readAsDataURL(file);
    //     });
    // };

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    // const { name, email, password } = user;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [er, setEr] = useState('');
    const [avatar, setAvatar] = useState(
        'https://res.cloudinary.com/dx1ecgla5/image/upload/v1670298772/avatars/avt/avt_gpdqfj.jpg',
    );
    const [avatarPreview, setAvatarPreview] = useState(
        'https://res.cloudinary.com/dx1ecgla5/image/upload/v1670298772/avatars/avt/avt_gpdqfj.jpg',
    );

    // const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('email', email);
        myForm.set('password', password);
        myForm.set('avatar', avatar);

        dispatch(register(myForm));
    };

    // console.log('id: ', user);

    // const registerSubmit = () => {
    //     if (checkPassword === password) {
    //         Register();
    //     } else {
    //         setOpen(true);
    //         setEr('Mật khẩu không trùng khớp');
    //         // dispatch(clearErrors());
    //         setIsSignup(true);
    //     }
    // };

    // const id = user._id;

    // console.log("id: ", id)

    useEffect(() => {
        if (error) {
            //   alert(error);
            setOpen(true);
            setEr(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            // hop le
            dispatch(loadUser());
            // alert("ok")
            //   history.push("/");
            navigate('/');
        }
    }, [dispatch, error, isAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
        // const newUser = {
        //     username: username,
        //     password: password,
        // };
    };

    const registerDataChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            // setUser({ ...user, [e.target.name]: e.target.value });
            // setName
        }
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (response) => {
        // createOrGetUser(response)
        navigate('/');
    };

    const googleFailure = (res) => {
        console.log('error');
    };

    // console.log(decode)

    return (
        <div className={cx('Login')}>
            <h1 style={{ textAlign: 'center' }}>
                Chào mừng bạn đến với PhongVu.vn | Laptop, PC, Màn hình, điện thoại, linh kiện Chính Hãng!
            </h1>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {er}
                </Alert>
            </Snackbar>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                {/* <div>
                                    <img src={createOrGetUser} alt='' />
                                </div> */}
                                <h2 className="card-title text-center mb-5 fw-light fs-5">
                                    {isSingup ? 'Sign Up' : 'Sign In'}
                                </h2>
                                {isSingup ? (
                                    <form method="POST" onSubmit={registerSubmit}>
                                        <div className="row">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name *"
                                                    autoFocus
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                    }}
                                                    // onChange={registerDataChange}
                                                />
                                            </div>
                                            {/* <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last name *"
                                                // handlechange={handlechange}
                                            />
                                        </div> */}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Email *"
                                                value={email}
                                                name="email"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                                // onChange={registerDataChange}
                                            />
                                        </div>
                                        <div className="form-group password">
                                            <input
                                                // type={!showPassword ? 'text' : 'password'}
                                                type={'text'}
                                                className="form-control"
                                                id="inputPassword"
                                                placeholder="Password *"
                                                // handlechange={handlechange}
                                                // handleShowPassword={handleShowPassword}
                                                value={password}
                                                name="password"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                // onChange={registerDataChange}
                                            />
                                            <div
                                                className={cx('eye')}
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            >
                                                {showPassword ? (
                                                    <FontAwesomeIcon icon={faEye} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faEyeSlash} />
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className="form-group"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <label htmlFor="register-avatar">Ảnh đại diện</label>
                                            <div id="registerImage" className={classes.avatarInput}>
                                                <img
                                                    src={avatarPreview}
                                                    alt="Avatar"
                                                    className={classes.avatarPreview}
                                                />
                                                <input
                                                    id="register-avatar"
                                                    className={classes.avatarFile}
                                                    type="file"
                                                    name="avatar"
                                                    accept="image/*"
                                                    onChange={registerDataChange}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-primary btn-login text-uppercase fw-bold"
                                                    type="submit"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>

                                        <hr className="my-4" />

                                        <div className="d-grid mb-2">
                                            <p className="btn-switch" onClick={switchMode}>
                                                Already have an account? Sign In
                                            </p>
                                        </div>
                                    </form>
                                ) : (
                                    <form method="POST" onSubmit={loginSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Email *"
                                                // handlechange={handlechange}
                                                value={loginEmail}
                                                onChange={(e) => {
                                                    setLoginEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group password">
                                            <input
                                                type={!showPassword ? 'text' : 'password'}
                                                className="form-control"
                                                id="inputPassword"
                                                placeholder="Password *"
                                                // handlechange={handlechange}
                                                // handleShowPassword={handleShowPassword}
                                                value={loginPassword}
                                                onChange={(e) => {
                                                    setLoginPassword(e.target.value);
                                                }}
                                            />
                                            <div
                                                className={cx('eye')}
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            >
                                                {showPassword ? (
                                                    <FontAwesomeIcon icon={faEye} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faEyeSlash} />
                                                )}
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary btn-login text-uppercase fw-bold"
                                                type="submit"
                                            >
                                                Sign In
                                            </button>
                                        </div>

                                        <hr className="my-4" />
                                        <div className="d-grid mb-2">
                                            <p className="btn-switch" onClick={switchMode}>
                                                Don't have an account?
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
