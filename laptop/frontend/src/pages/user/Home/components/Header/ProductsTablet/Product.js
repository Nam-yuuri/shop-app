import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';
import './Product.css';
import { DataProduct } from '~/Data/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBrands } from '~/actions/brandAction';
import config from '~/config';

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

    const dispatch = useDispatch();

    const { loading, brands } = useSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);

    // console.log('brand: ', brands);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {brands.map((product) => (
                    <div key={product._id}>
                        <div className={cx('')}>
                            <Button to={config.routes.brand} className={cx('box')}>
                                <div className={cx('content')}>
                                    <div className={cx('box-img')}>
                                        <img src={product.logo.url} alt="" />
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
