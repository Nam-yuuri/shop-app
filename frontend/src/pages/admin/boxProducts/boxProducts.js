import classNames from 'classnames/bind';
import styles from './boxProducts.module.scss';
import './admin.css';
import { useEffect, useState } from 'react';
import { getProducts } from '~/actions/products';
import { useDispatch } from 'react-redux';
import Products from './Products';
import Form from './Form';
import Header from '../Header';
// import Products from './boxProducts/Products';
// import Form from './boxProducts/Form';
// import Products from './Products/products';

const cx = classNames.bind(styles);

function Boxproducts() {
    const [currentId, setCurrentId] = useState(null);

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
                    <Products setCurrentId={setCurrentId} />
                </div>
                <div className={cx('form')}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
        </div>
    );
}

export default Boxproducts;
