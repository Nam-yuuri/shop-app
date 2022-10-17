import classNames from 'classnames/bind';
import styles from './boxProducts.module.scss';
import './admin.css';
import { Fragment, useEffect, useState } from 'react';
import { getProducts } from '~/actions/products';
import { useDispatch } from 'react-redux';
import Products from './Products';
import Form from './Form';
import Header from '../Header';
import BoxProfile from './boxProfiles/boxProfiles';
// import Products from './boxProducts/Products';
// import Form from './boxProducts/Form';
// import Products from './Products/products';

const cx = classNames.bind(styles);

function Boxproducts() {
    const [currentId, setCurrentId] = useState(null);
    const [profileCurrentId, setProfileCurrentId] = useState(null);

    const [profile, setProfile] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className={cx('admin')}>
            <div className={cx('header')}>
                <div>
                    <Header />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('product')}>
                    <Products setCurrentId={setCurrentId} currentId={currentId} setProfile={setProfile} setProfileCurrentId={setProfileCurrentId}/>
                </div>
                <div className={cx('form')}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
            {!profile ? (
                <Fragment />
            ) : (
                <div className={cx('Profile')}>
                    <div className={cx('box-profile')}>
                        <BoxProfile setProfile={setProfile} profileCurrentId={profileCurrentId} setProfileCurrentId={setProfileCurrentId} currentId={currentId} setCurrentId={setCurrentId}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Boxproducts;
