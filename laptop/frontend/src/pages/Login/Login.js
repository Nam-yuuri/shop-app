import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import './Login.css';
import { Fragment, useEffect, useState } from 'react';
import Button from '~/components/Button';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { login, register } from '~/actions/userAction';
// import {createOrGetUser} from '~/utils/auth.js'

const cx = classNames.bind(styles);

function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const [isSingup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [clicked, setClicked] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    // const { name, email, password } = user;
    // const [er, setEr] = useState('');
    // const [avatar, setAvatar] = useState('/Profile.png');
    // const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

    // const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

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

        dispatch(register(myForm));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
        // const newUser = {
        //     username: username,
        //     password: password,
        // };
    };

    const registerDataChange = (e) => {
        // if (e.target.name === 'avatar') {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         if (reader.readyState === 2) {
        //             setAvatarPreview(reader.result);
        //             setAvatar(reader.result);
        //         }
        //     };
        //     reader.readAsDataURL(e.target.files[0]);
        // } else {
        //     setUser({ ...user, [e.target.name]: e.target.value });
        // }
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (response) => {
        // createOrGetUser(response)
    };

    const googleFailure = (res) => {
        console.log('error');
    };

    // console.log(decode)

    return (
        <div className={cx('Login')}>
            {/* <h1>Chào mừng bạn đến với PhongVu.vn | Laptop, PC, Màn hình, điện thoại, linh kiện Chính Hãng!</h1> */}

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
                                    <form onSubmit={registerSubmit}>
                                        <div className="row">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name *"
                                                    // handlechange={handlechange}
                                                    autoFocus
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
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
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Email *"
                                                // handlechange={handlechange}
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
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
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                            />
                                            {/* <div
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
                                            </div> */}
                                        </div>
                                        {/* {isSingup ? (
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputRepeat"
                                                placeholder="Repeat Password *"
                                            />
                                        </div>
                                    ) : (
                                        <Fragment />
                                    )} */}

                                        <div>
                                            {/* <div>
                                            <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
                                        </div> */}
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
                                    <form onSubmit={loginSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Email *"
                                                // handlechange={handlechange}
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
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
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
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
