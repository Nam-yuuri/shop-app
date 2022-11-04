import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';
import './Product.css';
import { DataProduct } from '~/Data/Product/Product';
import { useSelector, useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function ProductTablet() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataProduct);
        }, 0);
    }, []);

    const renderNotification = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <NotificationItem />
                </PopperWrapper>
            </div>
        );
    };


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.map((product) => (
                    <div key={product.id} className={cx('boxproduct')}>
                        <div >
                            <Button to={product.to} className={cx('box')}>
                                <div className={cx('content')}>
                                    <div className={cx('box-img')}>
                                        <img src={product.img} alt="" />
                                    </div>
                                    <span>{product.name}</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductTablet;
