import classNames from 'classnames/bind';
import styles from './boxBrands.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBrands } from '~/actions/brands';
import Brands from './brands';
import Form from './Form';
import Header from '../Header';

const cx = classNames.bind(styles);

function Boxbrands() {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);
    return (
        <div className={cx('admin')}>
            <div className={cx('header')}>
                <div>
                    <Header />
                </div>
                <div className={cx('content')}>
                    <div className={cx('brands')}>
                        <Brands setCurrentId={setCurrentId} />
                    </div>
                    <div className={cx('form')}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boxbrands;
