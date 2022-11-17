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
// import {createOrGetUser} from '~/utils/auth.js'


const cx = classNames.bind(styles);

function Login() {
    const [isSingup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
        const newUser = {
            username: username,
            password: password,
        };
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
                                <form onSubmit={handleSubmit}>
                                    {isSingup ? (
                                        <div className="row">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First name *"
                                                    // handlechange={handlechange}

                                                    autoFocus
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last name *"
                                                    // handlechange={handlechange}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <Fragment />
                                    )}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            placeholder="User name *"
                                            // handlechange={handlechange}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
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
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                        <div className={cx('eye')} onClick={() => {setShowPassword(!showPassword)}}>
                                            {showPassword ? (
                                                <FontAwesomeIcon icon={faEye} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            )}
                                        </div>
                                    </div>
                                    {isSingup ? (
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
                                    )}
                                    {isSingup ? (
                                        <div>
                                            {/* <GoogleLogin
                                                styles={{ width: '100% !important' }}
                                                onSuccess={(response) => console.log(response)}
                                                onError={() => console.log('Error')}
                                            /> */}
                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-primary btn-login text-uppercase fw-bold"
                                                    type="submit"
                                                >
                                                    {isSingup ? 'Sign Up' : 'Sign In'}
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            {/* <div>
                                                <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
                                            </div> */}
                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-primary btn-login text-uppercase fw-bold"
                                                    type="submit"
                                                >
                                                    {isSingup ? 'Sign Up' : 'Sign In'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    <hr className="my-4" />
                                    <div className="d-grid mb-2">
                                        <p className="btn-switch" onClick={switchMode}>
                                            {isSingup ? 'Already have an account? Sign In' : "Don't have an account?"}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
